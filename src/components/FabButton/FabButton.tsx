/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '../../theme';

interface FabButtonProps {
  label?: string;
  icon?: string; // Placeholder for icon (e.g., '+', '✎')
  onPress?: () => void;
  disabled?: boolean;
}

export const FabButton: React.FC<FabButtonProps> = ({
  label,
  icon = '+',
  onPress,
  disabled = false,
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: disabled ? theme.secondary : theme.primary,
            opacity: disabled ? 0.6 : 1,
          },
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[styles.icon, { color: theme.buttonText }]}>{icon}</Text>
      </TouchableOpacity>
      {label && (
        <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    alignItems: 'center',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  icon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
  },
});
