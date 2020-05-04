import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** A **Table** is a set of tabular data. Line items can support `data`, `images` and `actions`. */
const Table = React.forwardRef(({ headers, tableData, className, tableBodyClassName,
    tableBodyProps, tableBodyRowProps, tableCellClassName, tableHeaderClassName, tableHeaderProps,
    tableHeaderRowClassName, tableHeaderRowProps, tableRowClassName, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/table.css');
        }
    }, []);

    const tableClasses = classnames(
        'fd-table',
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

    const tableRowClasses = classnames(
        'fd-table__row',
        tableRowClassName
    );

    const tableCellClasses = classnames(
        'fd-table__cell',
        tableCellClassName
    );

    return (
        <table {...props} className={tableClasses}
            ref={ref}>
            <thead className={tableHeaderClasses} {...tableHeaderProps}>
                <tr className={tableHeaderRowClasses} {...tableHeaderRowProps}>
                    {headers.map((header, index) => {
                        return <th className={tableCellClasses} key={index}>{header}</th>;
                    })}
                </tr>
            </thead>
            <tbody {...tableBodyProps}>
                {tableData.map((row, index) => {
                    let rowProps;
                    if (tableBodyRowProps) {
                        rowProps = (typeof tableBodyRowProps === 'function'
                            ? tableBodyRowProps(row, index)
                            : tableBodyRowProps);
                    }
                    return (
                        <tr
                            className={tableRowClasses}
                            {...rowProps}
                            key={index}>
                            {row.rowData.map((rowData, cellIndex) => {
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
    /** Internal use only */
    disableStyles: PropTypes.bool,
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

export default Table;
