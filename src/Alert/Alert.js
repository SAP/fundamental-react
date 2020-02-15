import { ALERT_TYPES } from '../utils/constants';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Alert = (props) => {

    let [active, setActive] = useState(true);

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/alert.css');
        }
    }, []);

    const {
        onCloseClicked,
        buttonProps,
        disableStyles,
        type,
        link,
        linkProps,
        linkText,
        localizedText,
        dismissible,
        children,
        className,
        ...otherProps
    } = props;

    const closeAlertHandler = (e) => {
        setActive(false);
        onCloseClicked(e);
    };


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
            {active && (
                <div
                    {...otherProps}
                    className={alertClasses}
                    role='alert'>
                    {dismissible && (
                        <button
                            {...buttonProps}
                            aria-controls='j2ALl423'
                            aria-label={localizedText.close}
                            className='fd-alert__close'
                            onClick={closeAlertHandler} />
                    )}
                    <div className='fd-alert__text'>
                        {type && (
                            <Icon disableStyles={disableStyles} glyph={`message-${type}`} />
                        )}
                        {children}
                        {link && (
                            <Link
                                {...linkProps}
                                disableStyles={disableStyles}
                                href={link}>
                                {linkText}{' '}
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

Alert.displayName = 'Alert';

Alert.propTypes = {
    buttonProps: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
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

export { Alert as __Alert };

export default Alert;
