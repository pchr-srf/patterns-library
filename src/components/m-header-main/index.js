import PropTypes from '../../js/prop-types';
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAHeaderMain extends BaseComponentGlobal {
  static tagName = 'axa-header-main'
  static propTypes = {
    firstLeft: PropTypes.bool,
  }

  constructor() {
    super({ styles, template });

    this.provideContext();
  }

  willRenderCallback() {
    const { firstLeft } = this;

    this.className = classnames(this.initialClassName, 'm-header-main', {
      'm-header-main--first-left': firstLeft,
    });
  }
}

defineOnce(AXAHeaderMain.tagName, AXAHeaderMain);

export default AXAHeaderMain;
