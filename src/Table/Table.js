import React from 'react';
import PropTypes from 'prop-types';

export const Table = props => {
    const { headers, tableData } = props;
    return (
        <table className='fd-table'>
            <thead>
                <tr>
                    {headers.map((header, index) => {
                        return <th key={index}>{header}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.rowData.map((rowData, index) => {
                                return <td key={index}>{rowData}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
Table.propTypes = {
    headers: PropTypes.array,
    tableData: PropTypes.arrayOf(
        PropTypes.shape({
            rowData: PropTypes.array
        }).isRequired
    ).isRequired
};
