import PropTypes from 'prop-types';
import React from 'react';

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: props.checked };
    }

  handleChange = () => {
      this.setState({ checked: !this.state.checked });
  };

  render() {
      const { size, id, disabled, children, className, ...rest } = this.props;

      return (
          <div
              className={`fd-form__item fd-form__item--check${
                  className ? ' ' + className : ''
              }`}
              {...rest}>
              <label className='fd-form__label' htmlFor={id}>
                  <span
                      className={`fd-toggle${
                          size ? ' fd-toggle--' + size : ''
                      } fd-form__control`}>
                      <input
                          checked={this.state.checked}
                          disabled={disabled}
                          id={id}
                          onChange={this.handleChange}
                          type='checkbox' />
                      <span className='fd-toggle__switch' role='presentation' />
                  </span>
                  {children}
              </label>
          </div>
      );
  }
}

Toggle.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    size: PropTypes.oneOf(['', 'xs', 's', 'l'])
};
