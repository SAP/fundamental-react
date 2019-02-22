import classnames from 'classnames';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ListGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            childrenDOMNodeList: [],
            lastFocusedChildIndex: null,
            focused: false
        };
    }

    static propTypes = {
        children: (props, propName) => {
            let children = props[propName];

            if (children.length === 0) {
                return new Error(
                    'No children provided to \'ListGroup\'. Please provide ate least one \'ListGroupItem\''
                );
            }

            for (let i = 0; i < children.length; i++) {
                if (children[i].type.name !== 'ListGroupItem') {
                    return new Error(
                        `Invalid child '${children[i].type.name || children[i].type}' supplied to 'ListGroup'. Please use 'ListGroupItem' only.`
                    );
                }
            }
        },
        className: PropTypes.string
    }

    onBlur = () => {
        this.setState({
            focused: false
        });
    }

    onFocus = () => {
        const { lastFocusedChildIndex } = this.state;
        this.setState({
            focused: true
        }, () => {
            this.focusChildElement(lastFocusedChildIndex || 0);
        });
    }

    onArrowDownPressed = () => {
        const { lastFocusedChildIndex } = this.state;
        this.focusChildElement(lastFocusedChildIndex + 1);
    }

    onArrowUpPressed = () => {
        const { lastFocusedChildIndex } = this.state;
        this.focusChildElement(lastFocusedChildIndex - 1);
    }

    focusChildElement = (index) => {
        const childrenDOMNodeList = findDOMNode(this).children;
        const childDOMNodeToFocus = childrenDOMNodeList[index];

        if (index >= 0 && index < childrenDOMNodeList.length) {
            this.setState({
                lastFocusedChildIndex: index
            }, () => {
                childDOMNodeToFocus.focus();
            });
        }
    }

    onKeyUp = (event) => {
        const pressedKey = event.key;

        switch (pressedKey) {
            case 'ArrowDown':
            case 'ArrowRight':
                this.onArrowDownPressed();
                return;
            case 'ArrowUp':
            case 'ArrowLeft':
                this.onArrowUpPressed();
                return;
            default:
                return;
        }
    }

    render() {
        const { props, state } = this;
        const { className, children } = props;

        const listGroupClasses = classnames(
            'fd-list-group',
            className
        );

        return (
            <ul {...props} className={listGroupClasses}
                onBlur={this.onBlur} onFocus={this.onFocus}
                onKeyUp={this.onKeyUp} role='tabList'
                tabIndex={state.focused ? -1 : 0}>
                {children}
            </ul>
        );
    }
}

export const ListGroupItem = ({ children, className, ...props }) => {
    const listGroupItemClasses = classnames(
        'fd-list-group__item',
        className
    );

    return (
        <li {...props} className={listGroupItemClasses}
            role='treeItem' tabIndex={-1}>
            {children}
        </li>

    );
};

ListGroupItem.displayName = 'ListGroupItem';

ListGroupItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export const ListGroupItemActions = ({ children, className, ...props }) => {
    const listGroupItemActionsClasses = classnames(
        'fd-list-group__action',
        className
    );

    return (
        <span {...props} className={listGroupItemActionsClasses}>
            {children}
        </span>
    );
};

ListGroupItemActions.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export const ListGroupItemCheckbox = ({ children, labelProps, inputProps, ...props }) => {
    return (
        <div {...props} className='fd-form__item fd-form__item--check'>
            <label
                {...labelProps}
                className='fd-form__label'>
                <input
                    {...inputProps}
                    className='fd-form__control'
                    type='checkbox' />
                {children}
            </label>
        </div>
    );
};

ListGroupItemCheckbox.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object
};
