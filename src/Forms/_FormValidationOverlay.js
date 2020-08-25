import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from './_FormMessage';
import Popper from '../utils/_Popper';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const FormValidationOverlay = React.forwardRef(({ className, control, popperProps, validationState, ...rest }, ref) => {
    let [showValidationMessage, setShowValidationMessage] = useState(false);

    const _handleBlur = () => {
        setShowValidationMessage(false);
    };

    const _handleFocus = () => {
        if (validationState?.text?.length > 0) {
            setShowValidationMessage(true);
        }
    };

    const popoverClasses = classnames('fd-popover', className);

    const bodyContent = (<FormMessage type={validationState?.state}>{validationState?.text}</FormMessage>);

    const referenceComponent = React.cloneElement(control, rest);

    return (
        <div
            className={popoverClasses}
            onBlur={_handleBlur}
            onFocus={_handleFocus}
            ref={ref}>
            <Popper
                cssBlock='fd-popover'
                noArrow
                popperPlacement={'bottom-start'}
                popperProps={popperProps}
                referenceClassName='fd-popover__control'
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
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    control: PropTypes.node,
    /** Additional props to be spread to the overlay element, supported by <a href="https://popper.js.org" target="_blank">popper.js</a> */
    popperProps: PropTypes.object,
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
