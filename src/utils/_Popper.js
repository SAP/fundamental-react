import classnames from 'classnames';
import Foco from 'react-foco';
import keycode from 'keycode';
import { modalManager } from './modalManager';
import { POPPER_PLACEMENTS } from './constants';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Manager, Popper as ReactPopper, Reference } from 'react-popper';

class Popper extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.show) {
            this._onShow();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.show && !this.props.show) {
            this._onHide();
        } else if (!prevProps.show && this.props.show) {
            this._onShow();
        }
    }

    componentWillUnmount() {
        if (this.props.show) {
            this._onHide();
        }
    }

    _onShow() {
        const container = ReactDOM.findDOMNode(this) || document.body;

        modalManager.add(this, container);

        document.addEventListener('keydown', this._handleDocumentKeyDown);
    }

    _onHide() {
        modalManager.remove(this);

        document.removeEventListener('keydown', this._handleDocumentKeyDown);
    }

    _handleDocumentKeyDown = (e) => {
        if (modalManager.isTopModal(this)) {
            this.props.onKeyDown(e);

            if (e.keyCode === keycode.codes.esc && this.props.onEscapeKey) {
                e.stopPropagation();
                this.props.onEscapeKey();
            }
        }
    }

    render() {
        const {
            children,
            cssBlock,
            disableEdgeDetection,
            noArrow,
            onClickOutside,
            popperClassName,
            popperModifiers,
            popperPlacement,
            popperProps,
            referenceClassName,
            referenceComponent,
            referenceProps,
            show,
            usePortal
        } = this.props;

        const flipModifier = disableEdgeDetection ? { flip: { enabled: false } } : {};
        const modifiers = {
            ...popperModifiers,
            ...flipModifier
        };

        const popperClasses = classnames(`${cssBlock}__popper`, popperClassName, {
            [`${cssBlock}__popper--no-arrow`]: !!noArrow
        });

        let popper = (
            <ReactPopper
                modifiers={modifiers}
                placement={popperPlacement}>
                {({ ref, style, placement, outOfBoundaries, arrowProps }) => {
                    if (!show) {
                        return null;
                    }

                    return (
                        <div
                            {...popperProps}
                            className={popperClasses}
                            data-placement={placement}
                            data-x-out-of-boundaries={!!outOfBoundaries || undefined} // eslint-disable-line
                            ref={ref}
                            style={style}>
                            {children}
                            <span
                                className={`${cssBlock}__arrow`}
                                ref={arrowProps.ref}
                                style={arrowProps.style} />
                        </div>
                    );
                }}
            </ReactPopper>
        );

        if (usePortal) {
            popper = ReactDOM.createPortal(popper, document.querySelector('body'));
        }

        return (
            <Manager>
                <Foco
                    component='div'
                    onClickOutside={onClickOutside}
                    onFocusOutside={onClickOutside}>
                    <Reference>
                        {({ ref }) => (
                            <div
                                {...referenceProps}
                                className={referenceClassName}
                                ref={ref}>
                                {referenceComponent}
                            </div>
                        )}
                    </Reference>
                    {popper}
                </Foco>
            </Manager>
        );
    }
}

Popper.displayName = 'Popper';

Popper.propTypes = {
    children: PropTypes.node.isRequired,
    cssBlock: PropTypes.string.isRequired,
    referenceComponent: PropTypes.element.isRequired,
    disableEdgeDetection: PropTypes.bool,
    noArrow: PropTypes.bool,
    popperClassName: PropTypes.string,
    popperModifiers: PropTypes.object,
    popperPlacement: PropTypes.oneOf(POPPER_PLACEMENTS),
    popperProps: PropTypes.object,
    referenceClassName: PropTypes.string,
    referenceProps: PropTypes.object,
    show: PropTypes.bool,
    usePortal: PropTypes.bool,
    onClickOutside: PropTypes.func,
    onEscapeKey: PropTypes.func,
    onKeyDown: PropTypes.func
};

Popper.defaultProps = {
    popperModifiers: {
        preventOverflow: {
            enabled: true,
            escapeWithReference: true,
            boundariesElement: 'scrollParent'
        },
        computeStyle: {
            enabled: true,
            gpuAcceleration: false
        }
    },
    popperPlacement: 'bottom-start',
    onClickOutside: () => {},
    onKeyDown: () => {}
};

export default Popper;
