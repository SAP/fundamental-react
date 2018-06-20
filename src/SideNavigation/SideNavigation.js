import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


export const SideNav = (props) => {
    const { icons, children } = props
    return (
        <nav className={`fd-side-nav${icons ? ' fd-side-nav--icons' : ''}`}>
            {children}
        </nav>
    );
}
SideNav.propTypes = {
    icons: PropTypes.bool
}

export class SideNavList extends Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSelectChild = this.handleSelectChild.bind(this)

       let initialState=[]
       
        props.links.map(link => {
            if(link.hasChild) {
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
        console.log(this.state.itemStates)
    }

    handleSelectChild(e, id) {
        this.setState({
            selectedItem: id
        })
    }

    handleSelect(e, id) {
         
        let iStates = Object.assign({}, this.state.itemStates)
        iStates[id] = !iStates[id]
        this.setState({itemStates:iStates})
        this.setState({selectedItem: id})
    }

    render() {
        const { links, children } = this.props
        return (
            <BrowserRouter>
                <ul className="fd-side-nav__list">
                    {
                        links.map(link => {
                            return (
                                <li className="fd-side-nav__item" key={link.id} >
                                    <Link className={`fd-side-nav__link${(this.state.selectedItem === link.id) ? ' is-selected' : ''}${link.hasChild ? ' has-child' : ''}${(this.state.itemStates[link.id] && link.hasChild) ? ' is-expanded' : ''}`} to={{ pathname: link.url }} key={link.id} onClick={(e) => this.handleSelect(e, link.id)}>
                                        {
                                            link.glyph ? (
                                                <span className={`fd-side-nav__icon${' sap-icon--' + link.glyph} sap-icon--l`} role="presentation"></span>
                                            ) : null
                                        }
                                        {link.name}
                                    </Link>
                                    {
                                        link.hasChild ? (
                                            <ul className="fd-side-nav__sublist" id={link.id} aria-hidden={!this.state.itemStates[link.id]} aria-expanded={this.state.itemStates[link.id]}>
                                                {
                                                    link.child.map(ch => {
                                                        return (
                                                            <Link className={`fd-side-nav__sublink${(this.state.selectedItem === ch.id) ? ' is-selected' : ''}`} to={{ pathname: ch.url }} key={ch.id} onClick={(e) => this.handleSelectChild(e, ch.id)}>
                                                                {ch.name}
                                                            </Link>
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
SideNavList.propTypes = {
    links: PropTypes.array.isRequired
}

export const SideNavGroup = (props) => {
    const { title, children } = props
    return (
        <div className="fd-side-nav__group">
            <h1 className="fd-side-nav__title">{title}</h1>
            {children}
        </div>
    );
}

SideNavGroup.propTypes = {
    title: PropTypes.string
}