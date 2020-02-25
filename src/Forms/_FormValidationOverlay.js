import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from './_FormMessage';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';

const FormValidationOverlay = ({ className, control, validationState, ...props }) => {

    const { state, text } = validationState;

    const bodyContent = (<FormMessage type={state}>{text}</FormMessage>);

    return (
        <Popover
            {...props}
            body={bodyContent}
            control={control}
            noArrow
            placement='bottom-start' />
    );
};
FormValidationOverlay.displayName = 'FormValidationOverlay';

FormValidationOverlay.propTypes = {
    className: PropTypes.string,
    control: PropTypes.node,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    })
};

FormValidationOverlay.propDescriptions = {

};

export default FormValidationOverlay;
