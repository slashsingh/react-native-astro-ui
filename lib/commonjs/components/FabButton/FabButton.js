"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FabButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @license
 * Copyright 2025 Aaskplanets
 */

const FabButton = ({
  label,
  icon = '+',
  onPress,
  disabled = false
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.container,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      style: [styles.button, {
        backgroundColor: disabled ? theme.secondary : theme.primary,
        opacity: disabled ? 0.6 : 1
      }],
      onPress: onPress,
      disabled: disabled,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.icon, {
          color: theme.buttonText
        }],
        children: icon
      })
    }), label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.label, {
        color: theme.text
      }],
      children: label
    })]
  });
};
exports.FabButton = FabButton;
const styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    alignItems: 'center'
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  icon: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600'
  }
});
//# sourceMappingURL=FabButton.js.map