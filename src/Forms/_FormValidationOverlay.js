import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from './_FormMessage';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';

const FormValidationOverlay = ({ className, control, id, validationState, ...props }) => {

    const { state, text } = validationState;

    const bodyContent = (<FormMessage type={state}>{text}</FormMessage>);

    return (
        <Popover
            {...props}
            body={bodyContent}
            className='fd-popover--input-message-group'
            control={control}
            noArrow
            placement='bottom-start'
            popperProps={{ id }}
            style={{ display: 'block' }} /> // TO DO: replace with class from fundamental-styles
    );
};
FormValidationOverlay.displayName = 'FormValidationOverlay';

FormValidationOverlay.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    control: PropTypes.node,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.stringng
    })
};

export default FormValidationOverlay;
