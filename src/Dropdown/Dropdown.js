import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../node_modules/fundamental-ui/scss/components/button.scss';

export class Dropdown extends Component {
    constructor(props) {
        super(props);
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
                        <nav className="fd-dropdown__menu">
                            <ul className="fd-dropdown__list">
                                {children}
                            </ul>
                        </nav>
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

export class DropdownItem extends Component {
    render() {
        const { link, text } = this.props;
        return (
            <li><a href={link} className="fd-dropdown__item">{text}</a></li>
        );
    }
}

DropdownItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
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
