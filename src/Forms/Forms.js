import PropTypes from 'prop-types';
import React, { Component } from 'react';

// ------------------------------------------------- Form Set -----------------------------------------------
export const FormSet = ({ children, className, ...props }) => {
    return (
        <div {...props} className={`fd-form__set${className ? ' ' + className : ''}`}>
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
    return (
        <div
            {...props}
            className={`fd-form__item${isInline ? ' fd-form__item--inline' : ''}${
                isCheck ? ' fd-form__item--check' : ''
            }${className ? ' ' + className : ''}`}>
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
    return (
        <label
            {...props}
            className={`fd-form__label${required ? ' is-required' : ''}${
                className ? ' ' + className : ''
            }`}>
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
    return (
        <span
            {...props}
            className={`fd-form__message${type ? '  fd-form__message--' + type : ''}${
                className ? ' ' + className : ''
            }`}>
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
    return (
        <input
            {...props}
            className={`fd-form__control${state ? ' is-' + state : ''}${
                className ? ' ' + className : ''
            }`} />
    );
};
FormInput.propTypes = {
    className: PropTypes.string,
    state: PropTypes.string
};

// ------------------------------------------------- Form Textarea ----------------------------------------------
export const FormTextarea = ({ children, className, ...props }) => {
    return (
        <textarea
            {...props}
            className={`fd-form__control${className ? ' ' + className : ''}`}>
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
    return (
        <fieldset
            {...props}
            className={`fd-form__set${className ? ' ' + className : ''}`}>
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
    return (
        <legend
            {...props}
            className={`fd-form__legend${className ? ' ' + className : ''}`}>
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
    return (
        <select
            {...props}
            className={`fd-form__control${className ? ' ' + className : ''}`}
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
