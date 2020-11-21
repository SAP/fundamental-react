import classnamesBind from 'classnames/bind';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from './_FormMessage';
import Popper from '../utils/_Popper';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import React, { useState } from 'react';
import styles from 'fundamental-styles/dist/popover.css';

const classnames = classnamesBind.bind(styles);

const FormValidationOverlay = React.forwardRef((
    {
        className,
        cssNamespace,
        control,
        formMessageProps,
        innerRefClassName,
        popperClassName,
        popperProps,
        referenceClassName,
        show,
        validationState,
        wrapperProps,
        ...rest
    }, ref) => {

    let [showValidationMessage, setShowValidationMessage] = useState(show);

    const _handleBlur = () => {
        setShowValidationMessage(false);
    };

    const _handleFocus = () => {
        setShowValidationMessage(true);
    };

    const popoverClasses = classnames(`${cssNamespace}-popover`, className);

    const referenceClasses = classnames(`${cssNamespace}-popover__control`, referenceClassName);

    const bodyContent = (<FormMessage {...formMessageProps} type={validationState?.state}>{validationState?.text}</FormMessage>);

    const referenceComponent = React.cloneElement(control, rest);


    return (
        <div
            {...wrapperProps}
            className={popoverClasses}
            onBlur={_handleBlur}
            onFocus={_handleFocus}
            ref={ref}>
            <Popper
                cssBlock={`${cssNamespace}-popover`}
                innerRefClassName={innerRefClassName}
                noArrow
                popperClassName={popperClassName}
                popperPlacement={'bottom-start'}
                popperProps={popperProps}
                referenceClassName={referenceClasses}
                referenceComponent={referenceComponent}
                show={showValidationMessage && validationState?.text?.length > 0}
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
    /** Additional props to be spread to the FormMessage component */
    formMessageProps: PropTypes.object,
    /** CSS class(es) to add to the popper's child `<div>` wrapping the provided children */
    innerRefClassName: PropTypes.string,
    /** CSS class(es) to add to popper's outermost wrapping `<div>` element */
    popperClassName: PropTypes.string,
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
    }),
    /** Additional props to be spread to the wrapping `<div>` element */
    wrapperProps: PropTypes.object
};

FormValidationOverlay.defaultProps = {
    popperProps: {}
};

export default withStyles(FormValidationOverlay);
