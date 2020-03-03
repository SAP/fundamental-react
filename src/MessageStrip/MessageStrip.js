import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Link from '../Link/Link';
import { MESSAGESTRIP_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const MessageStrip = (props) => {

    let [active, setActive] = useState(true);

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/message-strip.css');
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
        noGlyph,
        dismissible,
        children,
        className,
        ...otherProps
    } = props;

    const closeMessageStripHandler = (e) => {
        setActive(false);
        onCloseClicked(e);
    };


    const MessageStripClasses = classnames(
        'fd-message-strip',
        {
            'fd-message-strip--dismissible': dismissible,
            'fd-message-strip--no-icon': noGlyph,
            [`fd-message-strip--${type}`]: !!type
        },
        className
    );

    return (
        <div>
            {active && (
                <div
                    {...otherProps}
                    className={MessageStripClasses}
                    role='alert'>
                    {dismissible && (
                        <Button
                            {...buttonProps}
                            aria-controls='j2ALl423'
                            aria-label={localizedText.close}
                            className='fd-message-strip__close'
                            compact
                            onClick={closeMessageStripHandler}
                            option='transparent' />
                    )}
                    <p className='fd-message-strip__text'>
                        {children}
                        {link && (
                            <Link
                                {...linkProps}
                                disableStyles={disableStyles}
                                href={link}>
                                {linkText}{' '}
                            </Link>
                        )}
                    </p>
                </div>
            )}
        </div>
    );
};

MessageStrip.displayName = 'MessageStrip';

MessageStrip.propTypes = {
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
    noGlyph: PropTypes.bool,
    type: PropTypes.oneOf(MESSAGESTRIP_TYPES),
    onCloseClicked: PropTypes.func
};

MessageStrip.defaultProps = {
    localizedText: {
        close: 'Close'
    },
    onCloseClicked: () => { }
};

MessageStrip.propDescriptions = {
    dismissible: 'Set to **true** to show a dismiss button.',
    link: 'Value to be applied to the anchor\'s `href` attribute.',
    linkProps: 'Additional props to be spread to the link\'s `<a>` element.',
    linkText: 'Localized display text of the link.',
    localizedTextShape: {
        close: 'Value for aria-label on the close <button> element.'
    },
    noGlyph: 'Set to **true** to disable the state icon.',
    onCloseClicked: 'Callback function passing event when close button is clicked.'
};

export default MessageStrip;
