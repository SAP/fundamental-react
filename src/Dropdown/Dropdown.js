import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom'
import '../../node_modules/fundamental-ui/scss/components/button.scss';

export class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.state = {
            isExpanded: false,
            isContextual: false
        }
    }

    handleDropdown(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    render() {
        const { buttonText, buttonIcon, size, state, isContextual, children } = this.props;
        const { isExpanded } = this.state;

        return (
            <div className="fd-dropdown">
                {isContextual ? (
                    <button className={`${buttonText ? 'fd-button' : 'fd-button--secondary sap-icon--vertical-grip'}${state ? ' is-' + state : ''}`} onClick={(e) => this.handleDropdown(e)} aria-expanded={isExpanded}>{buttonText}</button>
                ) : (
                        <button className={`fd-dropdown__control fd-button--toolbar ${buttonIcon ? 'sap-icon--' + buttonIcon : ''}${size ? ' fd-button--' + size : ''}${state ? ' is-' + state : ''}`} onClick={(e) => this.handleDropdown(e)} aria-expanded={isExpanded}>{buttonText}</button>
                    )}
                {
                    !!isExpanded && state !== 'disabled' ?
                        (<nav className="fd-dropdown__menu">
                            {children}
                        </nav>)
                        : null
                }
            </div>
        );
    }
}

Dropdown.propTypes = {
    buttonText: PropTypes.string,
    buttonIcon: PropTypes.string,
    size: PropTypes.string,
    state: PropTypes.string,
    isContextual: PropTypes.bool
}

export class DropdownList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { links } = this.props;
        return (
            <BrowserRouter>
                <ul className="fd-dropdown__list">
                    {
                        links.map(link => {
                            return (
                                <li className="fd-side-nav__item" key={link.id} >
                                    <Link className="fd-dropdown__item" to={{ pathname: link.url }} >{link.name}</Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </BrowserRouter>
        );
    }
}

DropdownList.propTypes = {
}

export class DropdownGroup extends Component {
    render() {
        const { headerTitle, children } = this.props;
        return (
            <div className="fd-dropdown__group">
                <h1 className="fd-dropdown__title">{headerTitle}</h1>
                <ul className="fd-dropdown__list">
                    {children}
                </ul>
            </div>
        );
    }
}

DropdownGroup.propTypes = {
    headerTitle: PropTypes.string
}
