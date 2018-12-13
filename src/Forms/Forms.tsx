import React, { Component } from 'react';
import { ICommonProps } from '../common/common';

// ------------------------------------------------- Form Set -----------------------------------------------
interface IFormSetProps extends ICommonProps {}

export function FormSet(props: IFormSetProps): JSX.Element {
  const { id, children } = props;
  return (
    <div id={id} className="fd-form__set">
      {children}
    </div>
  );
}

// ------------------------------------------------- Form Item -----------------------------------------------
interface IFormItemProps extends ICommonProps {
  isCheck?: boolean;
  isInline?: boolean;
}

export function FormItem(props: IFormItemProps): JSX.Element {
  const { id, isCheck, isInline, children } = props;
  return (
    <div
      id={id}
      className={`fd-form__item${isInline ? ' fd-form__item--inline' : ''}${
        isCheck ? ' fd-form__item--check' : ''
      }`}
    >
      {children}
    </div>
  );
}

// ------------------------------------------------- Form Label ----------------------------------------------
interface IFormLabelProps extends ICommonProps {
  required?: boolean;
  forAttr?: string;
}

export function FormLabel(props: IFormLabelProps): JSX.Element {
  const { id, required, forAttr, children } = props;
  return (
    <label
      id={id}
      className={`fd-form__label${required ? ' is-required' : ''}`}
      htmlFor={forAttr}
    >
      {children}
    </label>
  );
}

// ------------------------------------------------- Form Message ----------------------------------------------
interface IFormMessageProps extends ICommonProps {
  type: '' | 'error' | 'warning' | 'help';
}

export function FormMessage(props: IFormMessageProps): JSX.Element {
  const { id, type, children } = props;
  return (
    <span
      id={id}
      className={`fd-form__message${type ? '  fd-form__message--' + type : ''}`}
    >
      {children}
    </span>
  );
}

// ------------------------------------------------- Form Input ----------------------------------------------
interface IFormInputProps extends ICommonProps {
  type?: string;
  state?: string;
  placeholder?: string;
}

export function FormInput(props: IFormInputProps): JSX.Element {
  const { type, state, id, placeholder } = props;
  return (
    <input
      className={`fd-form__control${state ? ' is-' + state : ''}`}
      type={type}
      id={id}
      placeholder={placeholder}
    />
  );
}

// ------------------------------------------------- Form Textarea ----------------------------------------------
interface IFormTextareaProps extends ICommonProps {}

export function FormTextarea(props: IFormTextareaProps): JSX.Element {
  const { id, children } = props;
  return (
    <textarea className="fd-form__control" id={id}>
      {children}
    </textarea>
  );
}

// ------------------------------------------------- Form Fieldset ----------------------------------------------
interface IFormFieldsetProps extends ICommonProps {}

export function FormFieldset(props: IFormFieldsetProps): JSX.Element {
  const { children } = props;
  return <fieldset className="fd-form__set">{children}</fieldset>;
}

// ------------------------------------------------- Form Legend ----------------------------------------------
interface IFormLegendProps extends ICommonProps {}

export function FormLegend(props: IFormLegendProps): JSX.Element {
  const { children } = props;
  return <legend className="fd-form__legend">{children}</legend>;
}

// ------------------------------------------------- Form Select ----------------------------------------------
interface IFormSelectProps extends ICommonProps {
  name?: string;
  disabled?: boolean;
}

export function FormSelect(props: IFormSelectProps): JSX.Element {
  const { id, name, disabled, children } = props;
  return (
    <select
      className="fd-form__control"
      id={id}
      name={name}
      disabled={disabled ? true : false}
    >
      {children}
    </select>
  );
}

// ------------------------------------------------- Form Radio ----------------------------------------------
interface IFormRadioProps extends ICommonProps {
  defaultChecked?: string;
  isInline?: boolean;
  disabled?: boolean;
  inputs: [
    {
      id: string;
      name: string;
      value: string;
      label: string;
    }
  ];
}

interface IFormRadioState {
  selectedItem?: string;
}

export class FormRadio extends Component<IFormRadioProps, IFormRadioState> {
  state: IFormRadioState = {
    selectedItem: this.props.defaultChecked
  };

  constructor(props: IFormRadioProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.FormEvent) {
    const { value }: any = e.currentTarget;
    this.setState({
      selectedItem: value
    });
  }

  render() {
    const { inputs, disabled, isInline } = this.props;
    let result;

    if (isInline) {
      result = inputs.map(inputItem => (
        <div
          className="fd-form__item fd-form__item--inline fd-form__item--check"
          key={inputItem.id}
        >
          <label className="fd-form__label" htmlFor={inputItem.id}>
            <input
              className="fd-form__control"
              type="radio"
              id={inputItem.id}
              name={inputItem.name}
              value={inputItem.value}
              disabled={disabled ? true : false}
              onChange={this.handleChange}
              checked={this.state.selectedItem === inputItem.id}
            />
            {inputItem.label}
          </label>
        </div>
      ));
    } else {
      result = inputs.map(inputItem => (
        <div className="fd-form__item fd-form__item--check" key={inputItem.id}>
          <input
            className="fd-form__control"
            type="radio"
            id={inputItem.id}
            name={inputItem.name}
            value={inputItem.value}
            disabled={disabled ? true : false}
            onChange={this.handleChange}
            checked={this.state.selectedItem === inputItem.id}
          />
          <label className="fd-form__label" htmlFor={inputItem.id}>
            {inputItem.label}
          </label>
        </div>
      ));
    }
    return <div>{result}</div>;
  }
}
