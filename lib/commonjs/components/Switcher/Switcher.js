"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switcher = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @license
 * Copyright 2025 Aaskplanets
 */

const Switcher = ({
  label,
  value = false,
  onChange,
  disabled = false
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, {
      opacity: disabled ? 0.6 : 1
    }],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Switch, {
      value: value,
      onValueChange: onChange,
      disabled: disabled,
      trackColor: {
        false: theme.border,
        true: theme.primary
      },
      thumbColor: theme.background,
      ios_backgroundColor: theme.border
    }), label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.label, {
        color: theme.text
      }],
      children: label
    })]
  });
};
exports.Switcher = Switcher;
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    maxWidth: 300
  },
  label: {
    fontSize: 16,
    marginLeft: 8
  }
});
//# sourceMappingURL=Switcher.js.map