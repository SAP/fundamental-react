import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import React, { Component } from 'react';

// ------------------------------------------------- Form Set -----------------------------------------------
export const FormSet = ({ children, className, ...props }) => {
    const formSetClasses = classnames(
        'fd-form__set',
        className
    );

    return (
        <div {...props} className={formSetClasses}>
            {children}
        </div>
    );
};
FormSet.displayName = 'FormSet';

FormSet.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

// ------------------------------------------------- Form Item -----------------------------------------------
export const FormItem = ({ isCheck, isInline, children, className, ...props }) => {
    const formItemClasses = classnames(
        'fd-form__item',
        {
            'fd-form__item--inline': isInline,
            'fd-form__item--check': isCheck
        },
        className
    );

    return (
        <div
            {...props}
            className={formItemClasses}>
            {children}
        </div>
    );
};
FormItem.displayName = 'FormItem';

FormItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isCheck: PropTypes.bool,
    isInline: PropTypes.bool
};

FormItem.propDescriptions = {
    isCheck: 'Set to **true** to render an `<input>` with `type` of **checkbox**.',
    isInline: 'Set to **true** to display radio buttons and checkboxes in a row.'
};

// ------------------------------------------------- Form Label ----------------------------------------------
export const FormLabel = ({ required, children, className, ...props }) => {
    const formLabelClasses = classnames(
        'fd-form__label',
        className
    );
    return (
        <label
            {...props}
            aria-required={required}
            className={formLabelClasses}>
            {children}
            {required ? '*' : ''}
        </label>
    );
};
FormLabel.displayName = 'FormLabel';

FormLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    required: PropTypes.bool
};

FormLabel.propDescriptions = {
    required: 'Set to **true** for required input fields.'
};

// ------------------------------------------------- Form Message ----------------------------------------------
export const FormMessage = ({ type, children, className, ...props }) => {
    const formMessageClasses = classnames(
        'fd-form__message',
        {
            [`fd-form__message--${type}`]: !!type
        },
        className
    );
    return (
        <span
            {...props}
            className={formMessageClasses}>
            {children}
        </span>
    );
};
FormMessage.displayName = 'FormMessage';

FormMessage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(FORM_MESSAGE_TYPES)
};

// ------------------------------------------------- Form Input ----------------------------------------------
export const FormInput = ({ state, className, ...props }) => {
    const formInputClasses = classnames(
        'fd-form__control',
        {
            [`is-${state}`]: !!state
        },
        className
    );

    return (
        <input
            {...props}
            className={formInputClasses} />
    );
};
FormInput.displayName = 'FormInput';

FormInput.propTypes = {
    className: PropTypes.string,
    state: PropTypes.string
};

FormInput.propDescriptions = {
    state: 'Sets the state of the input. Options include \'normal\', \'valid\', \'invalid\', \'warning\', \'help\', \'disabled\', and \'readonly\'. Leave empty for normal.'
};

// ------------------------------------------------- Form Textarea ----------------------------------------------
export const FormTextarea = ({ children, className, ...props }) => {
    const formTextAreaClasses = classnames(
        'fd-form__control',
        className
    );

    return (
        <textarea
            {...props}
            className={formTextAreaClasses}>
            {children}
        </textarea>
    );
};
FormTextarea.displayName = 'FormTextarea';

FormTextarea.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

// ------------------------------------------------- Form Fieldset ----------------------------------------------
export const FormFieldset = ({ children, className, ...props }) => {
    const formFieldsetClasses = classnames(
        'fd-form__set',
        className
    );

    return (
        <fieldset
            {...props}
            className={formFieldsetClasses}>
            {children}
        </fieldset>
    );
};
FormFieldset.displayName = 'FormFieldset';

FormFieldset.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

// ------------------------------------------------- Form Legend ----------------------------------------------
export const FormLegend = ({ children, className, ...props }) => {
    const formLegendClasses = classnames(
        'fd-form__legend',
        className
    );

    return (
        <legend
            {...props}
            className={formLegendClasses}>
            {children}
        </legend>
    );
};
FormLegend.displayName = 'FormLegend';

FormLegend.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

// ------------------------------------------------- Form Select ----------------------------------------------
export const FormSelect = ({ disabled, children, className, ...props }) => {
    const formSelectClasses = classnames(
        'fd-form__control',
        className
    );

    return (
        <select
            {...props}
            className={formSelectClasses}
            disabled={disabled}>
            {children}
        </select>
    );
};
FormSelect.displayName = 'FormSelect';

FormSelect.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

// ------------------------------------------------- Form Radio ----------------------------------------------
export class FormRadioGroup extends Component {
    constructor(props) {
        super(props);

        this.groupId = shortId.generate();
    }

    render() {
        const { children, disabled, isInline, onChange, ...props } = this.props;

        return (
            <div
                {...props}>
                {React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            disabled: child.props.disabled ? child.props.disabled : disabled,
                            inline: child.props.inline ? child.props.inline : isInline,
                            name: child.props.name ? child.props.name : this.groupId,
                            onChange: child.props.onChange ? child.props.onChange : onChange
                        });
                    } else {
                        return child;
                    }
                })}
            </div>
        );
    }
}

FormRadioGroup.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    isInline: PropTypes.bool,
    onChange: PropTypes.func
};

FormRadioGroup.defaultProps = {
    onChange: () => {}
};

FormRadioGroup.propDescriptions = {
    isInline: 'Set to **true** to display radio buttons in a row.'
};

export const FormRadioItem = ({ checked, children, className, disabled, id, inline, name, value, ...props }) => {
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
    inline: 'Set to **true** when radio input is inline.',
    name: 'Sets the `name` for the radio input.',
    value: 'Sets the `value` for the radio input.'
};
