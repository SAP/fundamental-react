import 'fundamental-styles/dist/checkbox.css';
import classnames from 'classnames';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import PropTypes from 'prop-types';
import React from 'react';

const Checkbox = ({ checked, className, defaultChecked, disabled, id, inline, name, onChange, value, ...props }) => {
    const classes = classnames(
        className,
        'fd-checkbox'
    );

    return (
        <FormItem
            disabled={disabled}
            inline={inline}>
            <FormLabel disabled={disabled}>
                <input
                    {...props}
                    aria-checked={checked}
                    checked={checked}
                    className={classes}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onChange={(e) => {
                        onChange(e, !checked);
                    }}
                    type='checkbox' />
                {value}
            </FormLabel>
        </FormItem>
    );
};

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    inline: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    onChange: () => {}
};

Checkbox.propDescriptions = {
    checked: 'Set to **true** when checkbox input is checked and a controlled component.',
    defaultChecked: 'Set to **true** when the checkbox input is checked and an uncontrolled component.',
    inline: '_INTERNAL USE ONLY._',
    name: 'Sets the `name` for the checkbox input.',
    value: 'Sets the `value` for the checkbox input.'
};

export default Checkbox;
