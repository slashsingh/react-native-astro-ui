"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @license
 * Copyright 2025 Aaskplanets
 */

const RadioButton = ({
  label,
  selected = false,
  onChange,
  disabled = false
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const handlePress = () => {
    if (!disabled && onChange) {
      onChange(!selected);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
    style: [styles.container, {
      opacity: disabled ? 0.6 : 1
    }],
    onPress: handlePress,
    disabled: disabled,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.radioOuter, {
        borderColor: selected ? theme.primary : theme.border,
        backgroundColor: theme.background
      }],
      children: selected && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.radioInner, {
          backgroundColor: theme.primary
        }]
      })
    }), label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.label, {
        color: theme.text
      }],
      children: label
    })]
  });
};
exports.RadioButton = RadioButton;
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    maxWidth: 300
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6
  },
  label: {
    fontSize: 16,
    marginLeft: 8
  }
});
//# sourceMappingURL=RadioButton.js.map