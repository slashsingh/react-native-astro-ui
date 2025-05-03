"use strict";

/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from "../../theme/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const RadioButton = ({
  label,
  selected = false,
  onChange,
  disabled = false
}) => {
  const {
    theme
  } = useTheme();
  const handlePress = () => {
    if (!disabled && onChange) {
      onChange(!selected);
    }
  };
  return /*#__PURE__*/_jsxs(TouchableOpacity, {
    style: [styles.container, {
      opacity: disabled ? 0.6 : 1
    }],
    onPress: handlePress,
    disabled: disabled,
    children: [/*#__PURE__*/_jsx(View, {
      style: [styles.radioOuter, {
        borderColor: selected ? theme.primary : theme.border,
        backgroundColor: theme.background
      }],
      children: selected && /*#__PURE__*/_jsx(View, {
        style: [styles.radioInner, {
          backgroundColor: theme.primary
        }]
      })
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