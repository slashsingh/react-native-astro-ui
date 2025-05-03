"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @license
 * Copyright 2025 Aaskplanets
 */

const TextField = ({
  label,
  value = '',
  onChange,
  placeholder = 'Enter text',
  disabled = false,
  error,
  type = 'text'
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.container,
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.label, {
        color: theme.text
      }],
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, {
      style: [styles.input, {
        backgroundColor: theme.background,
        borderColor: error ? '#ff4d4f' : isFocused ? theme.primary : theme.border,
        color: theme.text,
        opacity: disabled ? 0.6 : 1
      }],
      value: value,
      onChangeText: onChange,
      placeholder: placeholder,
      placeholderTextColor: theme.secondary,
      editable: !disabled,
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      secureTextEntry: type === 'password'
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: styles.errorText,
      children: error
    })]
  });
};
exports.TextField = TextField;
const styles = _reactNative.StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 300,
    marginVertical: 8
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    fontSize: 16
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
    color: '#ff4d4f'
  }
});
//# sourceMappingURL=TextField.js.map