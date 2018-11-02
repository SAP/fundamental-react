import React from 'react'
import PropTypes from 'prop-types'


export const Table = (props) => {
    const { headers, tableData } = props
    return (
        <table className="fd-table">
            <thead>
                {
                    headers.map(header => {
                        return (
                            <th>{header}</th>
                        )
                    })
                }
            </thead>
            <tbody>
                {
                    tableData.map(row => {
                        return (
                            <tr>
                                {
                                    row.rowData.map(rowData => {
                                        return (
                                            <td>{rowData}</td>
                                        )
                                    })
                                }

                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    );
}
Table.propTypes = {
    icons: PropTypes.bool
}


