"use strict";

import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from "../../theme/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  loading = false,
  children
}) => {
  const {
    theme
  } = useTheme();
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
  return /*#__PURE__*/_jsx(TouchableOpacity, {
    style: [styles.button, getVariantStyle(), getSizeStyle(), disabled && styles.disabled],
    onPress: onClick,
    disabled: disabled || loading,
    children: loading ? /*#__PURE__*/_jsx(ActivityIndicator, {
      color: theme.buttonText
    }) : /*#__PURE__*/_jsx(Text, {
      style: [styles.text, {
        color: theme.buttonText
      }],
      children: children
    })
  });
};
const styles = StyleSheet.create({
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