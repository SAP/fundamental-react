import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export const FormGroup = ({ children, ...props}) => {
    return <div {...props} className='fd-form__group'>{children}</div>;
};

FormGroup.propTypes = {
    children: PropTypes.node
};

export class InputGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.inputValue || '',
            searchValue: this.props.inputValue || ''
        };
    }

    handleUp = e => {
        e.preventDefault();
        this.setState({
            value: this.state.value + 1
        });
    };

    handleDown = e => {
        e.preventDefault();
        this.setState({
            value: this.state.value - 1
        });
    };

    handleClear = e => {
        e.preventDefault();
        this.setState({
            searchValue: ''
        });
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({
            searchValue: e.target.value
        });
    };

    handleTextChange = e => {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    };

  render() {
      const {
          inputType,
          inputId,
          inputName,
          inputPlaceholder,
          inputProps,
          inputValue,
          numberUpButtonProps,
          numberDownButtonProps,
          searchButtonProps,
          addonPos,
          addon,
          glyph,
          actions,
          compact,
          children,
          ...props
      } = this.props;

      switch (inputType) {
          case 'number':
              return (
                  <div
                      {...props}
                      className={`fd-input-group fd-input-group--after${
                          compact ? ' fd-input-group--compact' : ''
                      }`}>
                      <input
                          {...inputProps}
                          className={`${compact ? 'fd-input fd-input--compact' : ''}`}
                          id={inputId}
                          name={inputName}
                          onChange={this.handleTextChange}
                          type='number'
                          value={this.state.value} />
                      <span className='fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after'>
                          <button
                              {...numberUpButtonProps}
                              aria-label='Step up'
                              className='fd-input-group__button fd-input-group__button--step-up sap-icon--slim-arrow-up'
                              onClick={this.handleUp} />
                          <button
                              {...numberDownButtonProps}
                              aria-label='Step down'
                              className='fd-input-group__button fd-input-group__button--step-down sap-icon--slim-arrow-down'
                              onClick={this.handleDown} />
                      </span>
                  </div>
              );

          case 'search':
              return (
                  <div
                      {...props}
                      className={`fd-input-group${
                          compact ? ' fd-input-group--compact' : ''
                      }`}>
                      <input
                          {...inputProps}
                          className={`${compact ? 'fd-input fd-input--compact' : ''}`}
                          id={inputId}
                          name={inputName}
                          onChange={this.handleChange}
                          placeholder={inputPlaceholder}
                          type='search'
                          value={this.state.searchValue} />
                      <span className='fd-input-group__addon fd-input-group__addon--button'>
                          <button
                              {...searchButtonProps}
                              aria-label='Clear'
                              className='fd-input-group__button fd-input-group__button--clear'
                              onClick={this.handleClear} />
                      </span>
                  </div>
              );
          case 'text':
          default: {
              if (addonPos === 'before') {
                  return (
                      <div
                          {...props}
                          className={`fd-input-group fd-input-group--before${
                              compact ? ' fd-input-group--compact' : ''
                          }`}>
                          {actions ? (
                              <span className='fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--before'>
                                  {children}
                              </span>
                          ) : (
                              <span className='fd-input-group__addon fd-input-group__addon--before'>
                                  {glyph ? (
                                      <span
                                          className={`${'sap-icon--' + glyph}`}
                                          role='presentation' />
                                  ) : (
                                      addon
                                  )}
                              </span>
                          )}
                          <input
                              {...inputProps}
                              className={`${compact ? 'fd-input fd-input--compact' : ''}`}
                              id={inputId}
                              name={inputName}
                              onChange={this.handleTextChange}
                              type='text'
                              value={this.state.value} />
                      </div>
                  );
              } else {
                  return (
                      <div
                          {...props}
                          className={`fd-input-group fd-input-group--after${
                              compact ? ' fd-input-group--compact' : ''
                          }`}>
                          <input
                              {...inputProps}
                              className={`${compact ? 'fd-input fd-input--compact' : ''}`}
                              id={inputId}
                              name={inputName}
                              onChange={this.handleTextChange}
                              type='text'
                              value={this.state.value} />
                          {actions ? (
                              <span className='fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after'>
                                  {children}
                              </span>
                          ) : (
                              <span className='fd-input-group__addon fd-input-group__addon--after'>
                                  {glyph ? (
                                      <span
                                          className={`${'sap-icon--' + glyph}`}
                                          role='presentation' />
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

InputGroup.propTypes = {
    actions: PropTypes.bool,
    addon: PropTypes.string,
    addonPos: PropTypes.oneOf(['before', 'after']),
    children: PropTypes.node,
    compact: PropTypes.bool,
    glyph: PropTypes.string,
    inputId: PropTypes.string,
    inputName: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputProps: PropTypes.object,
    inputType: PropTypes.oneOf(['text', 'number', 'search']),
    inputValue: PropTypes.any,
    numberDownButtonProps: PropTypes.object,
    numberUpButtonProps: PropTypes.object,
    searchButtonProps: PropTypes.object
};
