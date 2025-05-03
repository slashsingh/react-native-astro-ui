"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Button = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  loading = false,
  children
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const getVariantStyle = () => ({
    backgroundColor: variant === 'primary' ? theme.primary : theme.secondary
  });
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {
          paddingVertical: 6,
          paddingHorizontal: 12
        };
      case 'medium':
        return {
          paddingVertical: 10,
          paddingHorizontal: 16
        };
      case 'large':
        return {
          paddingVertical: 14,
          paddingHorizontal: 20
        };
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    style: [styles.button, getVariantStyle(), getSizeStyle(), disabled && styles.disabled],
    onPress: onClick,
    disabled: disabled || loading,
    children: loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
      color: theme.buttonText
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.text, {
        color: theme.buttonText
      }],
      children: children
    })
  });
};
exports.Button = Button;
const styles = _reactNative.StyleSheet.create({
  button: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: '600'
  },
  disabled: {
    opacity: 0.6
  }
});
//# sourceMappingURL=Button.js.map