import React, { Component } from 'react';
import { ICommonProps } from '../common/common';

interface IToggleProps extends ICommonProps {
  size?: '' | 'xs' | 's' | 'l';
  disabled?: boolean;
  checked?: boolean;
}

interface IToggleState {
  checked?: boolean;
}

export class Toggle extends Component<IToggleProps, IToggleState> {
  state: IToggleState = {
    checked: false
  };

  constructor(props: IToggleProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { children, size, id, disabled } = this.props;

    return (
      <div className="fd-form__item fd-form__item--check">
        <label className="fd-form__label" htmlFor={id}>
          <span
            className={`fd-toggle${
              size ? ' fd-toggle--' + size : ''
            } fd-form__control`}
          >
            <input
              type="checkbox"
              id={id}
              checked={this.state.checked}
              onChange={this.handleChange}
              disabled={disabled}
            />
            <span className="fd-toggle__switch" role="presentation" />
          </span>
          {children}
        </label>
      </div>
    );
  }
}
