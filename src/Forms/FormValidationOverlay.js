import FormMessage from './FormMessage';
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
    validationState: PropTypes.object
};

FormValidationOverlay.propDescriptions = {

};

export default FormValidationOverlay;
