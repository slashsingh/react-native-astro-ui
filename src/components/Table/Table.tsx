/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useTheme } from '../../theme';

interface TableProps {
  headings: string[];
  rows: string[][];
  onRowPress?: (row: string[], rowIndex: number) => void;
  disabledRows?: number[];
}

export const Table: React.FC<TableProps> = ({
  headings,
  rows,
  onRowPress,
  disabledRows = [],
}) => {
  const viewportWidth = Dimensions.get('window').width;
  const tableMinWidth = viewportWidth * 0.95;
  const {
    theme: { background, text, secondary, border },
  } = useTheme();

  return (
    <View
      style={[
        styles.table,
        { minWidth: tableMinWidth, backgroundColor: background },
      ]}
    >
      <View
        style={[
          styles.header,
          { backgroundColor: secondary, borderBottomColor: border },
        ]}
      >
        {headings.map((heading, index) => (
          <View
            key={`header-${index}`}
            style={[styles.headerCell, { borderRightColor: border }]}
          >
            <Text style={[styles.headerText, { color: text }]}>{heading}</Text>
          </View>
        ))}
      </View>
      {rows.map((row, rowIndex) => (
        <TouchableOpacity
          key={`row-${rowIndex}`}
          style={[
            styles.row,
            rowIndex % 2 === 0
              ? [styles.rowEven, { backgroundColor: background }]
              : [styles.rowOdd, { backgroundColor: secondary }],
            disabledRows.includes(rowIndex) && styles.disabledRow,
          ]}
          onPress={() => onRowPress && onRowPress(row, rowIndex)}
          disabled={disabledRows.includes(rowIndex) || !onRowPress}
        >
          {row.map((cell, cellIndex) => (
            <View
              key={`cell-${rowIndex}-${cellIndex}`}
              style={[styles.cell, { borderRightColor: border }]}
            >
              <Text
                style={[styles.cellText, { color: text }]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {cell}
              </Text>
            </View>
          ))}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 8,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerCell: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  headerText: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    minHeight: 48,
  },
  rowEven: {},
  rowOdd: {},
  cell: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRightWidth: 1,
    borderRightColor: '#eee',
  },
  cellText: {
    fontSize: 16,
    textAlign: 'center',
  },
  disabledRow: {
    opacity: 0.6,
  },
});
