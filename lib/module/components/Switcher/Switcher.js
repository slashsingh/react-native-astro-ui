"use strict";

/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { useTheme } from "../../theme/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Switcher = ({
  label,
  value = false,
  onChange,
  disabled = false
}) => {
  const {
    theme
  } = useTheme();
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.container, {
      opacity: disabled ? 0.6 : 1
    }],
    children: [/*#__PURE__*/_jsx(Switch, {
      value: value,
      onValueChange: onChange,
      disabled: disabled,
      trackColor: {
        false: theme.border,
        true: theme.primary
      },
      thumbColor: theme.background,
      ios_backgroundColor: theme.border
    }), label && /*#__PURE__*/_jsx(Text, {
      style: [styles.label, {
        color: theme.text
      }],
      children: label
    })]
  });
};
const styles = StyleSheet.create({
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