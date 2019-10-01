import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const Table = React.forwardRef(({ headers, tableData, className, tableBodyClassName,
    tableBodyProps, tableBodyRowProps, tableCellClassName, tableHeaderClassName, tableHeaderProps,
    tableHeaderRowClassName, tableHeaderRowProps, tableRowClassName, disableStyles, ...props }, ref) => {

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
    headers: PropTypes.array.isRequired,
    tableData: PropTypes.arrayOf(
        PropTypes.shape({
            rowData: PropTypes.array
        }).isRequired
    ).isRequired,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    tableBodyClassName: PropTypes.string,
    tableBodyProps: PropTypes.object,
    tableBodyRowProps: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    tableCellClassName: PropTypes.string,
    tableHeaderClassName: PropTypes.string,
    tableHeaderProps: PropTypes.object,
    tableHeaderRowClassName: PropTypes.string,
    tableHeaderRowProps: PropTypes.object,
    tableRowClassName: PropTypes.string
};

Table.propDescriptions = {
    tableData: 'Array of objects that contain one property: `rowData` (an array of strings containing data for each column in the row).',
    headers: 'Array of localized text strings for the column headers.',
    tableBodyClassName: 'Additional classes to be added to the `<tbody>` element.',
    tableBodyProps: 'Additional props to be spread to the `<tbody>` element.',
    tableBodyRowProps: 'Additional props to be spread to the `<tr>` elements within `<tbody>`. If using a function, the parameters passed will be an object representing the row (from `tableData`) and the row index.',
    tableCellClassName: 'Additional classes to be added to the `<td>` elements.',
    tableHeaderClassName: 'Additional classes to be added to the `<thead>` element.',
    tableHeaderProps: 'Additional props to be spread to the `<thead>` element.',
    tableHeaderRowClassName: 'Additional classes to the `<tr>` element within `<thead>`.',
    tableHeaderRowProps: 'Additional props to be spread to the `<tr>` element within `<thead>`.',
    tableRowClassName: 'Additional classes to be added to the `<tr>` elements.'
};

export { Table as __Table };

export default withStyles(Table, { cssFile: 'table', fonts: true });
