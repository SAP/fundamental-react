import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Link from '../Link/Link';
import { MESSAGESTRIP_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import useUniqueId from '../utils/useUniqueId';
import withStyles from '../utils/withStyles';
import React, { useState } from 'react';
import iconStyles from 'fundamental-styles/dist/icon.css';
import messageStripStyles from 'fundamental-styles/dist/message-strip.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...messageStripStyles
});

/** A **MessageStrip** provides a message within the application that is
 * color-coded to emphasize the level of urgency. */

const MessageStrip = (props) => {

    let [active, setActive] = useState(true);

    const {
        onCloseClicked,
        buttonProps,
        type,
        link,
        linkProps,
        linkText,
        localizedText,
        noGlyph,
        dismissible,
        children,
        className,
        cssNamespace,
        ...otherProps
    } = props;

    const closeMessageStripHandler = (e) => {
        setActive(false);
        onCloseClicked(e);
    };


    const MessageStripClasses = classnames(
        `${cssNamespace}-message-strip`,
        {
            [`${cssNamespace}-message-strip--dismissible`]: dismissible,
            [`${cssNamespace}-message-strip--no-icon`]: noGlyph,
            [`${cssNamespace}-message-strip--${type}`]: !!type
        },
        className
    );

    const generatedAlertId = useUniqueId();
    const alertId = otherProps?.id || generatedAlertId;

    return (
        <>
            {active && (
                <div
                    {...otherProps}
                    className={MessageStripClasses}
                    id={alertId}
                    role='alert'>
                    {dismissible && (
                        <Button
                            {...buttonProps}
                            aria-controls={alertId}
                            aria-label={localizedText.close}
                            className={classnames(`${cssNamespace}-message-strip__close`)}
                            compact
                            glyph='decline'
                            onClick={closeMessageStripHandler}
                            option='transparent' />
                    )}
                    <p className={classnames(`${cssNamespace}-message-strip__text`)}>
                        {children}
                        {link && (
                            <Link
                                {...linkProps}
                                href={link}>
                                {linkText}{' '}
                            </Link>
                        )}
                    </p>
                </div>
            )}
        </>
    );
};

MessageStrip.displayName = 'MessageStrip';

MessageStrip.propTypes = {
    /** Additional props to be spread to the `<button>` element */
    buttonProps: PropTypes.object,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to show a dismiss button */
    dismissible: PropTypes.bool,
    /** Value to be applied to the anchor\'s `href` attribute */
    link: PropTypes.string,
    /** Additional props to be spread to the link\'s `<a>` element */
    linkProps: PropTypes.object,
    /** Localized display text of the link */
    linkText: PropTypes.string,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        /** Value for aria-label on the close <button> element */
        close: PropTypes.string
    }),
    /** Set to **true** to disable the state icon */
    noGlyph: PropTypes.bool,
    /** Sets the variation of the component. Primarily used for styling:
    'warning',
    'error',
    'success',
    'information'*/
    type: PropTypes.oneOf(MESSAGESTRIP_TYPES),
    /**
     * Callback function; triggered when a dismissible MessageStrip's close button is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onCloseClicked: PropTypes.func
};

MessageStrip.defaultProps = {
    localizedText: {
        close: 'Close'
    },
    onCloseClicked: () => { }
};

export default withStyles(MessageStrip);
