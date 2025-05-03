"use strict";

/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList, ActivityIndicator } from 'react-native';
import { useTheme } from "../../theme/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Select = ({
  options,
  onChange,
  value,
  placeholder = 'Select an option',
  disabled = false,
  loading = false
}) => {
  const {
    theme
  } = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);
  const selectedOption = options.find(option => option.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;
  const handleSelect = selectedValue => {
    onChange(selectedValue);
    setModalVisible(false);
  };
  const renderItem = ({
    item
  }) => /*#__PURE__*/_jsx(TouchableOpacity, {
    style: [styles.option, {
      backgroundColor: theme.secondary
    }],
    onPress: () => handleSelect(item.value),
    disabled: disabled || loading,
    children: /*#__PURE__*/_jsx(Text, {
      style: [styles.optionText, {
        color: theme.secondary
      }],
      children: item.label
    })
  });
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsxs(TouchableOpacity, {
      style: [styles.input, {
        backgroundColor: theme.background,
        borderColor: theme.border,
        opacity: disabled || loading ? 0.6 : 1
      }],
      onPress: () => !disabled && !loading && setModalVisible(true),
      disabled: disabled || loading,
      children: [/*#__PURE__*/_jsx(Text, {
        style: [styles.inputText, {
          color: selectedOption ? theme.primary : theme.secondary
        }],
        children: displayText
      }), /*#__PURE__*/_jsx(Text, {
        style: [styles.arrow, {
          color: theme.secondary
        }],
        children: "\u25BC"
      })]
    }), loading && /*#__PURE__*/_jsxs(View, {
      style: styles.loading,
      children: [/*#__PURE__*/_jsx(ActivityIndicator, {
        size: "small",
        color: theme.secondary
      }), /*#__PURE__*/_jsx(Text, {
        style: [styles.loadingText, {
          color: theme.secondary
        }],
        children: "Loading..."
      })]
    }), /*#__PURE__*/_jsx(Modal, {
      visible: isModalVisible,
      transparent: true,
      animationType: "fade",
      onRequestClose: () => setModalVisible(false),
      children: /*#__PURE__*/_jsx(TouchableOpacity, {
        style: styles.modalOverlay,
        activeOpacity: 1,
        onPress: () => setModalVisible(false),
        children: /*#__PURE__*/_jsx(View, {
          style: [styles.modalContent, {
            backgroundColor: theme.background
          }],
          children: /*#__PURE__*/_jsx(FlatList, {
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
const styles = StyleSheet.create({
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