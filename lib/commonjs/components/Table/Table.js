"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @license
 * Copyright 2025 Aaskplanets
 */

const Table = ({
  headings,
  rows,
  onRowPress,
  disabledRows = []
}) => {
  const viewportWidth = _reactNative.Dimensions.get('window').width;
  const tableMinWidth = viewportWidth * 0.95;
  const {
    theme: {
      background,
      text,
      secondary,
      border
    }
  } = (0, _theme.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.table, {
      minWidth: tableMinWidth,
      backgroundColor: background
    }],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.header, {
        backgroundColor: secondary,
        borderBottomColor: border
      }],
      children: headings.map((heading, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.headerCell, {
          borderRightColor: border
        }],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.headerText, {
            color: text
          }],
          children: heading
        })
      }, `header-${index}`))
    }), rows.map((row, rowIndex) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      style: [styles.row, rowIndex % 2 === 0 ? [styles.rowEven, {
        backgroundColor: background
      }] : [styles.rowOdd, {
        backgroundColor: secondary
      }], disabledRows.includes(rowIndex) && styles.disabledRow],
      onPress: () => onRowPress && onRowPress(row, rowIndex),
      disabled: disabledRows.includes(rowIndex) || !onRowPress,
      children: row.map((cell, cellIndex) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.cell, {
          borderRightColor: border
        }],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
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
exports.Table = Table;
const styles = _reactNative.StyleSheet.create({
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