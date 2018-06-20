import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const FormSet = (props) => {
  const { children } = props;
  return (
    <div className="fd-form__set">{children}</div>
  );
}

export const FormItem = (props) => {
  const { isCheck, isInline, children } = props;
  return (
    <div className={`fd-form__item${isInline ? ' fd-form__item--inline' : ''}${isCheck ? ' fd-form__item--check' : ''}`}>{children}</div>
  );
}

FormItem.propTypes = {
  isCheck: PropTypes.bool,
  isInline: PropTypes.bool
}

export const FormLabel = (props) => {
  const { type, forAttr, labelText, children } = props;
  return (
    <label className={`fd-form__label${type ? ' is-' + type : ''}`} htmlFor={forAttr}>{labelText} {children}</label>
  );
}

FormLabel.propTypes = {
  required: PropTypes.string,
  forAttr: PropTypes.string,
  labelText: PropTypes.string
}

export class FormInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedItem: 'radio-1'
    }
  }

  handleChange(e) {
    this.setState({
      selectedItem: e.currentTarget.value
    })
  }

  render() {
    const { type, state, id, placeholder, name, value, disabled, readonly } = this.props;

    return (<input className={`fd-form__control${state ? ' is-' + state : ''}`} type={type} id={id} placeholder={placeholder} name={name} value={value} disabled={disabled ? true : ""} readOnly={readonly ? true : ""} />);
  }
}

FormInput.propTypes = {
  type: PropTypes.string,
  state: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
}

export class FormRadio extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedItem: 'radio-2'
    }
  }

  handleChange(e) {
    this.setState({
      selectedItem: e.currentTarget.value
    })
  }

  render() {

    const { inputs, disabled, isInline } = this.props;
    let result;

    if (isInline) {
      result = inputs.map(inputItem => <div className={`fd-form__item fd-form__item--check ${isInline ? ' fd-form__item--inline' : ''}`} key={inputItem.id}>
        <label className="fd-form__label" htmlFor={inputItem.id}>
          <input className="fd-form__control" type="radio" id={inputItem.id} name={inputItem.name} value={inputItem.value} disabled={disabled ? true : ""} onChange={this.handleChange} checked={this.state.selectedItem === inputItem.id} />
          {inputItem.labelText}
        </label>
      </div>)
    } else {
      result = inputs.map(inputItem => <div className={`fd-form__item fd-form__item--check ${isInline ? ' fd-form__item--inline' : ''}`} key={inputItem.id}>
        <input className="fd-form__control" type="radio" id={inputItem.id} name={inputItem.name} value={inputItem.value} disabled={disabled ? true : ""} onChange={this.handleChange} checked={this.state.selectedItem === inputItem.id} />
        <label className="fd-form__label" htmlFor={inputItem.id}>{inputItem.labelText}</label>
      </div>)
    }

    return (
      <div>
        {result}
      </div>
    );

  }
}


export const FormTextarea = (props) => {
  const { children } = props;
  return (
    <textarea className="fd-form__control" id="textarea-1">{children}</textarea>
  );
}

FormTextarea.propTypes = {
  id: PropTypes.string
}

export const FormMessage = (props) => {
  const { type, children } = props;
  return (
    <span className={`fd-form__message${type ? '  fd-form__message--' + type : ''}`}>
      {children}
    </span>
  );
}

FormMessage.propTypes = {
  type: PropTypes.string
}

export const FormSelect = (props) => {
  const { id, name, disabled, children } = props;
  return (
    <select className="fd-form__control" id={id} name={name} disabled={disabled ? true : ""}>
      {children}
    </select>
  );
}
FormSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}

export const FormFieldset = (props) => {
  const { children } = props;
  return (
    <fieldset className="fd-form__set">
      {children}
    </fieldset>
  );
}

export const FormLegend = (props) => {
  const { legendText } = props;
  return (
    <legend className="fd-form__legend">
      {legendText}
    </legend>
  );
}