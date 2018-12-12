import React, { Component } from 'react';
import { ICommonProps } from '../common/common';

interface IAlertProps extends ICommonProps {
  type?: '' | 'warning' | 'error';
  link?: string;
  linkText?: string;
  dismissable?: boolean;
}

interface IAlertState {
  isActive: boolean;
}

export class Alert extends Component<IAlertProps, IAlertState> {
  state: IAlertState = {
    isActive: true
  };

  closeAlertHandler() {
    this.setState({
      isActive: false
    });
  }

  render() {
    const { id, children, type, link, linkText, dismissable } = this.props;
    return (
      <div id={id}>
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
