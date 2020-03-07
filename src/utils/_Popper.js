import classnames from 'classnames';
import Foco from 'react-foco';
import { getModalManager } from './modalManager';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Manager, Popper as ReactPopper, Reference } from 'react-popper';
import { POPPER_PLACEMENTS, POPPER_SIZING_TYPES } from './constants';

class Popper extends React.Component {
    constructor(props) {
        super(props);
        this.modalManager = getModalManager();
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

        this.modalManager.add(this, container);

        document.addEventListener('keydown', this._handleDocumentKeyDown);
    }

    _onHide() {
        this.modalManager.remove(this);

        document.removeEventListener('keydown', this._handleDocumentKeyDown);
    }

    _handleDocumentKeyDown = (e) => {
        if (this.modalManager.isTopModal(this)) {
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
            innerRef,
            noArrow,
            onClickOutside,
            placementTargetRef,
            popperClassName,
            popperModifiers,
            popperPlacement,
            popperProps,
            referenceClassName,
            referenceComponent,
            referenceProps,
            show,
            usePortal,
            widthSizingType
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
                innerRef={innerRef}
                modifiers={modifiers}
                placement={popperPlacement}>
                {({ ref, style, placement, outOfBoundaries, arrowProps }) => {
                    if (!show) {
                        return null;
                    }

                    const currentPlacementTarget = placementTargetRef;
                    if (widthSizingType !== 'none' && currentPlacementTarget) {
                        const { right: targetRight, left: targetLeft } = typeof currentPlacementTarget.getBoundingClientRectTest === 'function' ?
                            currentPlacementTarget.getBoundingClientRectTest() : // for test purpose. getBoundingClientRect cannot be redefined.
                            currentPlacementTarget.getBoundingClientRect();

                        const { left: popperLeft } = style;

                        let funMap = new Map();
                        funMap.set('matchTarget', { width: targetRight - targetLeft, left: targetLeft });
                        funMap.set('minTarget', { minWidth: targetRight - popperLeft });
                        funMap.set('maxTarget', { maxWidth: targetRight - popperLeft });
                        style = { ...style, ...funMap.get(widthSizingType) };
                    }

                    return (
                        <div
                            {...popperProps}
                            className={popperClasses}
                            ref={ref}
                            style={style}
                            // eslint-disable-next-line no-undefined
                            x-out-of-boundaries={!!outOfBoundaries || undefined}
                            x-placement={placement}>
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
                    onClickOutside={onClickOutside}>
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
    innerRef: PropTypes.func.isRequired,
    referenceComponent: PropTypes.element.isRequired,
    disableEdgeDetection: PropTypes.bool,
    noArrow: PropTypes.bool,
    placementTargetRef: PropTypes.shape({ current: PropTypes.any }),
    popperClassName: PropTypes.string,
    popperModifiers: PropTypes.object,
    popperPlacement: PropTypes.oneOf(POPPER_PLACEMENTS),
    popperProps: PropTypes.object,
    referenceClassName: PropTypes.string,
    referenceProps: PropTypes.object,
    show: PropTypes.bool,
    usePortal: PropTypes.bool,
    widthSizingType: PropTypes.oneOf(POPPER_SIZING_TYPES),
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
    onClickOutside: () => { },
    onKeyDown: () => { }
};

export default Popper;
