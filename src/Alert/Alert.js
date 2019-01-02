import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true
        };
    }

    closeAlertHandler() {
        this.setState({
            isActive: false
        });
    }

    render() {
        const { type, link, linkText, dismissable, children, className, ...props } = this.props;
        return (
            <div>
                {this.state.isActive && (
                    <div
                        className={`fd-alert${dismissable ? ' fd-alert--dismissible' : ''}${
                            type ? ' fd-alert--' + type : ''
                        }${className ? ' ' + className : ''}`}
                        role='alert'
                        {...props}>
                        {dismissable ? (
                            <button
                                className='fd-alert__close'
                                aria-controls='j2ALl423'
                                aria-label='Close'
                                onClick={() => this.closeAlertHandler()} />
                        ) : null}
                        {children}
                        {link ? (
                            <a href={link} className='fd-link'>
                                {linkText} <span className='sap-icon--arrow-right sap-icon--s' />
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

Alert.propTypes = {
    className: PropTypes.string,
    dismissable: PropTypes.bool,
    link: PropTypes.string,
    linkText: PropTypes.string,
    type: PropTypes.oneOf(['', 'warning', 'error', 'success', 'information'])
};
