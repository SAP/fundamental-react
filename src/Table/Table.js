import classnames from 'classnames';
import GridManager from '../utils/gridManager/gridManager';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef } from 'react';
import 'fundamental-styles/dist/table.css';

/** A **Table** is a set of tabular data. Line items can support `data`, `images` and `actions`. */
const Table = React.forwardRef(({ headers, tableData, className, compact, condensed, keyboardNavigation, tableBodyClassName,
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
        tableHeaderRowClassName
    );

    const tableBodyClasses = classnames(
        'fd-table__body',
        tableBodyClassName
    );

    const tableRowClasses = classnames(
        'fd-table__row',
        tableRowClassName
    );

    const tableCellClasses = classnames(
        'fd-table__cell',
        tableCellClassName
    );

    const tableCheckboxClasses = classnames(
        'fd-table__cell',
        'fd-table__cell--checkbox',
        tableCheckboxClassName
    );

    const gridManager = new GridManager();

    function useHookWithRefCallback() {
        const newRef = useRef(null);
        const setRef = useCallback(node => {
            if (node && keyboardNavigation !== 'none') {
                gridManager.attachTo({ gridNode: node });
            }
            newRef.current = node;
        }, []);

        return setRef;
    }

    const tableRef = ref || useHookWithRefCallback();

    useEffect(() => {
        gridManager.attachTo({ gridNode: tableRef.current });
    });

    let checkboxHeader;
    let displayHeaders = headers;

    if (richTable) {
        checkboxHeader = <th className={tableCheckboxClasses}>{headers[0]}</th>;
        displayHeaders = headers.splice(1, headers.length);
    }

    return (
        <table {...props} className={tableClasses}
            ref={tableRef}>
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
                    let displayRows = row.rowData;
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
                        displayRows = row.rowData.splice(1, row.rowData.length);
                    }

                    return (
                        <tr
                            className={tableRowClasses}
                            {...rowProps}
                            aria-selected={row?.rowData[0]?.props?.checked}
                            key={index}>
                            {richTable && checkboxCell}
                            {displayRows.map((rowData, cellIndex) => {
                                return <td className={tableCellClasses} key={cellIndex}>{rowData}</td>;
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
    /** Array of objects that contain one property: `rowData` (an array of strings containing data for each column in the row) */
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
    keyboardNavigation: 'none'
};

export default Table;
