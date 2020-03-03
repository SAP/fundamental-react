import classnames from 'classnames';
import { FORM_STATES } from '../utils/constants';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import React, { useEffect, useRef } from 'react';

const getCheckStatus = (checked, indeterminate) => {
    if (indeterminate) {
        return 'mixed';
    } else if (checked) {
        return 'true';
    } else {
        return 'false';
    }
};

const Checkbox = React.forwardRef(({
    checked,
    children,
    className,
    compact,
    defaultChecked,
    disabled,
    disableStyles,
    id,
    indeterminate,
    inline,
    inputProps,
    labelClasses,
    labelProps,
    name,
    onChange,
    value,
    state,
    ...props
}, ref) => {

    const inputEl = useRef();

    useEffect(() => {
        inputEl && (inputEl.current.indeterminate = indeterminate);
    });

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/checkbox.css');
        }
    }, []);

    const classes = classnames(
        className,
        'fd-checkbox',
        {
            [`is-${state}`]: state,
            'fd-checkbox--compact': compact
        }
    );

    const labelClassNames = classnames(
        'fd-checkbox__label',
        labelClasses
    );

    const checkId = id ? id : shortId.generate();

    return (
        <FormItem
            {...props}
            disableStyles={disableStyles}
            disabled={disabled}
            isInline={inline}
            ref={ref}>
            <input
                {...inputProps}
                aria-checked={getCheckStatus(checked, indeterminate)}
                checked={checked || defaultChecked}
                className={classes}
                disabled={disabled}
                id={checkId}
                name={name}
                onChange={(e) => {
                    onChange(e, !checked);
                }}
                ref={inputEl}
                type='checkbox'
                value={value} />
            <FormLabel {...labelProps}
                className={labelClassNames}
                disableStyles={disableStyles}
                disabled={disabled}
                htmlFor={checkId}>
                {children}
            </FormLabel>
        </FormItem>
    );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    children: PropTypes.node.isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string,
    compact: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    id: PropTypes.string,
    indeterminate: PropTypes.bool,
    inline: PropTypes.bool,
    inputProps: PropTypes.object,
    labelClasses: PropTypes.string,
    labelProps: PropTypes.object,
    name: PropTypes.string,
    state: PropTypes.oneOf(FORM_STATES),
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
    inputProps: 'Props to be spread to the component `<input>` element.',
    labelClasses: 'Classes to be added to the component `<label>` element.',
    labelProps: 'Props to be spread to the component `<label>` element.',
    name: 'Sets the `name` for the checkbox input.',
    value: 'Sets the `value` for the checkbox input.'
};

export default Checkbox;
