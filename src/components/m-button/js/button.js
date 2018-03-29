import on from '../../../js/on';
import fire from '../../../js/fire';

class Button {
  static DEFAULTS = {
    button: '.js-button',
  };

  constructor(wcNode, options = {}) {
    this.wcNode = wcNode;

    this.options = {
      ...Button.DEFAULTS,
      ...options,
    };

    this.handleClick = this.handleClick.bind(this);

    this.init();
  }

  init() {
    this.button = this.wcNode.querySelector(this.options.button);

    this.on();
  }

  on() {
    this.off();

    this.unClick = on(this.button, 'click', this.handleClick, {
      passive: false,
    });
  }

  off() {
    if (this.unClick) {
      this.unClick();
    }
  }

  handleClick(event) {
    const cancelled = fire(this.wcNode, 'axa-click', null, { bubbles: true, cancelable: true, composed: true });

    if (!cancelled) {
      event.preventDefault();
    }
  }

  destroy() {
    this.off();

    if (this.button) {
      delete this.button;
    }

    if (this.wcNode) {
      delete this.wcNode;
    }

    if (this.options) {
      delete this.options;
    }

    delete this.handleClick;
  }
}

export default Button;
