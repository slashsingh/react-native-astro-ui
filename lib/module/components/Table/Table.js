"use strict";

/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from "../../theme/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Table = ({
  headings,
  rows,
  onRowPress,
  disabledRows = []
}) => {
  const viewportWidth = Dimensions.get('window').width;
  const tableMinWidth = viewportWidth * 0.95;
  const {
    theme: {
      background,
      text,
      secondary,
      border
    }
  } = useTheme();
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.table, {
      minWidth: tableMinWidth,
      backgroundColor: background
    }],
    children: [/*#__PURE__*/_jsx(View, {
      style: [styles.header, {
        backgroundColor: secondary,
        borderBottomColor: border
      }],
      children: headings.map((heading, index) => /*#__PURE__*/_jsx(View, {
        style: [styles.headerCell, {
          borderRightColor: border
        }],
        children: /*#__PURE__*/_jsx(Text, {
          style: [styles.headerText, {
            color: text
          }],
          children: heading
        })
      }, `header-${index}`))
    }), rows.map((row, rowIndex) => /*#__PURE__*/_jsx(TouchableOpacity, {
      style: [styles.row, rowIndex % 2 === 0 ? [styles.rowEven, {
        backgroundColor: background
      }] : [styles.rowOdd, {
        backgroundColor: secondary
      }], disabledRows.includes(rowIndex) && styles.disabledRow],
      onPress: () => onRowPress && onRowPress(row, rowIndex),
      disabled: disabledRows.includes(rowIndex) || !onRowPress,
      children: row.map((cell, cellIndex) => /*#__PURE__*/_jsx(View, {
        style: [styles.cell, {
          borderRightColor: border
        }],
        children: /*#__PURE__*/_jsx(Text, {
          style: [styles.cellText, {
            color: text
          }],
          numberOfLines: 1,
          ellipsizeMode: "tail",
          children: cell
        })
      }, `cell-${rowIndex}-${cellIndex}`))
    }, `row-${rowIndex}`))]
  });
};
const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 8
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  headerCell: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRightWidth: 1,
    borderRightColor: '#ddd'
  },
  headerText: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    minHeight: 48
  },
  rowEven: {},
  rowOdd: {},
  cell: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRightWidth: 1,
    borderRightColor: '#eee'
  },
  cellText: {
    fontSize: 16,
    textAlign: 'center'
  },
  disabledRow: {
    opacity: 0.6
  }
});
//# sourceMappingURL=Table.js.map