import PropTypes from 'prop-types';

export { default as alignPropType } from './align-prop-type';
export * from './cell-prop-types';
export { default as floatPropType } from './float-prop-type';
export { default as localePropType } from './locale-prop-type';
export * from './row-prop-types';
export { default as sidePropType } from './side-prop-type';
export { default as sortPropType } from './sort-prop-type';
export { default as statePropType } from './state-prop-type';
export * from './table-prop-types';
export { default as urlPropType } from './url-prop-type';
export { default as valuePropType } from './value-prop-type';

const ReactPropTypes = {
  array: PropTypes.array,
  bool: PropTypes.bool,
  func: PropTypes.func,
  number: PropTypes.number,
  object: PropTypes.object,
  string: PropTypes.string,
  symbol: PropTypes.symbol,
};

export default {
  ...PropTypes,
  ...ReactPropTypes,
};
