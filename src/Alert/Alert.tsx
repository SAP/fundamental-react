import React, { Component } from 'react';

interface IProps {
  type?: '' | 'warning' | 'error';
  link?: string;
  linkText?: string;
  dismissable?: boolean;
}

interface IState {
  isActive: boolean;
}

export class Alert extends Component<IProps, IState> {
  state: IState = {
    isActive: true
  };

  closeAlertHandler() {
    this.setState({
      isActive: false
    });
  }

  render() {
    const { children, type, link, linkText, dismissable } = this.props;
    return (
      <div>
        {this.state.isActive && (
          <div
            className={`fd-alert${dismissable ? ' fd-alert--dismissible' : ''}${
              type ? ' fd-alert--' + type : ''
            }`}
            role="alert"
            id="j2ALl423"
          >
            {dismissable ? (
              <button
                className="fd-alert__close"
                aria-controls="j2ALl423"
                aria-label="Close"
                onClick={() => this.closeAlertHandler()}
              />
            ) : null}
            {children}
            {link ? (
              <a href={link} className="fd-link">
                {linkText}{' '}
                <span className="sap-icon--arrow-right sap-icon--s" />
              </a>
            ) : (
              undefined
            )}
          </div>
        )}
      </div>
    );
  }
}
