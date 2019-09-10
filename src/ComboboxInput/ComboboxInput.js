import 'fundamental-styles/dist/input-group.css';
import Button from '../Button/Button';
import classnames from 'classnames';
import FormInput from '../Forms/FormInput';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';

const ComboboxInput = ({ placeholder, menu, compact, className, popoverProps, inputProps, buttonProps, ...props }) => {
    const comboboxPopoverClasses = classnames(
        'fd-input-group'
    );

    return (
        <div {...props} className={className}>
            <Popover
                {...popoverProps}
                body={menu}
                control={
                    <div className={comboboxPopoverClasses}>
                        <FormInput
                            {...inputProps}
                            compact={compact}
                            placeholder={placeholder}
                            type='text' />
                        <span className='fd-input-group__addon fd-input-group__addon--button'>
                            <Button
                                {...buttonProps}
                                compact={compact}
                                glyph='navigation-down-arrow'
                                option='light' />
                        </span>
                    </div>
                }
                noArrow />
        </div>
    );
};

ComboboxInput.displayName = 'ComboboxInput';

ComboboxInput.propTypes = {
    menu: PropTypes.object.isRequired,
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    compact: PropTypes.bool,
    inputProps: PropTypes.object,
    placeholder: PropTypes.string,
    popoverProps: PropTypes.object
};

ComboboxInput.propDescriptions = {
    menu: 'An object containing a `Menu` component.'
};

export default ComboboxInput;
