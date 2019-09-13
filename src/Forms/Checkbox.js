import 'fundamental-styles/dist/checkbox.css';
import classnames from 'classnames';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import PropTypes from 'prop-types';
import React from 'react';

const getCheckStatus = (checked, indeterminate) => {
    if (indeterminate) {
        return 'mixed';
    } else if (checked) {
        return 'true';
    } else {
        return 'false';
    }
};

const Checkbox = ({ checked, className, defaultChecked, disabled, id, indeterminate, inline, name, onChange, value, ...props }) => {
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
                    aria-checked={getCheckStatus(checked, indeterminate)}
                    checked={checked}
                    className={classes}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onChange={(e) => {
                        onChange(e, !checked);
                    }}
                    ref={el => el && (el.indeterminate = indeterminate)}
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
    indeterminate: PropTypes.bool,
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
    indeterminate: 'When true, the checkbox renders a "mixed" state.',
    inline: '_INTERNAL USE ONLY._',
    name: 'Sets the `name` for the checkbox input.',
    value: 'Sets the `value` for the checkbox input.'
};

export default Checkbox;
