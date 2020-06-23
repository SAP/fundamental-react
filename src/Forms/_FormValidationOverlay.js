import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from './_FormMessage';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const FormValidationOverlay = ({ className, control, validationState, ...props }) => {
    let [showValidationMessage, setShowValidationMessage] = useState(false);

    const _handleBlur = () => {
        setShowValidationMessage(false);
    };

    const _handleFocus = () => {
        setShowValidationMessage(true);
    };

    const bodyContent = (validationState?.text && <FormMessage type={validationState.state}>{validationState.text}</FormMessage>);

    return (
        <Popover
            {...props}
            body={bodyContent}
            className='fd-popover--input-message-group'
            control={control}
            disableKeyPressHandler
            disableTriggerOnClick
            noArrow
            onBlur={_handleBlur}
            onFocus={_handleFocus}
            placement='bottom-start'
            show={showValidationMessage}
            style={{ display: 'block' }} /> // TO DO: replace with class from fundamental-styles
    );
};
FormValidationOverlay.displayName = 'FormValidationOverlay';

FormValidationOverlay.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    control: PropTypes.node,
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.stringng
    })
};

export default FormValidationOverlay;
