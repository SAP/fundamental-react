import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Table = props => {
    const {
        headers,
        tableData,
        className,
        tableBodyProps,
        tableBodyRowProps,
        tableHeaderProps,
        tableHeaderRowProps,
        ...rest
    } = props;

    const tableClasses = classnames(
        'fd-table',
        className
    );

    return (
        <table {...rest} className={tableClasses}>
            <thead {...tableHeaderProps}>
                <tr {...tableHeaderRowProps}>
                    {headers.map((header, index) => {
                        return <th key={index}>{header}</th>;
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
                        <tr {...rowProps} key={index}>
                            {row.rowData.map((rowData, cellIndex) => {
                                return <td key={cellIndex}>{rowData}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

Table.displayName = 'Table';

Table.propTypes = {
    headers: PropTypes.array.isRequired,
    tableData: PropTypes.arrayOf(
        PropTypes.shape({
            rowData: PropTypes.array
        }).isRequired
    ).isRequired,
    className: PropTypes.string,
    tableBodyProps: PropTypes.object,
    tableBodyRowProps: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    tableHeaderProps: PropTypes.object,
    tableHeaderRowProps: PropTypes.object
};

Table.propDescriptions = {
    tableData: 'Array of objects that contain one property: `rowData` (an array of strings containing data for each column in the row).',
    headers: 'Array of localized text strings for the column headers.',
    tableBodyProps: 'Additional props to be spread to the `<tbody>` element.',
    tableBodyRowProps: 'Additional props to be spread to the `<tr>` elements within `<tbody>`. If using a function, the parameters passed will be an object representing the row (from `tableData`) and the row index.',
    tableHeaderProps: 'Additional props to be spread to the `<thead>` element.',
    tableHeaderRowProps: 'Additional props to be spread to the `<tr>` element within `<thead>`.'
};

export default Table;
