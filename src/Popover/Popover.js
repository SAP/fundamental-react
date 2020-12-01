import chain from 'chain-function';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { findDOMNode } from 'react-dom';
import FocusManager from '../utils/focusManager/focusManager';
import { isFocusable } from 'tabbable';
import keycode from 'keycode';
import Popper from '../utils/_Popper';
import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import withStyles from '../utils/withStyles';
import { GridSelector, POPOVER_TYPES, POPPER_PLACEMENTS, POPPER_SIZING_TYPES } from '../utils/constants';
import React, { Component } from 'react';
import styles from 'fundamental-styles/dist/popover.css';

const classnames = classnamesBind.bind(styles);

/** A **Popover** is a wrapping component that accepts a "control" as well as a "body". A control can be
anything that you want to trigger the interaction from. The body will be the contents of what you reveal
on the page after triggering the popover. When paired with the **Menu** component, the Popover is commonly
used as the interaction/wrapping component for composing "dropdowns", "contextual menus", etc. As a general rule,
it is suggested that one Popover be revealed on the page at any given time. Opening one Popover should close all
others to prevent multiple layers and collisions of several popovers. */

class Popover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

        //A generated shortId as fallback, in case props.popperProps.id is unset.
        //This ID binds the popover and its control by 'aria-controls'.
        this.popoverId = shortId.generate();
    }

    isButton = (node) => {
        if (!node) {
            return false;
        }
        if (typeof node.type === 'string') {
            return node.type.toLowerCase() === 'button';
        } else if (node.type.displayName) {
            return node.type.displayName.toLowerCase() === 'button';
        }
        return false;
    };

    triggerBody = () => {
        if (!this.props.disabled) {
            this.setState(prevState => ({
                isExpanded: !prevState.isExpanded
            }));
        }
    };

    handleFocusManager = () => {
        if (this.state.isExpanded && this.popover && this.controlRef) {
            this.focusManager = new FocusManager(this.popover, this.controlRef, this.props.useArrowKeyNavigation, this.props.firstFocusIndex);
        }
    };

    handleOutsideClick = () => {
        if (this.state.isExpanded) {
            this.setState({
                isExpanded: false
            });
        }
    };

    handleEscapeKey = () => {
        this.handleOutsideClick();

        if (this.controlRef) {
            if (isFocusable(this.controlRef)) {
                this.controlRef.focus();
            } else {
                const firstTabbableNode = this.controlRef.querySelectorAll(GridSelector.FOCUSABLE)[0];
                firstTabbableNode && firstTabbableNode.focus();
            }
        }
    };

    handleKeyPress = (event, node, onClickFunctions) => {
        if (!this.isButton(node)) {
            switch (keycode(event)) {
                case 'enter':
                case 'space':
                    event.preventDefault();
                    onClickFunctions();
                    break;
                default:
            }
        }
    };

    render() {
        const {
            disableEdgeDetection,
            disableKeyPressHandler,
            disableTriggerOnClick,
            flipContainer,
            firstFocusIndex,
            onClickOutside,
            onEscapeKey,
            disabled,
            noArrow,
            control,
            body,
            className,
            cssNamespace,
            placement,
            popperClassName,
            popperProps,
            widthSizingType,
            useArrowKeyNavigation,
            type,
            show,
            modalManager,
            ...rest
        } = this.props;

        let onClickFunctions = control?.props.onClick;
        if (!disableTriggerOnClick) {
            onClickFunctions = this.triggerBody;

            if (control.props.onClick) {
                onClickFunctions = chain(this.triggerBody, control.props.onClick);
            }
        }

        const id = popperProps.id || this.popoverId;

        let newControlProps = {
            onClick: onClickFunctions,
            ref: (c) => {
                this.controlRef = findDOMNode(c);
                if (control.ref) {
                    if (typeof control.ref === 'function') {
                        control.ref(c);
                    } else if (typeof control.ref === 'object') {
                        control.ref.current = c;
                    }
                }

            }
        };

        const innerRef = (c) => {
            this.popover = findDOMNode(c);
            this.handleFocusManager();
        };

        if (!disableKeyPressHandler) {
            newControlProps = {
                ...newControlProps,
                tabIndex: 0,
                role: !!control?.props.role ? control?.props.role : 'button',
                'aria-controls': id,
                'aria-expanded': this.state.isExpanded,
                'aria-haspopup': !!type ? type : true,
                onKeyPress: (event) => this.handleKeyPress(event, control, onClickFunctions)
            };
        }

        const referenceClassName = classnames(`${cssNamespace}-popover__control`, {
            'is-expanded': this.state.isExpanded
        });

        const referenceComponent = React.cloneElement(control, newControlProps);

        const popoverClasses = classnames(`${cssNamespace}-popover`, className);

        return (
            <div {...rest} className={popoverClasses}>
                <Popper
                    cssBlock={`${cssNamespace}-popover`}
                    disableEdgeDetection={disableEdgeDetection}
                    flipContainer={flipContainer}
                    innerRef={innerRef}
                    modalManager={modalManager}
                    noArrow={noArrow}
                    onClickOutside={chain(this.handleOutsideClick, onClickOutside)}
                    onEscapeKey={chain(this.handleEscapeKey, onEscapeKey)}
                    popperClassName={popperClassName}
                    popperPlacement={placement}
                    popperProps={{ ...popperProps, id }}
                    referenceClassName={referenceClassName}
                    referenceComponent={referenceComponent}
                    show={!disabled && (typeof show === 'boolean' ? show : this.state.isExpanded)}
                    usePortal
                    widthSizingType={widthSizingType}>
                    {body}
                </Popper>
            </div>
        );
    }
}

