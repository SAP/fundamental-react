import chain from 'chain-function';
import classnames from 'classnames';
import Popper from '../utils/_Popper';
import { POPPER_PLACEMENTS } from '../utils/constants';
import PropTypes from 'prop-types';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';

class Popover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };
    }

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

    render() {
        const {
            disableEdgeDetection,
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
            ...rest
        } = this.props;

        let onClickFunctions = this.triggerBody;
        if (control.props.onClick) {
            onClickFunctions = chain(this.triggerBody, control.props.onClick);
        }

        const referenceComponent = React.cloneElement(control, {
            onClick: onClickFunctions
        });

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
                    popperProps={popperProps}
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
    disableStyles: PropTypes.bool,
    noArrow: PropTypes.bool,
    placement: PropTypes.oneOf(POPPER_PLACEMENTS),
    popperProps: PropTypes.object,
    onClickOutside: PropTypes.func,
    onEscapeKey: PropTypes.func
};

Popover.defaultProps = {
    onClickOutside: () => {},
    onEscapeKey: () => {}
};

Popover.propDescriptions = {
    body: 'Node(s) to render in the overlay.',
    control: 'Node to render as the reference element (that the `body` will be placed in relation to).',
    disableEdgeDetection: 'Set to **true** to render popover without edge detection so popover will not flip from top to bottom with scroll.',
    noArrow: 'Set to **true** to render a popover without an arrow.',
    placement: 'Initial position of the `body` (overlay) related to the `control`.',
    popperProps: 'Additional props to be spread to the overlay element, supported by <a href="https://popper.js.org" target="_blank">popper.js</a>.',
    onClickOutside: 'Callback for consumer clicking outside of popover body.',
    onEscapeKey: 'Callback when escape key is pressed when popover body is visible.'
};

export { Popover as __Popover };

export default withStyles(Popover, { cssFile: 'popover' });
