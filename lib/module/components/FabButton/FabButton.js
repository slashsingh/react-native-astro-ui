"use strict";

/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from "../../theme/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const FabButton = ({
  label,
  icon = '+',
  onPress,
  disabled = false
}) => {
  const {
    theme
  } = useTheme();
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(TouchableOpacity, {
      style: [styles.button, {
        backgroundColor: disabled ? theme.secondary : theme.primary,
        opacity: disabled ? 0.6 : 1
      }],
      onPress: onPress,
      disabled: disabled,
      children: /*#__PURE__*/_jsx(Text, {
        style: [styles.icon, {
          color: theme.buttonText
        }],
        children: icon
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