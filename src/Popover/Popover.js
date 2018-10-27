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
            isExpanded: false
        };
    }

    triggerBody() {
        if (!this.state.isExpanded) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
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
        const { id, control, body } = this.props;
        return (
            <div
                className="fd-popover"
                ref={this.setWrapperRef}
                ref={node => {
                    this.node = node;
                }}
            >
                <PopoverControl id={id} trigger={this.triggerBody} expanded={this.state.isExpanded}>
                    {control}
                </PopoverControl>
                <PopoverBody id={id} hidden={!this.state.isExpanded}>
                    {body}
                </PopoverBody>
            </div>
        );
    }
}

// ------------------------------------- Popover Control------------------------------------
export const PopoverControl = props => {
    const { id, expanded, trigger, disabled, isDropdown, glyph, size, btnType, children } = props;
    return (
        <div className="fd-popover__control" aria-expanded={expanded} onClick={trigger} aria-controls={id}>
            {children}
        </div>
    );
};

// -------------------------------------- Popover Body--------------------------------------
export const PopoverBody = props => {
    const { id, hidden, children } = props;
    return (
        <div className="fd-popover__body" aria-hidden={hidden} id={id}>
            {children}
        </div>
    );
};
