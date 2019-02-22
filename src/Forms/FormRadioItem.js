import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormRadioItem = ({ checked, children, className, disabled, id, inline, name, value, ...props }) => {
    const classes = classnames(
        className,
        'fd-form__item',
        'fd-form__item--check',
        {
            'fd-form__item--inline': inline
        }
    );

    return (
        <div className={classes} key={id}>
            <label className='fd-form__label'>
                <input
                    {...props}
                    checked={checked}
                    className='fd-form__control'
                    disabled={disabled}
                    id={id}
                    name={name}
                    type='radio'
                    value={value} />
                {children}
            </label>
        </div>
    );
};

FormRadioItem.displayName = 'FormRadioItem';

FormRadioItem.propTypes = {
    children: PropTypes.node.isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    inline: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.string
};

FormRadioItem.propDescriptions = {
    checked: 'Set to **true** when radio input is checked and a controlled component.',
    defaultChecked: 'Set to **true** when the radio input is checked and an uncontrolled component.',
    inline: '_INTERNAL USE ONLY._',
    name: 'Sets the `name` for the radio input.',
    value: 'Sets the `value` for the radio input.'
};

export default FormRadioItem;
