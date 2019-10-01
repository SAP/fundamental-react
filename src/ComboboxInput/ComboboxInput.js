import Button from '../Button/Button';
import classnames from 'classnames';
import FormInput from '../Forms/FormInput';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const ComboboxInput = React.forwardRef(({ placeholder, menu, compact, className, disableStyles, popoverProps, inputProps, buttonProps, ...props }, ref) => {
    const comboboxPopoverClasses = classnames(
        'fd-input-group'
    );

    return (
        <div {...props} className={className}
            ref={ref}>
            <Popover
                {...popoverProps}
                body={menu}
                control={
                    <div className={comboboxPopoverClasses}>
                        <FormInput
                            {...inputProps}
                            className='fd-input-group__input'
                            compact={compact}
                            disableStyles={disableStyles}
                            placeholder={placeholder}
                            type='text' />
                        <span className='fd-input-group__addon fd-input-group__addon--button'>
                            <Button
                                {...buttonProps}
                                className='fd-input-group__button'
                                compact={compact}
                                disableStyles={disableStyles}
                                glyph='navigation-down-arrow'
                                option='light' />
                        </span>
                    </div>
                }
                disableStyles={disableStyles}
                noArrow />
        </div>
    );
});

ComboboxInput.displayName = 'ComboboxInput';

ComboboxInput.propTypes = {
    menu: PropTypes.object.isRequired,
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    compact: PropTypes.bool,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    inputProps: PropTypes.object,
    placeholder: PropTypes.string,
    popoverProps: PropTypes.object
};

ComboboxInput.propDescriptions = {
    menu: 'An object containing a `Menu` component.'
};

export { ComboboxInput as __ComboboxInput };

export default withStyles(ComboboxInput, { cssFile: 'input-group' });
