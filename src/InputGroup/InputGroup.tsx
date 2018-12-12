import React, { Component } from 'react';
import { ICommonProps } from '../common/common';

interface IInputGroupProps extends ICommonProps {
  inputType?: 'text' | 'number' | 'search';
  inputId?: string;
  inputName?: string;
  inputValue?: any;
  inputPlaceholder?: string;
  addonPos?: 'before' | 'after';
  addon?: string;
  glyph?: string;
  actions?: boolean;
  compact?: boolean;
}

interface IInputGroupState {
  value: string | number;
  searchValue: string;
}

export class InputGroup extends Component<IInputGroupProps, IInputGroupState> {
  state: IInputGroupState = {
    value: this.props.inputValue || '',
    searchValue: this.props.inputValue || ''
  };

  handleUp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof this.state.value === 'number') {
      this.setState({
        value: this.state.value + 1
      });
    }
  };

  handleDown = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof this.state.value === 'number') {
      this.setState({
        value: this.state.value - 1
      });
    }
  };

  handleClear = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState({
      searchValue: ''
    });
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const { value }: any = e.target;
    this.setState({
      searchValue: value
    });
  };

  handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const { value }: any = e.target;
    this.setState({
      value: value
    });
  };

  render() {
    const {
      id,
      children,
      inputType,
      inputId,
      inputName,
      inputPlaceholder,
      addonPos,
      addon,
      glyph,
      actions,
      compact
    } = this.props;

    switch (inputType) {
      case 'number':
        return (
          <div
            id={id}
            className={`fd-input-group fd-input-group--after${
              compact ? ' fd-input-group--compact' : ''
            }`}
          >
            <input
              className={`${compact ? 'fd-input fd-input--compact' : ''}`}
              type="number"
              id={inputId}
              name={inputName}
              value={this.state.value}
              onChange={this.handleTextChange}
            />
            <span className="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after">
              <button
                className="fd-input-group__button fd-input-group__button--step-up sap-icon--slim-arrow-up"
                aria-label="Step up"
                onClick={this.handleUp}
              />
              <button
                className="fd-input-group__button fd-input-group__button--step-down sap-icon--slim-arrow-down"
                aria-label="Step down"
                onClick={this.handleDown}
              />
            </span>
          </div>
        );

      case 'search':
        return (
          <div
            id={id}
            className={`fd-input-group${
              compact ? ' fd-input-group--compact' : ''
            }`}
          >
            <input
              className={`${compact ? 'fd-input fd-input--compact' : ''}`}
              type="search"
              id={inputId}
              name={inputName}
              value={this.state.searchValue}
              placeholder={inputPlaceholder}
              onChange={this.handleChange}
            />
            <span className="fd-input-group__addon fd-input-group__addon--button">
              <button
                className="fd-input-group__button fd-input-group__button--clear"
                aria-label="Clear"
                onClick={this.handleClear}
              />
            </span>
          </div>
        );
      case 'text':
      default: {
        if (addonPos === 'before') {
          return (
            <div
              id={id}
              className={`fd-input-group fd-input-group--before${
                compact ? ' fd-input-group--compact' : ''
              }`}
            >
              {actions ? (
                <span className="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--before">
                  {children}
                </span>
              ) : (
                <span className="fd-input-group__addon fd-input-group__addon--before">
                  {glyph ? (
                    <span
                      className={`${'sap-icon--' + glyph}`}
                      role="presentation"
                    />
                  ) : (
                    addon
                  )}
                </span>
              )}
              <input
                className={`${compact ? 'fd-input fd-input--compact' : ''}`}
                type="text"
                id={inputId}
                name={inputName}
                value={this.state.value}
                onChange={this.handleTextChange}
              />
            </div>
          );
        } else {
          return (
            <div
              id={id}
              className={`fd-input-group fd-input-group--after${
                compact ? ' fd-input-group--compact' : ''
              }`}
            >
              <input
                className={`${compact ? 'fd-input fd-input--compact' : ''}`}
                type="text"
                id={inputId}
                name={inputName}
                value={this.state.value}
                onChange={this.handleTextChange}
              />
              {actions ? (
                <span className="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after">
                  {children}
                </span>
              ) : (
                <span className="fd-input-group__addon fd-input-group__addon--after">
                  {glyph ? (
                    <span
                      className={`${'sap-icon--' + glyph}`}
                      role="presentation"
                    />
                  ) : (
                    addon
                  )}
                </span>
              )}
            </div>
          );
        }
      }
    }
  }
}

interface IFormGroupProps extends ICommonProps {}

export function FormGroup(props: IFormGroupProps): JSX.Element {
  const { id, children } = props;
  return (
    <div id={id} className="fd-form__group">
      {children}
    </div>
  );
}
