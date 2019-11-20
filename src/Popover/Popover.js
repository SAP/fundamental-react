import chain from 'chain-function';
import classnames from 'classnames';
import keycode from 'keycode';
import Popper from '../utils/_Popper';
import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import withStyles from '../utils/WithStyles/WithStyles';
import { POPOVER_TYPES, POPPER_PLACEMENTS } from '../utils/constants';
import React, { Component } from 'react';

class Popover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

        //A generated shortId as fallback, incase props.popperProps.id is unset.
        //This ID binds the popover and it's control by 'aria-controls'.
        this.ariaControls = shortId.generate();
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

    handleOutsideClick = () => {
        if (this.state.isExpanded) {
            this.setState({
                isExpanded: false
            });
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
    }

    render() {
        const {
            disableEdgeDetection,
            disableKeyPressHandler,
            disableStyles,
            onClickOutside,
            onEscapeKey,
            disabled,
            noArrow,
            control,
            body,
            className,
            placement,
            popperProps,
            type,
            ...rest
        } = this.props;

        let onClickFunctions = this.triggerBody;
        if (control.props.onClick) {
            onClickFunctions = chain(this.triggerBody, control.props.onClick);
        }

        const id = popperProps.id || this.ariaControls;

        let controlProps = {
            onClick: onClickFunctions
        };

        if (!disableKeyPressHandler) {
            controlProps = {
                ...controlProps,
                tabIndex: 0,
                role: 'button',
                'aria-controls': id,
                'aria-expanded': this.state.isExpanded,
                'aria-haspopup': !!type ? type : true,
                onKeyPress: (event) => this.handleKeyPress(event, control, onClickFunctions)
            };
        }

        const referenceComponent = React.cloneElement(control, controlProps);

        const popoverClasses = classnames('fd-popover', className);

        return (
            <div {...rest} className={popoverClasses}>
                <Popper
                    cssBlock='fd-popover'
                    disableEdgeDetection={disableEdgeDetection}
                    noArrow={noArrow}
                    onClickOutside={chain(this.handleOutsideClick, onClickOutside)}
                    onEscapeKey={chain(this.handleOutsideClick, onEscapeKey)}
                    popperPlacement={placement}
                    popperProps={{ ...popperProps, id }}
                    referenceClassName='fd-popover__control'
                    referenceComponent={referenceComponent}
                    show={this.state.isExpanded && !disabled}
                    usePortal>
                    {body}
                </Popper>
            </div>
        );
    }
}

Popover.displayName = 'Popover';

Popover.propTypes = {
    body: PropTypes.node.isRequired,
    control: PropTypes.node.isRequired,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disabled: PropTypes.bool,
    disableEdgeDetection: PropTypes.bool,
    disableKeyPressHandler: PropTypes.bool,
    disableStyles: PropTypes.bool,
    noArrow: PropTypes.bool,
    placement: PropTypes.oneOf(POPPER_PLACEMENTS),
    popperProps: PropTypes.object,
    type: PropTypes.oneOf(POPOVER_TYPES),
    onClickOutside: PropTypes.func,
    onEscapeKey: PropTypes.func
};

Popover.defaultProps = {
    popperProps: {},
    onClickOutside: () => {},
    onEscapeKey: () => {}
};

Popover.propDescriptions = {
    body: 'Node(s) to render in the overlay.',
    control: 'Node to render as the reference element (that the `body` will be placed in relation to).',
    disableEdgeDetection: 'Set to **true** to render popover without edge detection so popover will not flip from top to bottom with scroll.',
    disableKeyPressHandler: 'Set to **true** to remove onKeyPress handler and aria-* roles. Only do so if the control is a complex component such as a FormInput with Button.',
    noArrow: 'Set to **true** to render a popover without an arrow.',
    placement: 'Initial position of the `body` (overlay) related to the `control`.',
    popperProps: 'Additional props to be spread to the overlay element, supported by <a href="https://popper.js.org" target="_blank">popper.js</a>.',
    onClickOutside: 'Callback for consumer clicking outside of popover body.',
    onEscapeKey: 'Callback when escape key is pressed when popover body is visible.',
    type: 'Indicates the type of popup - "dialog", "grid", "listbox", "menu", or "tree". This value is attached to aria-haspopup and is useful to assistive tech. Defaulted to boolean true.'
};

export { Popover as __Popover };

export default withStyles(Popover, { cssFile: 'popover' });
