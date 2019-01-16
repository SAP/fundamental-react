import classnames from 'classnames';
import PropTypes from 'prop-types';
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
FormItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isCheck: PropTypes.bool,
    isInline: PropTypes.bool
};

// ------------------------------------------------- Form Label ----------------------------------------------
export const FormLabel = ({ required, children, className, ...props }) => {
    const formLabelClasses = classnames(
        'fd-form__label',
        {
            'is-required': required
        },
        className
    );
    return (
        <label
            {...props}
            className={formLabelClasses}>
            {children}
        </label>
    );
};
FormLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    required: PropTypes.bool
};

// ------------------------------------------------- Form Message ----------------------------------------------
export const FormMessage = ({ type, children, className, ...props }) => {
    const formMessageClasses = classnames(
        'fd-form__message',
        {
            'fd-form__message--error': type === 'error',
            'fd-form__message--warning': type === 'warning',
            'fd-form__message--help': type === 'help'
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
FormMessage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(['', 'error', 'warning', 'help'])
};

// ------------------------------------------------- Form Input ----------------------------------------------
export const FormInput = ({ state, className, ...props }) => {
    const formInputClasses = classnames(
        'fd-form__control',
        {
            'is-normal': state === 'normal',
            'is-valid': state === 'valid',
            'is-invalid': state === 'invalid',
            'is-warning': state === 'warning',
            'is-help': state === 'help',
            'is-disabled': state === 'disabled',
            'is-readonly': state === 'readonly'
        },
        className
    );

    return (
        <input
            {...props}
            className={formInputClasses} />
    );
};
FormInput.propTypes = {
    className: PropTypes.string,
    state: PropTypes.string
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
            disabled={disabled ? true : ''}>
            {children}
        </select>
    );
};
FormSelect.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

// ------------------------------------------------- Form Radio ----------------------------------------------
export class FormRadio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: this.props.defaultChecked
        };
    }

    handleChange = e => {
        this.setState({
            selectedItem: e.currentTarget.value
        });
    };

    render() {
        const { inputs, disabled, isInline } = this.props;
        let result;

        if (isInline) {
            result = inputs.map(inputItem => (
                <div
                    className='fd-form__item fd-form__item--inline fd-form__item--check'
                    key={inputItem.id}>
                    <label className='fd-form__label' htmlFor={inputItem.id}>
                        <input
                            checked={this.state.selectedItem === inputItem.id}
                            className='fd-form__control'
                            disabled={disabled ? true : ''}
                            id={inputItem.id}
                            name={inputItem.name}
                            onChange={this.handleChange}
                            type='radio'
                            value={inputItem.value} />
                        {inputItem.label}
                    </label>
                </div>
            ));
        } else {
            result = inputs.map(inputItem => (
                <div className='fd-form__item fd-form__item--check' key={inputItem.id}>
                    <input
                        checked={this.state.selectedItem === inputItem.id}
                        className='fd-form__control'
                        disabled={disabled ? true : ''}
                        id={inputItem.id}
                        name={inputItem.name}
                        onChange={this.handleChange}
                        type='radio'
                        value={inputItem.value} />
                    <label className='fd-form__label' htmlFor={inputItem.id}>
                        {inputItem.label}
                    </label>
                </div>
            ));
        }
        return <div>{result}</div>;
    }
}
FormRadio.propTypes = {
    defaultChecked: PropTypes.string,
    disabled: PropTypes.bool,
    inputs: PropTypes.array,
    isInline: PropTypes.bool
};
