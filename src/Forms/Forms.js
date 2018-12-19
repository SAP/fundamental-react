import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------------- Form Set -----------------------------------------------
export const FormSet = props => {
    const { children } = props;
    return <div className='fd-form__set'>{children}</div>;
};

// ------------------------------------------------- Form Item -----------------------------------------------
export const FormItem = props => {
    const { isCheck, isInline, children } = props;
    return (
        <div
            className={`fd-form__item${isInline ? ' fd-form__item--inline' : ''}${
                isCheck ? ' fd-form__item--check' : ''
            }`}
        >
            {children}
        </div>
    );
};

FormItem.propTypes = {
    isCheck: PropTypes.bool,
    isInline: PropTypes.bool
};

// ------------------------------------------------- Form Label ----------------------------------------------
export const FormLabel = props => {
    const { required, forAttr, children } = props;
    return (
        <label className={`fd-form__label${required ? ' is-required' : ''}`} htmlFor={forAttr}>
            {children}
        </label>
    );
};

FormLabel.propTypes = {
    forAttr: PropTypes.string,
    required: PropTypes.bool
};

// ------------------------------------------------- Form Message ----------------------------------------------
export const FormMessage = props => {
    const { type, children } = props;
    return <span className={`fd-form__message${type ? '  fd-form__message--' + type : ''}`}>{children}</span>;
};

FormMessage.propTypes = {
    type: PropTypes.oneOf(['', 'error', 'warning', 'help'])
};

// ------------------------------------------------- Form Input ----------------------------------------------
export const FormInput = props => {
    const { type, state, id, placeholder } = props;
    return (
        <input
            className={`fd-form__control${state ? ' is-' + state : ''}`}
            type={type}
            id={id}
            placeholder={placeholder}
        />
    );
};

FormInput.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    state: PropTypes.string,
    type: PropTypes.string
};

// ------------------------------------------------- Form Textarea ----------------------------------------------
export const FormTextarea = props => {
    const { id, children } = props;
    return (
        <textarea className='fd-form__control' id={id}>
            {children}
        </textarea>
    );
};

FormTextarea.propTypes = {
    id: PropTypes.string
};

// ------------------------------------------------- Form Fieldset ----------------------------------------------
export const FormFieldset = props => {
    const { children } = props;
    return <fieldset className='fd-form__set'>{children}</fieldset>;
};

// ------------------------------------------------- Form Legend ----------------------------------------------
export const FormLegend = props => {
    const { children } = props;
    return <legend className='fd-form__legend'>{children}</legend>;
};

// ------------------------------------------------- Form Select ----------------------------------------------
export const FormSelect = props => {
    const { id, name, disabled, children } = props;
    return (
        <select className='fd-form__control' id={id} name={name} disabled={disabled ? true : ''}>
            {children}
        </select>
    );
};
FormSelect.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string
};

// ------------------------------------------------- Form Radio ----------------------------------------------
export class FormRadio extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectedItem: this.props.defaultChecked
        };
    }

    handleChange(e) {
        this.setState({
            selectedItem: e.currentTarget.value
        });
    }

    render() {
        const { inputs, disabled, isInline } = this.props;
        let result;

        if (isInline) {
            result = inputs.map(inputItem => (
                <div className='fd-form__item fd-form__item--inline fd-form__item--check' key={inputItem.id}>
                    <label className='fd-form__label' htmlFor={inputItem.id}>
                        <input
                            className='fd-form__control'
                            type='radio'
                            id={inputItem.id}
                            name={inputItem.name}
                            value={inputItem.value}
                            disabled={disabled ? true : ''}
                            onChange={this.handleChange}
                            checked={this.state.selectedItem === inputItem.id}
                        />
                        {inputItem.label}
                    </label>
                </div>
            ));
        } else {
            result = inputs.map(inputItem => (
                <div className='fd-form__item fd-form__item--check' key={inputItem.id}>
                    <input
                        className='fd-form__control'
                        type='radio'
                        id={inputItem.id}
                        name={inputItem.name}
                        value={inputItem.value}
                        disabled={disabled ? true : ''}
                        onChange={this.handleChange}
                        checked={this.state.selectedItem === inputItem.id}
                    />
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
    isInline: PropTypes.bool
};
