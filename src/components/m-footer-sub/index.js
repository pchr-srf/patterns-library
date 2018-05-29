import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAFooterSub extends BaseComponentGlobal {
  static tagName = 'axa-footer-sub'

  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-footer-sub`;
  }
}

wcdomready(() => {
  window.customElements.define(AXAFooterSub.tagName, AXAFooterSub);
});

export default AXAFooterSub;
