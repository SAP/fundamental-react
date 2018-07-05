import React, { Component } from 'react'
import PropTypes from 'prop-types'


export const Table = (props) => {
    const { headers, tableData, children } = props
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
                        console.log(typeof(row));
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

// export class TableList extends Component {
//     constructor(props) {
//         super(props)

//     }

//     render() {
//         const { children } = this.props
//         return (
//             <div>
//             {children}
//         </div>
//         );
//     }
// }


