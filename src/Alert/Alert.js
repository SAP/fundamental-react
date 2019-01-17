import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true
        };
    }

  closeAlertHandler = () => {
      this.setState({
          isActive: false
      });
  };

  render() {
      const {
          buttonProps,
          type,
          link,
          linkProps,
          linkText,
          dismissible,
          children,
          className,
          ...props
      } = this.props;
      return (
          <div>
              {this.state.isActive && (
                  <div
                      className={`fd-alert${dismissible ? ' fd-alert--dismissible' : ''}${
                          type ? ' fd-alert--' + type : ''
                      }${className ? ' ' + className : ''}`}
                      role='alert'
                      {...props}>
                      {dismissible && (
                          <button
                              {...buttonProps}
                              aria-controls='j2ALl423'
                              aria-label='Close'
                              className='fd-alert__close'
                              onClick={() => this.closeAlertHandler()} />
                      )}
                      {children}
                      {link && (
                          <a
                              {...linkProps}
                              className='fd-link'
                              href={link}>
                              {linkText}{' '}
                              <span className='sap-icon--arrow-right sap-icon--s' />
                          </a>
                      )}
                  </div>
              )}
          </div>
      );
  }
}

Alert.propTypes = {
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    dismissible: PropTypes.bool,
    link: PropTypes.string,
    linkProps: PropTypes.object,
    linkText: PropTypes.string,
    type: PropTypes.oneOf(['', 'warning', 'error', 'success', 'information'])
};
