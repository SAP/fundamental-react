import classnames from 'classnames';
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

        const alertClasses = classnames(
            'fd-alert',
            {
                'fd-alert--dismissible': dismissible,
                'fd-alert--warning': type === 'warning',
                'fd-alert--error': type === 'error',
                'fd-alert--success': type === 'success',
                'fd-alert--information': type === 'information'
            },
            className
        );

        return (
            <div>
                {this.state.isActive && (
                    <div
                        className={alertClasses}
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
