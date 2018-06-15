import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


export const SideNav = (props) => {
    const { icons, children } = props;
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
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelectChild = this.handleSelectChild.bind(this);
        this.state = {
            selectedItem: 'item-2',
            isOpen: false
        }
    }

    handleSelect(id) {
        this.setState({
            selectedItem: id,
            isOpen: !this.state.isOpen
        })
    }

    handleSelectChild(id) {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const { links, children } = this.props;
        return (
            <BrowserRouter>
                <ul className="fd-side-nav__list">
                    {
                        links.map(link => {
                            return (
                                <li className="fd-side-nav__item" key={link.id} >
                                    <Link className={`fd-side-nav__link${(this.state.selectedItem === link.id) ? ' is-selected' : ''}${link.hasChild ? ' has-child' : ''}`} to={{ pathname: link.url }} key={link.id} onClick={() => this.handleSelect(link.id)} aria-controls={link.id}>
                                        {
                                            link.glyph ? (
                                                <span className={`fd-side-nav__icon${' sap-icon--' + link.glyph} sap-icon--l`} role="presentation"></span>
                                            ) : null
                                        }
                                        {link.name}
                                    </Link>
                                    {
                                        link.hasChild ? (
                                            <ul className="fd-side-nav__sublist" id={link.id} aria-hidden={!this.state.isOpen} aria-haspopup={true} aria-expanded={this.state.isOpen}>
                                            {
                                                link.child.map(ch => {
                                                    return (
                                                        <Link className={`fd-side-nav__sublink${(this.state.selectedItem === ch.id) ? ' is-selected' : ''}`} to={{ pathname: ch.url }} key={ch.id} onClick={() => this.handleSelectChild(ch.id)}>
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
    const { title, children } = props;
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















// export class SideNavItem22222 extends Component {
//     constructor(props) {
//         super(props);
//         this.handleDropdown = this.handleDropdown.bind(this);
//         this.state = {

//         }
//     }

//     handleDropdown(e) {
//         e.preventDefault();
//         this.setState({
//             isExpanded: !this.state.isExpanded
//         })
//     }

//     render() {
//         const { buttonText, buttonIcon, size, state, isContextual, children } = this.props;
//         const { isExpanded } = this.state;

//         return (
//             <div className="fd-dropdown">
//                 {isContextual ? (
//                     <button className={`${buttonText ? 'fd-button' : 'fd-button--secondary sap-icon--vertical-grip'}${state ? ' is-' + state : ''}`} onClick={(e) => this.handleDropdown(e)} aria-expanded={isExpanded}>{buttonText}</button>
//                 ) : (
//                         <button className={`fd-dropdown__control fd-button--toolbar ${buttonIcon ? 'sap-icon--' + buttonIcon : ''}${size ? ' fd-button--' + size : ''}${state ? ' is-' + state : ''}`} onClick={(e) => this.handleDropdown(e)} aria-expanded={isExpanded}>{buttonText}</button>
//                     )}
//                 {
//                     !!isExpanded && state !== 'disabled' ?
//                         <nav className="fd-dropdown__menu">
//                             <ul className="fd-dropdown__list">
//                                 {children}
//                             </ul>
//                         </nav>
//                         : null
//                 }
//             </div>
//         );
//     }
// }

// Dropdown.propTypes = {
//     buttonText: PropTypes.string,
//     buttonIcon: PropTypes.string,
//     size: PropTypes.string,
//     state: PropTypes.string,
//     isContextual: PropTypes.bool
// }

// export class DropdownItem extends Component {
//     render() {
//         const { link, text } = this.props;
//         return (
//             <li><a href={link} className="fd-dropdown__item">{text}</a></li>
//         );
//     }
// }

// DropdownItem.propTypes = {
//     link: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired
// }

// export const Image = (props) => {
//     const { size, type, photo } = props;
//     return (
//         <span className={`${size ? 'fd-image--' + size : 'm'}${type ? ' fd-image--' + type : ''}`} style={{ backgroundImage: "url(" + photo + ")" }}>
//         </span>
//     );
// }

// Image.propTypes = {
//     size: PropTypes.string.isRequired,
//     type: PropTypes.string,
//     photo: PropTypes.string.isRequired
// }