import classnamesBind from 'classnames/bind';
import CustomPropTypes from './CustomPropTypes/CustomPropTypes';
import Foco from 'react-foco';
import { getModalManager } from './modalManager';
import keycode from 'keycode';
import PopperContainer from './_PopperContainer';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Manager, Popper as ReactPopper, Reference } from 'react-popper';
import { POPPER_PLACEMENTS, POPPER_SIZING_TYPES } from './constants';
import popoverStyles from 'fundamental-styles/dist/popover.css';

const classnames = classnamesBind.bind(popoverStyles);

// eslint-disable-next-line no-undefined
const _get = (obj, path, defaultValue = undefined) => {
    const travel = regexp =>
        String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            // eslint-disable-next-line no-undefined
            .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    // eslint-disable-next-line no-undefined
    return result === undefined || result === obj ? defaultValue : result;
};
const poperMappings = {
    'top-start': {
        body: 'above',
        arrow: 'bottom'
    },
    'top': {
        body: 'above',
        bodyX: 'center',
        arrow: 'bottom',
        arrowX: 'center'
    },
    'top-end': {
        body: 'above',
        bodyX: 'end',
        arrow: 'bottom',
        arrowX: 'end'
    },
    'left-start': {
        body: 'before',
        arrow: 'right'
    },
    'left': {
        body: 'before',
        bodyX: 'middle',
        arrow: 'right',
        arrowY: 'center'
    },
    'left-end': {
        body: 'before',
        bodyX: 'bottom',
        arrow: 'right',
        arrowY: 'end'
    },
    'bottom-start': {
    },
    'bottom': {
        bodyX: 'center',
        arrowX: 'center'
    },
    'bottom-end': {
        bodyX: 'end',
        arrowX: 'end'
    },
    'right-start': {
        body: 'after',
        arrow: 'left'
    },
    'right': {
        body: 'after',
        bodyX: 'middle',
        arrow: 'left',
        arrowY: 'center'
    },
    'right-end': {
        body: 'after',
        bodyX: 'bottom',
        arrow: 'left',
        arrowY: 'end'
    }
};
const classPlaceMapping = {
    body: '',
    bodyX: '',
    arrow: 'arrow-',
    arrowX: 'arrow-x-',
    arrowY: 'arrow-y-'
};
const getPopperClasses2 = (cssBlock, placement)=> {
    const config = _get(poperMappings, placement);
    let popperClasses = [];
    if (config) {
        const keys = Object.keys(config);
        popperClasses = keys.map(key=> {
            const relatedFix = _get(classPlaceMapping, key);
            const value = _get(config, key);
            return `${cssBlock}__body--${relatedFix}${value}`;
        });
    }

    return popperClasses.join(' ');
};


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
    popperPlacement,
    flipContainer
}) => {
    if (disableEdgeDetection) {
        return {
            name: 'flip',
            enabled: false
        };
    }

    const options = {
        boundary: flipContainer
    };
    if (Array.isArray(popperPlacement)) {
        options.fallbackPlacements = popperPlacement.slice(1);
    }
    return {
        name: 'flip',
        options
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
        this.modalManager = props.modalManager ? props.modalManager : getModalManager();
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
                e.preventDefault();
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
            flipContainer,
            innerRef,
            innerRefClassName,
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
            createFlipModifier({ disableEdgeDetection, popperPlacement, flipContainer }),
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

        const basePlacement = Array.isArray(popperPlacement)
            ? popperPlacement[0]
            : popperPlacement;

        let popper = (
            <ReactPopper
                modifiers={modifiers}
                placement={basePlacement}>
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
                        <div className={cssBlock}>
                            <div
                                {...popperProps}
                                className={classnames(`${cssBlock}__body`, popperClassName, {
                                    [`${cssBlock}__body--no-arrow`]: !!noArrow
                                }, getPopperClasses2(cssBlock, placement))}
                                ref={ref}
                                style={{ ...style, ...popperProps.style, ...fundamentalStyleOverrides }}
                                // eslint-disable-next-line no-undefined
                                x-out-of-boundaries={isReferenceHidden ? 'true' : undefined}
                                // This is needed for fundamental-styles even though popper-2 uses data-placement as well
                                x-placement={placement}>
                                <div className={classnames(`${cssBlock}__wrapper`, innerRefClassName)} ref={innerRef}>
                                    {children}
                                </div>
                                <span
                                    className={classnames(`${cssBlock}__arrow`)}
                                    ref={arrowProps.ref}
                                    style={{ ...arrowProps.style, ...fundamentalStyleArrowOverrides }} />
                            </div>
                        </div>

                    );
                }}
            </ReactPopper>
        );

        if (usePortal) {
            popper = (
                <PopperContainer>
                    {popper}
                </PopperContainer>
            );
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
    flipContainer: CustomPropTypes.elementOrArrayOfElements(),
    innerRef: PropTypes.func,
    innerRefClassName: PropTypes.string,
    modalManager: PropTypes.object,
    noArrow: PropTypes.bool,
    popperClassName: PropTypes.string,
    popperModifiers: PropTypes.array,
    popperPlacement: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOf(POPPER_PLACEMENTS)),
        PropTypes.oneOf(POPPER_PLACEMENTS)
    ]),
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
    popperModifiers: [],
    popperPlacement: ['bottom-start', 'top-start', 'bottom-end', 'top-end'],
    onClickOutside: () => { },
    onKeyDown: () => { }
};

export default Popper;
