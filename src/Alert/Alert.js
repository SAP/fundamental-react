import { ALERT_TYPES } from '../utils/constants';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true
        };
    }

    closeAlertHandler = (e) => {
        this.setState({
            isActive: false
        }, () => {
            this.props.onCloseClicked(e);
        });
    };

    render() {
        const {
            onCloseClicked,
            buttonProps,
            type,
            link,
            linkProps,
            linkText,
            localizedText,
            dismissible,
            children,
            className,
            ...props
        } = this.props;

        const alertClasses = classnames(
            'fd-alert',
            {
                'fd-alert--dismissible': dismissible,
                [`fd-alert--${type}`]: !!type
            },
            className
        );

        return (
            <div>
                {this.state.isActive && (
                    <div
                        {...props}
                        className={alertClasses}
                        role='alert'>
                        {dismissible && (
                            <button
                                {...buttonProps}
                                aria-controls='j2ALl423'
                                aria-label={localizedText.close}
                                className='fd-alert__close'
                                onClick={this.closeAlertHandler} />
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

Alert.displayName = 'Alert';

Alert.propTypes = {
    buttonProps: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    dismissible: PropTypes.bool,
    link: PropTypes.string,
    linkProps: PropTypes.object,
    linkText: PropTypes.string,
    localizedText: CustomPropTypes.i18n({
        close: PropTypes.string
    }),
    type: PropTypes.oneOf(ALERT_TYPES),
    onCloseClicked: PropTypes.func
};

Alert.defaultProps = {
    localizedText: {
        close: 'Close'
    },
    onCloseClicked: () => { }
};

Alert.propDescriptions = {
    dismissible: 'Set to **true** to show a dismiss button.',
    link: 'Value to be applied to the anchor\'s `href` attribute.',
    linkProps: 'Additional props to be spread to the link\'s `<a>` element.',
    linkText: 'Localized display text of the link.',
    localizedTextShape: {
        close: 'Value for aria-label on the close <button> element.'
    },
    onCloseClicked: 'Callback function passing event when close button is clicked.'
};

export default Alert;
