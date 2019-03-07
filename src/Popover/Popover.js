import { chain } from 'chain-function';
import Popper from '../utils/_Popper';
import { POPPER_PLACEMENTS } from '../utils/constants';
import PropTypes from 'prop-types';
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
            disabled,
            noArrow,
            control,
            body,
            className,
            placement,
            ...rest
        } = this.props;

        let onClickFunctions = this.triggerBody;
        if (control.props.onClick) {
            onClickFunctions = chain(this.triggerBody, control.props.onClick);
        }

        const referenceComponent = React.cloneElement(control, {
            onClick: onClickFunctions
        });

        return (
            <Popper
                noArrow={noArrow}
                onClickOutside={this.handleOutsideClick}
                onEscapeKey={this.handleOutsideClick}
                popperClassName={className}
                popperPlacement={placement}
                popperProps={rest}
                referenceClassName='fd-popover'
                referenceComponent={referenceComponent}
                show={this.state.isExpanded && !disabled}>
                {body}
            </Popper>
        );

        // return (
        //     <div
        //         {...rest}
        //         className={popoverClasses}
        //         ref={node => {
        //             this.node = node;
        //         }}>
        //         <div
        //             aria-controls={id}
        //             aria-expanded={this.state.isExpanded}
        //             className='fd-popover__control'
        //             onClick={this.triggerBody}>
        //             {control}
        //         </div>
        //         <div
        //             aria-hidden={!this.state.isExpanded}
        //             className={popoverBodyClasses}
        //             id={id}>
        //             {body}
        //         </div>
        //     </div>
        // );
    }
}

Popover.displayName = 'Popover';

Popover.propTypes = {
    body: PropTypes.node.isRequired,
    control: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    noArrow: PropTypes.bool,
    placement: PropTypes.oneOf(POPPER_PLACEMENTS)
};

Popover.propDescriptions = {
    body: 'Node(s) to render in the overlay.',
    control: 'Node to render as the reference element (that the `body` will be placed in relation to).',
    noArrow: 'Set to **true** to render a popover without an arrow.',
    placement: 'Initial position of the `body` (overlay) related to the `control`.'
};

export default Popover;