Popover.displayName = 'Popover';

Popover.propTypes = {
    /** Node(s) to render in the overlay */
    body: PropTypes.node.isRequired,
    /** Node to render as the reference element (that the `body` will be placed in relation to) */
    control: PropTypes.node.isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Set to **true** to render popover without edge detection so popover will not flip from top to bottom with scroll */
    disableEdgeDetection: PropTypes.bool,
    /** Set to **true** to remove onKeyPress handler and aria-* roles.
     * Only do so if the control is a complex component such as a FormInput with Button */
    disableKeyPressHandler: PropTypes.bool,
    /** Set to **true** to remove default triggerBody handler used in onClick.
     * Useful for when a custom method is desired to open the Popover */
    disableTriggerOnClick: PropTypes.bool,
    /** Index of the focusable item to focus first within the Popover */
    firstFocusIndex: PropTypes.number,
    /** The bounding container to use when determining if the popover is out of bounds */
    flipContainer: CustomPropTypes.elementOrArrayOfElements(),
    /** If Popover is to be rendered in a modal, the parent modal manager can be passed as a prop */
    modalManager: PropTypes.object,
    /** Set to **true** to render a popover without an arrow */
    noArrow: PropTypes.bool,
    /** The options are 'auto',
    'auto-start',
    'auto-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'left-start',
    'left',
    'left-end',
    'right-start',
    'right',
    'right-end',
    'top-start',
    'top',
    'top-end'
    You can also pass an array of these to specify which placements to fallback to
    */
    placement: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOf(POPPER_PLACEMENTS)),
        PropTypes.oneOf(POPPER_PLACEMENTS)
    ]),
    /** Additional classeNames to be spread to the overlay element */
    popperClassName: PropTypes.string,
    /** Additional props to be spread to the overlay element, supported by <a href="https://popper.js.org" target="_blank">popper.js</a> */
    popperProps: PropTypes.object,
    /** Handling for show/hide popover if true show the popover */
    show: PropTypes.bool,
    /**  Indicates the type of popup - "dialog", "grid", "listbox", "menu", or "tree".
     * This value is attached to aria-haspopup and is useful to assistive tech. Defaulted to boolean true*/
    type: PropTypes.oneOf(POPOVER_TYPES),
    useArrowKeyNavigation: PropTypes.bool,
    /** 'none', 'matchTarget', 'minTarget', 'maxTarget'
     * - "matchTarget" - left and right edges align with the target
     * - "minTarget" - right edge aligns with target unless Popover content is bigger
     * - "maxTarget" - right edge aligns with target unless Popover content is smaller
     */
    widthSizingType: PropTypes.oneOf(POPPER_SIZING_TYPES),
    /**
     * Callback function; triggered on clicking outside of popover body.
     *
     * @param {MouseEvent} event
     * @returns {void}
     * */
    onClickOutside: PropTypes.func,
    /**
     * Callback function; triggered when `escape` key is pressed and popover body is visible.
     *
     * @returns {void}
     * */
    onEscapeKey: PropTypes.func
};

Popover.defaultProps = {
    widthSizingType: 'none',
    popperProps: {},
    onClickOutside: () => { },
    onEscapeKey: () => { }
};

export default withStyles(Popover);
