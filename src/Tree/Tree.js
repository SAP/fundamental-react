import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Link } from 'react-router-dom'


export class Tree extends Component{

    constructor(props){
        super(props);
    }
    // const { headers, treeData, children } = props

    render() {
        const {headers, treeData, children} = this.props;
        return (
            <div>
                <div className="fd-tree fd-tree--header">
                    <div className="fd-tree__row fd-tree__row--header">
                        {
                            headers.map(header => {
                                return (
                                    <div className="fd-tree__col">{header}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <ul className="fd-tree" id="" role="tree">
                {console.log("TreeData")}
                {console.log(treeData)}
                    {
                           treeData.map(row=>{
                               (row.hasChildren)?(row.children.map(childs=>{
                                {console.log("==================")}
                                {console.log("CHILDS ARRAY:")}
                                {console.log(childs)}
                                {console.log("==================")}
                                    <Tree treeData={row}/>
                                    childs.values.map(element=>{
                                        return(
                                        <div className="fd-tree__col">

                                        {console.log("ELEMENT:")}
                                        {console.log(element)}
                                        {console.log("==================")}
                                        {console.log("CHILDS:")}
                                        {console.log(childs)}
                                        {element}
                                        </div>)
                                    })
                               })):(null)
                           })
                    }
                                    </ul>
                                    </div>
        );
    }

}
Tree.propTypes = {
    id: PropTypes.string
}

// export class TreeList extends Component {
//     constructor(props) {
//         super(props)
//         this.handleSelect = this.handleSelect.bind(this)
//         this.handleSelectChild = this.handleSelectChild.bind(this)

//         let initialState = []

//         props.links.map(link => {
//             if (link.hasChild) {
//                 let id = link.id
//                 let obj = {}

//                 obj[id] = false
//                 initialState.push(obj)
//             }
//         })

//         this.state = {
//             selectedItem: 'item_2',
//             itemStates: initialState
//         }
//     }

//     handleSelectChild(e, id) {
//         this.setState({
//             selectedItem: id
//         })
//     }

//     handleSelect(e, id) {

//         let iStates = Object.assign({}, this.state.itemStates)
//         iStates[id] = !iStates[id]
//         this.setState({ itemStates: iStates })
//         this.setState({ selectedItem: id })
//     }

//     render() {
//         const { links } = this.props
//         return (
//             <BrowserRouter>
//                 <ul className="fd-mega-menu__list">
//                     {
//                         links.map(link => {
//                             return (
//                                 <li className="fd-mega-menu__item" key={link.id} >
//                                     <Link className={`fd-mega-menu__link${(this.state.selectedItem === link.id) ? ' is-selected' : ''}${link.hasChild ? ' has-child' : ''}${(this.state.itemStates[link.id] && link.hasChild) ? ' is-expanded' : ''}`} to={{ pathname: link.url }} key={link.id} onClick={(e) => this.handleSelect(e, link.id)}>
//                                         {link.name}
//                                     </Link>
//                                     {
//                                         link.hasChild ? (
//                                             <ul className="fd-mega-menu__sublist" id={link.id} aria-hidden={!this.state.itemStates[link.id]} aria-expanded={this.state.itemStates[link.id]}>
//                                                 {
//                                                     link.child.map(ch => {
//                                                         return (
//                                                             <li class="fd-mega-menu__subitem">
//                                                                 <Link className={`fd-mega-menu__sublink${(this.state.selectedItem === ch.id) ? ' is-selected' : ''}`} to={{ pathname: ch.url }} key={ch.id} onClick={(e) => this.handleSelectChild(e, ch.id)}>
//                                                                     {ch.name}
//                                                                 </Link>
//                                                             </li>
//                                                         )
//                                                     })
//                                                 }
//                                             </ul>
//                                         ) : null
//                                     }
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </BrowserRouter>
//         );
//     }
// }
// TreeList.propTypes = {
//     links: PropTypes.array.isRequired
// }

/*
                                        (row.hasChildren)?(
                                            row.children.map(childs=>{
                                            return(
                                            <div class="fd-tree__row">{
                                                childs.values.map(elements=>{
                                                return(
                                                <div className="fd-tree__col">{elements}</div>)
                                            })}</div>)
                                        })):(null)
                                        */