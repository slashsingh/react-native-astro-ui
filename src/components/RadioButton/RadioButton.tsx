/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme';

interface RadioButtonProps {
  label?: string;
  selected?: boolean;
  onChange?: (selected: boolean) => void;
  disabled?: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected = false,
  onChange,
  disabled = false,
}) => {
  const { theme } = useTheme();

  const handlePress = () => {
    if (!disabled && onChange) {
      onChange(!selected);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { opacity: disabled ? 0.6 : 1 }]}
      onPress={handlePress}
      disabled={disabled}
    >
      <View
        style={[
          styles.radioOuter,
          {
            borderColor: selected ? theme.primary : theme.border,
            backgroundColor: theme.background,
          },
        ]}
      >
        {selected && (
          <View
            style={[styles.radioInner, { backgroundColor: theme.primary }]}
          />
        )}
      </View>
      {label && (
        <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    maxWidth: 300,
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  label: {
    fontSize: 16,
    marginLeft: 8,
  },
});
