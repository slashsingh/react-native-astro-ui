"use strict";

/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useTheme } from "../../theme/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const TextField = ({
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
  } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [label && /*#__PURE__*/_jsx(Text, {
      style: [styles.label, {
        color: theme.text
      }],
      children: label
    }), /*#__PURE__*/_jsx(TextInput, {
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
    }), error && /*#__PURE__*/_jsx(Text, {
      style: styles.errorText,
      children: error
    })]
  });
};
const styles = StyleSheet.create({
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