import withReact from '../../../utils/with-react';
import AXATopContentBar from './index';

export default createElement => ({
  ctatext,
  href,
  onClick,
  variant,
  className,
  children,
}) =>
  withReact(createElement)(
    AXATopContentBar.tagName,
    {
      ctatext,
      href,
      onClick,
      variant,
      className,
    },
    children
  );
