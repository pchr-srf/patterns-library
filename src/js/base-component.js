import getAttributes from './get-attributes';
import { publish, subscribe } from './pubsub';

const THROWED_ERROR = 'throwed';

/**
 * Base class {BaseComponent}. This class checks if a template is set in the custom element
 * and if yes appends it. It also appends custom styles to the top of the dom tree.
 *
 * **Light DOM**
 * The light DOM are the provided children from the users of your component (light meaning easy to digest).
 *
 * ```html
 * <axa-example>
 *   <div>This is some light DOM for axa-example</div>
 * </axa-example>
 * ```
 *
 * **Local DOM**
 * The local DOM is the DOM tree rendered by the component itself (in our case provided by `template`).
 *
 * ```js
 * function(props, childrenFragment) {
 *   return bel`<article>
 *     ${childrenFragment} <!-- light DOM injection point -->
 *   </article>`;
 * }
 * ```
 *
 * **Flattened DOM**
 * The flattened DOM is the final product where the user's light DOM is injected into the Components local DOM.
 *
 * ```html
 * <axa-example>
 *   <article>
 *     <div>This is some light DOM for axa-example</div> <!-- light DOM injection point -->
 *   </article>
 * </axa-example>
 * ```
 */
export default class BaseComponent extends HTMLElement {
  constructor(styles = '', template) {
    super();

    this._makeContextReady = this._makeContextReady.bind(this);
    this._initialise(styles, template);
  }

  /**
   * _initialise - description
   *
   * @param  {type} styles description
   * @param  {type} template description
   * @return {type}        description
   */
  _initialise(styles, template = null) {
    this.initialClassName = this.className;
    this._styles = styles;
    this._template = template;
  }

  /**
   * connectedCallback - description
   *
   * @return {type}  description
   */
  connectedCallback() {
    this._appendStyles();
    this.render();

    if (this.contextCallback) {
      this._makeContextReady();
    }
  }

  /**
   * disconnectedCallback - description
   *
   * @return {type}  description
   */
  disconnectedCallback() {
    if (this.unContextEnabled) {
      this.unContextEnabled();
    }
  }
  /**
   * _appendStyles - description
   *
   * @return {type}  description
   */
  _appendStyles(el = this) {
    if (this._styles) {
      const styleNode = document.createElement('style');
      const styleText = document.createTextNode(this._styles);
      styleNode.appendChild(styleText);
      if (el.insertAdjacentElement) {
        el.insertAdjacentElement('afterbegin', styleNode);
      } else {
        el.appendChild(styleNode);
      }
    }
  }

  /**
   * render - method can be overwritten and is called right after the component is connected
   * @TODO how to deal with re-renders, e.g. triggered by `attributeChangedCallback` or observed DOM
   *
   * @return {type}  description
   */
  render() { // eslint-disable-line
    const { _template: template } = this;

    if (template) {
      try {
        // At initial rendering -> collect the light DOM first
        if (!this._hasRendered) {
          const childrenFragment = document.createDocumentFragment();
          const lightDOMRefs = [];

          while (this.firstChild) {
            lightDOMRefs.push(this.firstChild);
            childrenFragment.appendChild(this.firstChild);
          }

          this.lightDOMRefs = lightDOMRefs;
          this.childrenFragment = childrenFragment;
        } else { // Reuse the light DOM for subsequent rendering
          this.lightDOMRefs.forEach((ref) => {
            this.childrenFragment.appendChild(ref);
          });
        }

        const items = template(getAttributes(this), this.childrenFragment);
        const renderFragment = document.createDocumentFragment();

        if (Array.isArray(items)) {
          items.forEach((item) => {
            renderFragment.appendChild(item);
          });
        } else if (items) {
          if (typeof items === 'string') {
            const err = new Error(THROWED_ERROR);
            // @TODO: implement log system
            console.error( // eslint-disable-line
              `\n%cWeb Component %c${this.nodeName}%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: ${err.stack}\n`, // eslint-disable-line
              'color: #580000; font-size: 14px; line-height:16px;',
              'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
              'color: #580000; font-size: 14px; line-height:16px;',
            );
            throw err;
          }
          renderFragment.appendChild(items);
        }

        // rebuild the whole DOM subtree
        // @todo: this will breaks disconnect previous references
        super.innerHTML = '';
        super.appendChild(renderFragment);

        this._hasRendered = true;
      } catch (err) {
        if (err.message !== THROWED_ERROR) {
          console.error( // eslint-disable-line
            `\n%cWeb Component %c${this.nodeName}%c has an error while loading its template:\n${err}\n\nStack Trace: ${err.stack}\n`,
            'color: #580000; font-size: 14px; line-height:16px;',
            'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
            'color: #580000; font-size: 14px; line-height:16px;',
          );
        }
      }
    }
  }

  // @TODO: atm no data can be shared by enabling context, though this could be necessary
  /**
   * Provides an opt-in contextual scope for hierarchy-agnostic child components.
   */
  enableContext() {
    const contextName = this.nodeName.toLowerCase();

    this.__isContext = true;
    this.__contextName = contextName;

    // publish context/enabled with contextual node name
    publish('context/enabled', contextName);
  }

  /**
   * Opt-in to select a specific context by component name.
   *
   * @param name
   */
  selectContext(name) {
    this.__selectedContext = name && name.toLowerCase();
  }

  _makeContextReady({ detail: contextName } = {}) {
    if (this.contextNode) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.contextCallback(this.contextNode, contextName);
      }, 10);
    }

    if (this.unContextEnabled) {
      this.unContextEnabled();
    }

    this.unContextEnabled = subscribe('context/enabled', this._makeContextReady);
  }

  /**
   * Returns contextual scope, if defined by any parent component.
   *
   * @returns {ContextNode|Boolean} - Returns an associated context node if found, else `false`.
   */
  get contextNode() {
    const { __selectedContext } = this;
    let { parentNode } = this;

    while (parentNode && (!parentNode.__isContext || (__selectedContext && __selectedContext !== parentNode.__contextName))) {
      // eslint-disable-next-line prefer-destructuring
      parentNode = parentNode.parentNode;
    }

    return (parentNode && parentNode.__isContext) ? parentNode : false;
  }

  static uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line
      return v.toString(16);
    });
  }
}
