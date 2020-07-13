import classnames from 'classnames';
import Foco from 'react-foco';
import { getModalManager } from './modalManager';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Manager, Popper as ReactPopper, Reference } from 'react-popper-2';
import { POPPER_PLACEMENTS, POPPER_SIZING_TYPES } from './constants';

const defaultModifiers = [
    {
        name: 'computeStyle',
        phase: 'main',
        options: {
            gpuAcceleration: false
        }
    },
    {
        name: 'preventOverflow'
    },
    {
        name: 'hide' // adds the isReferenceHidden attribute


    }
];

const createFlipModifier = ({
    disableEdgeDetection,
    fallbackPlacements,
    flipContainer
}) => {
    if (disableEdgeDetection) {
        return {
            name: 'flip',
            enabled: false
        };
    }

    return {
        name: 'flip',
        options: {
            fallbackPlacements,
            boundary: flipContainer
        }
    };
};

const matchTargetModifier = {
    name: 'matchTargetModifier',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: ({ state }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
    },
    effect: ({ state }) => {
        state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
    }
};
const minTargetModifier = {
    name: 'minTargetModifier',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: ({ state }) => {
        state.styles.popper.minWidth = `${state.rects.reference.width}px`;
    },
    effect: ({ state }) => {
        state.elements.popper.style.minWidth = `${state.elements.reference.offsetWidth}px`;
    }
};
const maxTargetModifier = {
    name: 'maxTargetModifier',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: ({ state }) => {
        state.styles.popper.maxWidth = `${state.rects.reference.width}px`;
    },
    effect: ({ state }) => {
        state.elements.popper.style.maxWidth = `${state.elements.reference.offsetWidth}px`;
    }
};

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
            fallbackPlacements,
            flipContainer,
            innerRef,
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
            usePortal,
            widthSizingType
        } = this.props;

        const modifiers = [
            ...defaultModifiers,
            createFlipModifier({ disableEdgeDetection, fallbackPlacements, flipContainer }),
            ...popperModifiers
        ];
        if (widthSizingType === 'matchTarget') {
            modifiers.push(matchTargetModifier);
        }
        if (widthSizingType === 'minTarget') {
            modifiers.push(minTargetModifier);
        }
        if (widthSizingType === 'maxTarget') {
            modifiers.push(maxTargetModifier);
        }
        const popperClasses = classnames(`${cssBlock}__popper`, popperClassName, {
            [`${cssBlock}__popper--no-arrow`]: !!noArrow
        });

        let popper = (
            <ReactPopper
                modifiers={modifiers}
                placement={popperPlacement}>
                {({ ref, style, isReferenceHidden, arrowProps, placement }) => {
                    if (!show) {
                        return null;
                    }
                    // TODO: Temporary overrides to support popper-2
                    const fundamentalStyleOverrides = {
                        visibility: isReferenceHidden ? 'hidden' : 'visible'
                    };
                    const fundamentalStyleArrowOverrides = {
                        margin: 0
                    };
                    return (
                        <div
                            {...popperProps}
                            className={popperClasses}
                            ref={ref}
                            style={{ ...style, ...popperProps.style, ...fundamentalStyleOverrides }}
                            // eslint-disable-next-line no-undefined
                            x-out-of-boundaries={isReferenceHidden ? 'true' : undefined}
                            // This is needed for fundamental-styles even though popper-2 uses data-placement as well
                            x-placement={placement}>
                            <div ref={innerRef}>
                                {children}
                            </div>
                            <span
                                className={`${cssBlock}__arrow`}
                                ref={arrowProps.ref}
                                style={{ ...arrowProps.style, ...fundamentalStyleArrowOverrides }} />
                        </div>
                    );
                }}
            </ReactPopper>
        );

        if (usePortal) {
            // eslint-disable-next-line compat/compat
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
    referenceComponent: PropTypes.element.isRequired,
    disableEdgeDetection: PropTypes.bool,
    fallbackPlacements: PropTypes.arrayOf(PropTypes.oneOf(POPPER_PLACEMENTS)),
    flipContainer: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.instanceOf(Element)),
        PropTypes.instanceOf(Element)
    ]),
    innerRef: PropTypes.func,
    noArrow: PropTypes.bool,
    popperClassName: PropTypes.string,
    popperModifiers: PropTypes.array,
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
    fallbackPlacements: ['bottom-start', 'top-start', 'bottom-end', 'top-end'],
    popperModifiers: [],
    popperPlacement: 'bottom-start',
    onClickOutside: () => { },
    onKeyDown: () => { }
};

export default Popper;
