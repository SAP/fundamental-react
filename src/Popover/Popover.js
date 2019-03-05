/* eslint-disable */
import classnames from 'classnames';
// import { POPOVER_ALIGNMENTS } from '../utils/constants';
import { POPPER_PLACEMENTS } from '../utils/constants';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import React, { Component } from 'react';

class Popover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
            isDisabled: this.props.disabled
        };
    }

    triggerBody = () => {
        console.log('triggerBody');
        if (!this.state.isDisabled) {
            if (!this.state.isExpanded) {
                document.addEventListener('mousedown', this.handleOutsideClick, false);
            } else {
                document.removeEventListener(
                    'mousedown',
                    this.handleOutsideClick,
                    false
                );
            }

            this.setState(prevState => ({
                isExpanded: !prevState.isExpanded
            }));
        }
    };

    pressEsc = event => {
        if (event.keyCode === 27 && this.state.isExpanded === true) {
            this.setState({
                isExpanded: false
            });
        }
    };

    handleOutsideClick = e => {
        if (this.node && !this.node.contains(e.target)) {
            if (this.state.isExpanded) {
                this.setState({
                    isExpanded: false
                });
            } else {
                return;
            }
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.pressEsc, false);
        document.addEventListener('mousedown', this.handleOutsideClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.pressEsc, false);
        document.removeEventListener('mousedown', this.handleOutsideClick, false);
    }

    render() {
        const {
            id,
            // alignment,
            noArrow,
            control,
            body,
            className,
            placement,
            ...rest
        } = this.props;

        const {
            isExpanded
        } = this.state;

        const popoverClasses = classnames(
            'fd-popover',
            className
        );

        const popoverBodyClasses = classnames(
            'fd-popper__body'
            // {
            //     // [`fd-popover__body--${alignment}`]: !!alignment,
            //     'fd-popover__body--no-arrow': noArrow
            // }
        );

        return (
            <div
                {...rest}
                className={popoverClasses}
                ref={node => {
                    this.node = node
                }}>
                <Manager>
                    <Reference>
                        {({ ref }) => (
                            <div className='fd-popover__control' onClick={this.triggerBody} ref={ref}>
                                {control}
                            </div>
                        )}
                    </Reference>
                    <Popper
                        modifiers={{
                            preventOverflow: {
                                enabled: true,
                                escapeWithReference: true,
                                boundariesElement: 'scrollParent'
                            },
                            computeStyle: {
                                enabled: true,
                                gpuAcceleration: false
                            }
                        }}
                        placement={placement}>
                        {({ ref, style, placement, arrowProps }) => {
                            if (!isExpanded) {
                                return null;
                            }

                            return (
                                <div className={popoverBodyClasses} id={id} ref={ref} style={style} data-placement={placement}>
                                    {body}
                                    <span className='fd-popper__arrow' ref={arrowProps.ref} style={arrowProps.style} />
                                </div>
                            );
                        }}
                    </Popper>
                </Manager>
            </div>
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
    // alignment: PropTypes.oneOf(POPOVER_ALIGNMENTS),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    noArrow: PropTypes.bool,
    placement: PropTypes.oneOf(POPPER_PLACEMENTS)
};

Popover.defaultProps = {
    placement: 'left'
};

Popover.propDescriptions = {
    alignment: 'The placement of the popover body. Options include `right` and `left`. Leave empty for default/left placement.',
    noArrow: 'Set to **true** to render a popover without an arrow.'
};

export default Popover;
