import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from './_FormMessage';
import Popper from '../utils/_Popper';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const FormValidationOverlay = React.forwardRef((
    {
        // lint disabled props are coming from react-popper
        'aria-controls': ariaControls, // eslint-disable-line
        'aria-expanded': ariaExpanded, // eslint-disable-line
        'aria-haspopup': ariaHasPopup, // eslint-disable-line
        className,
        control,
        controlProps,
        formMessageProps,
        onClick, // eslint-disable-line
        onKeyPress, // eslint-disable-line
        popperProps,
        referenceClassName,
        role, // eslint-disable-line
        show,
        tabIndex, // eslint-disable-line
        validationState,
        ...rest
    }, ref) => {

    let [showValidationMessage, setShowValidationMessage] = useState(show);

    const _handleBlur = () => {
        setShowValidationMessage(false);
    };

    const _handleFocus = () => {
        if (validationState?.text?.length > 0) {
            setShowValidationMessage(true);
        }
    };

    const popoverClasses = classnames('fd-popover', className);

    const referenceClasses = classnames('fd-popover__control', referenceClassName);

    const bodyContent = (<FormMessage {...formMessageProps} type={validationState?.state}>{validationState?.text}</FormMessage>);

    const controlElementProps = {
        ...controlProps,
        'aria-controls': ariaControls,
        'aria-haspopup': ariaHasPopup,
        'aria-expanded': ariaExpanded,
        onClick,
        onKeyPress,
        role,
        tabIndex
    };

    const referenceComponent = React.cloneElement(control, controlElementProps);

    return (
        <div
            {...rest}
            className={popoverClasses}
            onBlur={_handleBlur}
            onFocus={_handleFocus}
            ref={ref}>
            <Popper
                cssBlock='fd-popover'
                noArrow
                popperPlacement={'bottom-start'}
                popperProps={popperProps}
                referenceClassName={referenceClasses}
                referenceComponent={referenceComponent}
                show={showValidationMessage}
                usePortal>
                {bodyContent}
            </Popper>
        </div>
    );
});
FormValidationOverlay.displayName = 'FormValidationOverlay';

FormValidationOverlay.propTypes = {
    /** CSS class(es) to add to the outer wrapping div */
    className: PropTypes.string,
    control: PropTypes.node,
    /** Additional props to be spread to the reference component component */
    controlProps: PropTypes.object,
    /** Additional props to be spread to the FormMessage component */
    formMessageProps: PropTypes.object,
    /** Additional props to be spread to the overlay element, supported by <a href="https://popper.js.org" target="_blank">popper.js</a> */
    popperProps: PropTypes.object,
    /** CSS class(es) to add to the reference div */
    referenceClassName: PropTypes.string,
    /** Set to **true** to default ValidationOverlay to an open state */
    show: PropTypes.bool,
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    })
};

FormValidationOverlay.defaultProps = {
    popperProps: {}
};

export default FormValidationOverlay;
