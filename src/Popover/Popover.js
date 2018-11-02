import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ---------------------------------------- Popover ----------------------------------------
export class Popover extends Component {
    constructor(props) {
        super(props);
        this.triggerBody = this.triggerBody.bind(this);
        this.pressEsc = this.pressEsc.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.state = {
            isExpanded: false,
            isDisabled: this.props.state === 'disabled'
        };
    }

    triggerBody() {
        if (!this.state.isDisabled) {
            if (!this.state.isExpanded) {
                document.addEventListener('click', this.handleOutsideClick, false);
            } else {
                document.removeEventListener('click', this.handleOutsideClick, false);
            }

            this.setState(prevState => ({
                isExpanded: !prevState.isExpanded
            }));
        }
    }

    pressEsc(event) {
        if (event.keyCode === 27 && this.state.isExpanded === true) {
            this.setState({
                isExpanded: false
            });
        }
    }

    handleOutsideClick(e) {
        if (!this.node.contains(e.target)) {
            if (this.state.isExpanded) {
                this.setState({
                    isExpanded: false
                });
            } else {
                return;
            }
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.pressEsc, false);
        document.addEventListener('click', this.handleOutsideClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.pressEsc, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    render() {
        const { id, bodyAlignment, noBodyArrow, control, body } = this.props;
        return (
            <div
                className={`fd-popover${bodyAlignment ? ' fd-popover--' + bodyAlignment : ''}`}
                ref={this.setWrapperRef}
                ref={node => {
                    this.node = node;
                }}
            >
                <PopoverControl id={id} trigger={this.triggerBody} expanded={this.state.isExpanded}>
                    {control}
                </PopoverControl>
                <PopoverBody id={id} hidden={!this.state.isExpanded} alignment={bodyAlignment} noArrow={noBodyArrow}>
                    {body}
                </PopoverBody>
            </div>
        );
    }
}

Popover.propTypes = {
    id: PropTypes.string,
    state: PropTypes.string,
    bodyAlignment: PropTypes.string,
    noBodyArrow: PropTypes.bool
};

// ------------------------------------- Popover Control------------------------------------
export const PopoverControl = props => {
    const { id, expanded, trigger, children } = props;
    return (
        <div className="fd-popover__control" aria-expanded={expanded} onClick={trigger} aria-controls={id}>
            {children}
        </div>
    );
};

// -------------------------------------- Popover Body--------------------------------------
export const PopoverBody = props => {
    const { id, alignment, noArrow, hidden, children } = props;
    return (
        <div
            className={`fd-popover__body${alignment ? ' fd-popover__body--' + alignment : ''}${
                noArrow ? ' fd-popover__body--no-arrow' : ''
            }`}
            aria-hidden={hidden}
            id={id}
        >
            {children}
        </div>
    );
};
PopoverBody.propTypes = {
    id: PropTypes.string,
    alignment: PropTypes.string,
    noArrow: PropTypes.bool,
    state: PropTypes.string
};

// className={`${option ? 'fd-button--' + option : ' fd-button'}${type ? ' fd-button--' + type : ''}${dropdown ? 'fd-dropdown__control' : ''}${size ? ' fd-button--' + size : ''}${glyph ? ' sap-icon--' + glyph : ''}${selected ? ' is-selected' : ''}${disabled ? ' is-disabled' : ''}`}
