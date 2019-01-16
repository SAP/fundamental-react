import PropTypes from 'prop-types';
import React, { Component } from 'react';

// ---------------------------------------- Popover ----------------------------------------
export class Popover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
            isDisabled: this.props.disabled
        };
    }

  triggerBody = () => {
      if (!this.state.isDisabled) {
          if (!this.state.isExpanded) {
              document.addEventListener('mousedown', this.handleOutsideClick, false);
          } else {
              document.removeEventListener(
                  'mousedown',
                  this.handleOutsideClick,
                  false
              );
          }

          this.setState(prevState => ({
              isExpanded: !prevState.isExpanded
          }));
      }
  };

  pressEsc = event => {
      if (event.keyCode === 27 && this.state.isExpanded === true) {
          this.setState({
              isExpanded: false
          });
      }
  };

  handleOutsideClick = e => {
      if (this.node && !this.node.contains(e.target)) {
          if (this.state.isExpanded) {
              this.setState({
                  isExpanded: false
              });
          } else {
              return;
          }
      }
  };

  componentDidMount() {
      document.addEventListener('keydown', this.pressEsc, false);
      document.addEventListener('mousedown', this.handleOutsideClick, false);
  }
  componentWillUnmount() {
      document.removeEventListener('keydown', this.pressEsc, false);
      document.removeEventListener('mousedown', this.handleOutsideClick, false);
  }

  render() {
      const {
          id,
          alignment,
          noArrow,
          control,
          body,
          className,
          ...rest
      } = this.props;
      return (
          <div
              className={`fd-popover${alignment ? ' fd-popover--' + alignment : ''}${
                  className ? ' ' + className : ''
              }`}
              ref={node => {
                  this.node = node;
              }}
              {...rest}>
              <div
                  aria-controls={id}
                  aria-expanded={this.state.isExpanded}
                  className='fd-popover__control'
                  onClick={this.triggerBody}>
                  {control}
              </div>
              <div
                  aria-hidden={!this.state.isExpanded}
                  className={`fd-popover__body${
                      alignment ? ' fd-popover__body--' + alignment : ''
                  }${noArrow ? ' fd-popover__body--no-arrow' : ''}`}
                  id={id}>
                  {body}
              </div>
          </div>
      );
  }
}

Popover.propTypes = {
    alignment: PropTypes.oneOf(['', 'right']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    noArrow: PropTypes.bool
};
