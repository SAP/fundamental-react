import Button from '../Button/Button';
import { FORM_STATES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import InputGroup from '../InputGroup/InputGroup';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';

const ComboboxInput = React.forwardRef(({ placeholder, menu, compact, className, disableStyles, popoverProps, inputProps, buttonProps, state, ...props }, ref) => {

    return (
        <div {...props} className={className}
            ref={ref}>
            <Popover
                {...popoverProps}
                body={menu}
                control={
                    <InputGroup
                        compact={compact}
                        disableStyles={disableStyles}
                        state={state}>
                        <FormInput
                            {...inputProps}
                            disableStyles={disableStyles}
                            placeholder={placeholder} />
                        <InputGroup.Addon isButton>
                            <Button
                                {...buttonProps}
                                disableStyles={disableStyles}
                                glyph='navigation-down-arrow'
                                option='light' />
                        </InputGroup.Addon>
                    </InputGroup>
                }
                disableKeyPressHandler
                disableStyles={disableStyles}
                noArrow
                useArrowKeyNavigation />
        </div>
    );
});

ComboboxInput.displayName = 'ComboboxInput';

ComboboxInput.propTypes = {
    menu: PropTypes.object.isRequired,
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disableStyles: PropTypes.bool,
    inputProps: PropTypes.object,
    placeholder: PropTypes.string,
    popoverProps: PropTypes.object,
    state: PropTypes.oneOf(FORM_STATES)
};

ComboboxInput.propDescriptions = {
    menu: 'An object containing a `Menu` component.'
};

export default ComboboxInput;
