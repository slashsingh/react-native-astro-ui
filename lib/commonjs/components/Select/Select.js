"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @license
 * Copyright 2025 Aaskplanets
 */

const Select = ({
  options,
  onChange,
  value,
  placeholder = 'Select an option',
  disabled = false,
  loading = false
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const [isModalVisible, setModalVisible] = (0, _react.useState)(false);
  const selectedOption = options.find(option => option.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;
  const handleSelect = selectedValue => {
    onChange(selectedValue);
    setModalVisible(false);
  };
  const renderItem = ({
    item
  }) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    style: [styles.option, {
      backgroundColor: theme.secondary
    }],
    onPress: () => handleSelect(item.value),
    disabled: disabled || loading,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.optionText, {
        color: theme.secondary
      }],
      children: item.label
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.container,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
      style: [styles.input, {
        backgroundColor: theme.background,
        borderColor: theme.border,
        opacity: disabled || loading ? 0.6 : 1
      }],
      onPress: () => !disabled && !loading && setModalVisible(true),
      disabled: disabled || loading,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.inputText, {
          color: selectedOption ? theme.primary : theme.secondary
        }],
        children: displayText
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.arrow, {
          color: theme.secondary
        }],
        children: "\u25BC"
      })]
    }), loading && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.loading,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
        size: "small",
        color: theme.secondary
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.loadingText, {
          color: theme.secondary
        }],
        children: "Loading..."
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Modal, {
      visible: isModalVisible,
      transparent: true,
      animationType: "fade",
      onRequestClose: () => setModalVisible(false),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        style: styles.modalOverlay,
        activeOpacity: 1,
        onPress: () => setModalVisible(false),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.modalContent, {
            backgroundColor: theme.background
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.FlatList, {
            data: options,
            renderItem: renderItem,
            keyExtractor: item => item.value,
            style: styles.optionList
          })
        })
      })
    })]
  });
};
exports.Select = Select;
const styles = _reactNative.StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 300,
    position: 'relative'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'space-between'
  },
  inputText: {
    fontSize: 16,
    flex: 1
  },
  arrow: {
    fontSize: 14,
    marginLeft: 8
  },
  loading: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{
      translateY: -12
    }],
    flexDirection: 'row',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 14,
    marginLeft: 5
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: '80%',
    maxHeight: '50%',
    borderRadius: 8,
    overflow: 'hidden'
  },
  optionList: {
    maxHeight: 200
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  optionText: {
    fontSize: 16
  }
});
//# sourceMappingURL=Select.js.map