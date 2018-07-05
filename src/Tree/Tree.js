import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Link } from 'react-router-dom'


export const Tree = (props) => {
    const { headers, treeData, children } = props
    return (
        // <div>
        //     <div className="fd-tree fd-tree--header">
        //         <div className="fd-tree__row fd-tree__row--header">
        //             {
        //                 headers.map(header => {
        //                     return (
        //                         <div className="fd-tree__col">{header}</div>
        //                     )
        //                 })
        //             }
        //         </div>
        //     </div>
        //     <ul className="fd-tree" id="" role="tree">
        //         {
        //             treeData.map(row => {
        //                 return (
        //                     <li class="fd-tree__item" role="treeitem" id="inYUX852" aria-expanded="true">

                                
                                
        //                         {/*---------ROW 1---------*/}
        //                         <div className="fd-tree__row">
        //                             {
        //                                 row.values.map(colData => {
        //                                     return (
        //                                         (row.hasChildren) ? (
        //                                             (row.values.indexOf(colData) === 0) ? (
        //                                                 <div className="fd-tree__col fd-tree__col--control">
        //                                                     <button className="fd-tree__control" aria-label="Expand" aria-controls="inYUX852"
        //                                                         aria-pressed="false"></button>
        //                                                     {colData}
        //                                                 </div>
        //                                             ) : (
        //                                                     <div className="fd-tree__col fd-tree__col--control">
        //                                                         {colData}
        //                                                     </div>
        //                                                 )
        //                                         ) : (
        //                                                 <div className="fd-tree__col">{colData}</div>
        //                                             )
        //                                     )
        //                                 })
        //                             }
        //                         </div>
        //                         { row.hasChild ? (
        //                             <ul className="fd-tree__group fd-tree__group--sublevel-1" role="group" aria-hidden="false">
        //                                 <li class="fd-tree__item" role="treeitem" id="Bxd8s850" aria-expanded="true">
                                            
        //                                     <div class="fd-tree__row">
        //                                         {row.child.values.map(childEl => {
        //                                             return (
        //                                                 (row.child.hasChildren) ? (
        //                                                     (row.child.values.indexOf(childEl) === 0) ? (
        //                                                         <div className="fd-tree__col fd-tree__col--control">
        //                                                             <button className="fd-tree__control" aria-label="Expand" aria-controls="inYUX852"
        //                                                                 aria-pressed="false"></button>
        //                                                             {childEl}
        //                                                         </div>
        //                                                     ) : (
        //                                                             <div className="fd-tree__col">{childEl}</div>
        //                                                         )
        //                                                 ) : (
        //                                                         <div className="fd-tree__col">{childEl}</div>
        //                                                     )
        //                                             )
        //                                         })}
        //                                     </div>
        //                                 {row.hasGrandchild ? (
        //                                 <ul className="fd-tree__group fd-tree__group--sublevel-2" role="group" aria-hidden="false">
        //                                     <li class="fd-tree__item" role="treeitem" id="Bxd8s850" aria-expanded="true">
        //                                         <div class="fd-tree__row">
        //                                             {row.grandchild.values.map(grChild => {
        //                                                 console.log(grChild)
        //                                                 return (
        //                                                     (row.grandchild.hasChildren) ? (
        //                                                         (row.grandchild.values.indexOf(grChild) === 0) ? (
        //                                                             <div className="fd-tree__col fd-tree__col--control">
        //                                                                 <button className="fd-tree__control" aria-label="Expand" aria-controls="inYUX852"
        //                                                                     aria-pressed="false"></button>
        //                                                                 {grChild}
        //                                                             </div>
        //                                                         ) : (
        //                                                                 <div className="fd-tree__col">{grChild}</div>
        //                                                             )
        //                                                     ) : (
        //                                                             <div className="fd-tree__col">{grChild}</div>
        //                                                         )
        //                                                 )
        //                                             })}
        //                                         </div>
        //                                     </li>
        //                                 </ul>
        //                                 ) : null
        //                                 }
        //                             </li>
        //                         </ul>
        //                             ) : null
        //                         }



        //                     </li>
        //                 )
        //             })
        //         }
        //     </ul>





        // 
        <div></div>
    );
}
Tree.propTypes = {
    id: PropTypes.string
}

export class TreeList extends Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSelectChild = this.handleSelectChild.bind(this)

        let initialState = []

        props.links.map(link => {
            if (link.hasChild) {
                let id = link.id
                let obj = {}

                obj[id] = false
                initialState.push(obj)
            }
        })

        this.state = {
            selectedItem: 'item_2',
            itemStates: initialState
        }
    }

    handleSelectChild(e, id) {
        this.setState({
            selectedItem: id
        })
    }

    handleSelect(e, id) {

        let iStates = Object.assign({}, this.state.itemStates)
        iStates[id] = !iStates[id]
        this.setState({ itemStates: iStates })
        this.setState({ selectedItem: id })
    }

    render() {
        const { links } = this.props
        return (
            <BrowserRouter>
                <ul className="fd-mega-menu__list">
                    {
                        links.map(link => {
                            return (
                                <li className="fd-mega-menu__item" key={link.id} >
                                    <Link className={`fd-mega-menu__link${(this.state.selectedItem === link.id) ? ' is-selected' : ''}${link.hasChild ? ' has-child' : ''}${(this.state.itemStates[link.id] && link.hasChild) ? ' is-expanded' : ''}`} to={{ pathname: link.url }} key={link.id} onClick={(e) => this.handleSelect(e, link.id)}>
                                        {link.name}
                                    </Link>
                                    {
                                        link.hasChild ? (
                                            <ul className="fd-mega-menu__sublist" id={link.id} aria-hidden={!this.state.itemStates[link.id]} aria-expanded={this.state.itemStates[link.id]}>
                                                {
                                                    link.child.map(ch => {
                                                        return (
                                                            <li class="fd-mega-menu__subitem">
                                                                <Link className={`fd-mega-menu__sublink${(this.state.selectedItem === ch.id) ? ' is-selected' : ''}`} to={{ pathname: ch.url }} key={ch.id} onClick={(e) => this.handleSelectChild(e, ch.id)}>
                                                                    {ch.name}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        ) : null
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </BrowserRouter>
        );
    }
}
TreeList.propTypes = {
    links: PropTypes.array.isRequired
}