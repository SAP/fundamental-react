import PropTypes from 'prop-types';
import React from 'react';

export const Table = props => {
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

    return (
        <table {...rest} className={`fd-table${className ? ' ' + className : ''}`}>
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
Table.propTypes = {
    tableData: PropTypes.arrayOf(
        PropTypes.shape({
            rowData: PropTypes.array
        }).isRequired
    ).isRequired,
    className: PropTypes.string,
    headers: PropTypes.array,
    tableBodyProps: PropTypes.object,
    tableBodyRowProps: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    tableHeaderProps: PropTypes.object,
    tableHeaderRowProps: PropTypes.object
};
