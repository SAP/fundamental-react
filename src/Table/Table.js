import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import GridManager from '../utils/gridManager/gridManager';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import React, { useCallback, useRef, useState } from 'react';
import styles from 'fundamental-styles/dist/table.css';

const classnames = classnamesBind.bind(styles);

/** A **Table** is a set of tabular data. Line items can support `data`, `images` and `actions`. */
const Table = React.forwardRef(({ headers, tableData, className, compact, condensed, keyboardNavigation, localizedText, tableBodyClassName,
    tableBodyProps, tableBodyRowProps, tableCellClassName, tableCheckboxClassName, tableHeaderClassName, tableHeaderProps,
    tableHeaderRowClassName, tableHeaderRowProps, tableRowClassName, richTable, ...props }, ref) => {

    const tableClasses = classnames(
        'fd-table',
        {
            'fd-table--compact': compact,
            'fd-table--condensed': condensed
        },
        className
    );

    const tableHeaderClasses = classnames(
        'fd-table__header',
        tableHeaderClassName
    );

    const tableHeaderRowClasses = classnames(
        'fd-table__row',
        {
            'fd-table__row--focusable': keyboardNavigation === 'row'
        },
        tableHeaderRowClassName
    );

    const tableBodyClasses = classnames(
        'fd-table__body',
        tableBodyClassName
    );

    const tableRowClasses = classnames(
        'fd-table__row',
        {
            'fd-table__cell--focusable': keyboardNavigation === 'row'
        },
        tableRowClassName
    );

    const tableCellClasses = classnames(
        'fd-table__cell',
        {
            'fd-table__cell--focusable': keyboardNavigation === 'cell'
        },
        tableCellClassName
    );

    const tableCheckboxClasses = classnames(
        'fd-table__cell',
        'fd-table__cell--checkbox',
        tableCheckboxClassName
    );

    const useHookWithRefCallback = () => {
        const newRef = useRef(null);
        const setRef = useCallback(node => {
            if (node && keyboardNavigation !== 'none') {
                gridManager.current.attachTo({ gridNode: node, onFocusCell, onToggleEditMode });
            }
            newRef.current = node;
        }, []);

        return setRef;
    };

    const captionId = shortid.generate();
    const gridManager = useRef(new GridManager());
    const tableRef = ref || useHookWithRefCallback();
    const [instructionsText, setInstructionsText] = useState('');

    const onToggleEditMode = (enable) => {
        setInstructionsText(enable ? localizedText.editModeDisable : '');
    };

    const onFocusCell = (cell, event) => {
        const { row, col } = cell;
        const key = event.which || event.keyCode;
        const navigatedHorizontally = (key === keycode.codes.left || key === keycode.codes.right) && col > 0;
        const navigatedVertically = (key === keycode.codes.up || key === keycode.codes.down) && row > 0;
        if (gridManager.current?.editMode) {
            setInstructionsText(localizedText.editModeDisable);
        } else {
            let newInstructionsText = '';
            if (navigatedVertically) {
                newInstructionsText += `${localizedText.row} ${row} `;
            } else if (navigatedHorizontally) {
                newInstructionsText += `${localizedText.column} ${col} ${headers[col]} `;
            } else {
                newInstructionsText += `${localizedText.arrowKeys} `;
            }
            if (gridManager.current?.isEditableCell(cell)) {
                newInstructionsText += localizedText.editModeEnable;
            }
            setInstructionsText(newInstructionsText);
        }
    };

    let checkboxHeader;
    let displayHeaders = [...headers];

    if (richTable) {
        checkboxHeader = <th className={tableCheckboxClasses}>{headers[0]}</th>;
        displayHeaders = displayHeaders.splice(1, headers.length);
    }

    return (
        <table {...props} aria-describedby={captionId}
            className={tableClasses}
            ref={tableRef}
            role={keyboardNavigation ? 'grid' : 'table'}>
            <caption aria-live='polite' className='fd-table__caption'
                id={captionId}>
                {instructionsText}
            </caption>
            <thead className={tableHeaderClasses} {...tableHeaderProps}>
                <tr className={tableHeaderRowClasses} {...tableHeaderRowProps}>
                    {richTable && checkboxHeader}
                    {displayHeaders.map((header, index) => {
                        return <th className={tableCellClasses} key={index}>{header}</th>;
                    })}
                </tr>
            </thead>
            <tbody className={tableBodyClasses} {...tableBodyProps}>
                {tableData.map((row, index) => {
                    let rowProps, checkboxCell;
                    let displayCells = [...row.rowData];

                    if (tableBodyRowProps) {
                        rowProps = (typeof tableBodyRowProps === 'function'
                            ? tableBodyRowProps(row, index)
                            : tableBodyRowProps);
                    }

                    if (richTable) {
                        checkboxCell = (
                            <td
                                className={tableCheckboxClasses}>
                                {row.rowData[0]}
                            </td>
                        );
                        displayCells = displayCells.splice(1, row.rowData.length);
                    }

                    return (
                        <tr
                            className={tableRowClasses}
                            {...rowProps}
                            aria-selected={row?.rowData[0]?.props?.checked}
                            key={index}>
                            {richTable && checkboxCell}
                            {displayCells.map((cellData, cellIndex) => {
                                if (cellData.type?.propTypes?.compact) {
                                    cellData = React.cloneElement(cellData, { compact: compact || condensed });
                                }
                                return <td className={tableCellClasses} key={cellIndex}>{cellData}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
});

Table.displayName = 'Table';

Table.propTypes = {
    /** Array of localized text strings for the column headers */
    headers: PropTypes.array.isRequired,
    /** Array of objects that contain one property: `rowData` (an array of nodes containing data for each column in the row) */
    tableData: PropTypes.arrayOf(
        PropTypes.shape({
            rowData: PropTypes.array
        }).isRequired
    ).isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to enable condensed mode */
    condensed: PropTypes.bool,
    /** Determines the type of keyboard navigation for the table. Set to `'cell'` for cell-level navigation or `'row'` for row-level navigation */
    keyboardNavigation: PropTypes.oneOf(['none', 'cell', 'row']),
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        /** Localized string informing screen reader users the table can be navigated by arrow keys */
        arrowKeys: PropTypes.string,
        /** Localized string informing screen reader users the current cell can be edited  */
        editModeEnable: PropTypes.string,
        /** Localized string informing screen reader users how to return to cell navigation */
        editModeDisable: PropTypes.string,
        /** Localized string for 'row' */
        row: PropTypes.string,
        /** Localized string for 'column' */
        column: PropTypes.string
    }),
    /** Set to **true** if Table contains checkboxes */
    richTable: PropTypes.bool,
    /** Additional classes to be added to the `<tbody>` element */
    tableBodyClassName: PropTypes.string,
    /** Additional props to be spread to the `<tbody>` element */
    tableBodyProps: PropTypes.object,
    /** Additional props to be spread to the `<tr>` elements within `<tbody>`.
     * If using a function, the parameters passed will be an object representing the row (from `tableData`) and the row index */
    tableBodyRowProps: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    /** Additional classes to be added to the `<td>` elements */
    tableCellClassName: PropTypes.string,
    /** Additional classes to be added to the Checkbox in a rich table */
    tableCheckboxClassName: PropTypes.string,
    /** Additional classes to be added to the `<thead>` element */
    tableHeaderClassName: PropTypes.string,
    /** Additional props to be spread to the `<thead>` element */
    tableHeaderProps: PropTypes.object,
    /** Additional classes to the `<tr>` element within `<thead>` */
    tableHeaderRowClassName: PropTypes.string,
    /** Additional props to be spread to the `<tr>` element within `<thead>` */
    tableHeaderRowProps: PropTypes.object,
    /** Additional classes to be added to the `<tr>` elements */
    tableRowClassName: PropTypes.string
};

Table.defaultProps = {
    keyboardNavigation: 'none',
    localizedText: {
        arrowKeys: 'Use arrow keys to navigate between cells',
        editModeEnable: 'Press Enter to edit this cell',
        editModeDisable: 'Press Escape to return to cell navigation',
        row: 'row',
        column: 'column'
    }
};

export default Table;
