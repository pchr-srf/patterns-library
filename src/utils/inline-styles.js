/* base class for non-ShadowDom components */

// IMPORTS
import { LitElement } from 'lit-element';

// MODULE GLOBALS

// map: customElementTagName |-> (ownerDocument |-> {referenceCount,style})
const crossTagReferenceCounts = {};

// BASE CLASS
export default class InlineStyles extends LitElement {
  /* append inline styles iff first instance in current document/ShadowRoot */
  inlineStyles(staticProps = 'styles') {
    // get this node's document or ShadowRoot, to be used as map key to attach
    // reference-count metadata to
    // N.B. getRootNode needs polyfill for non-Chromium Edge / IE
    // (https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode)
    const root = this.getRootNode();
    // retrieve all reference counts by tag name, initializing as needed
    // with WeakMap(). WeakMap (supported by IE11) acts as defense-in-depth
    // against memory leaks if disconnectedCallback is never called
    // (allowed by the spec).
    const referenceCounts =
      crossTagReferenceCounts[this.tagName] || new WeakMap();
    // one more reference, caused by this instance
    const info = referenceCounts.get(root) || {};
    const referenceCount = (info.referenceCount || 0) + 1;
    info.referenceCount = referenceCount;
    // no style sheet attached sofar?
    if (referenceCount === 1) {
      // remember our root in the instance, if not available natively
      // (ownerDocument), for DOM-removal-time cleanup.
      if (this.ownerDocument !== root) {
        this._rootNode = root;
      }
      // provision inline style sheet with *string* content
      // from the class property 'styles'
      const style = document.createElement('style');
      style.textContent = this.constructor[staticProps];
      style.dataset.name = this.tagName.toLowerCase(); // for testing/debugging purposes
      // append it at the right place, *outside* of this instance's children
      // eslint-disable-next-line no-undef
      const parent = root instanceof ShadowRoot ? root : document.head;
      parent.appendChild(style);
      info.style = style;
    }
    // persist reference-count metadata
    referenceCounts.set(root, info);
    crossTagReferenceCounts[this.tagName] = referenceCounts;
  }

  /* DOM-removal cleanup in module globals */
  disconnectedCallback() {
    super.disconnectedCallback();
    // if applicable, prepare reference-count metadata
    const referenceCounts = crossTagReferenceCounts[this.tagName];
    if (!referenceCounts) {
      return;
    }
    const root = this._rootNode || this.ownerDocument;
    const info = referenceCounts.get(root) || {};
    const referenceCount = (info.referenceCount || 0) - 1;
    // remove or update reference-count metadata
    if (referenceCount < 1) {
      referenceCounts.delete(root); // give an early hint to GC
      const { style } = info;
      if (style && style.parentNode) {
        style.parentNode.removeChild(style); // remove style node in DOM
      }
    } else {
      info.referenceCount = referenceCount;
      referenceCounts.set(root, info);
    }
  }
}
