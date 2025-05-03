/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { useTheme } from '../../theme';

interface SwitcherProps {
  label?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

export const Switcher: React.FC<SwitcherProps> = ({
  label,
  value = false,
  onChange,
  disabled = false,
}) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { opacity: disabled ? 0.6 : 1 }]}>
      <Switch
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        trackColor={{ false: theme.border, true: theme.primary }}
        thumbColor={theme.background}
        ios_backgroundColor={theme.border}
      />
      {label && (
        <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    maxWidth: 300,
  },
  label: {
    fontSize: 16,
    marginLeft: 8,
  },
});
