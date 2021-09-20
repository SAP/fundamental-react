import classnamesBind from 'classnames/bind';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';

import styles from 'fundamental-styles/dist/message-page.css';

const classnames = classnamesBind.bind(styles);

/**
 * Message page displays a message to the user when an app or list is empty or
 * if an error has occurred. The text and icon on the message page changes
 * depending on the use case, however, the layout stays the same. It is
 * responsive and adjusts to fit the available screen space.
 *
 * ##### The message page can be used in the following situations:
 *
 * * Filter with no results
 * * Search with no results
 * * Empty app
 * * Too many items
 * * Item saved as a tile that is no longer available
 * * Error
 *
 * @returns {Node} MessageBox component
 */
function MessagePage({
    actions,
    cssNamespace,
    className,
    image,
    glyph,
    title,
    more,
    subtitle,
    ...props
}) {
    return (
        <section className={classnames(`${cssNamespace}-message-page`, className)} {...props}>
            <div className={classnames(`${cssNamespace}-message-page__container`)}>
                <div className={classnames(`${cssNamespace}-message-page__icon-container`)}>
                    {!image && <Icon
                        ariaLabel={glyph}
                        className={classnames(`${cssNamespace}-message-page__icon`)}
                        glyph={glyph} />}
                    {image}
                </div>
                <div
                    aria-live='polite'
                    className={classnames(`${cssNamespace}-message-page__content`)}
                    role='status'>
                    <div className={classnames(`${cssNamespace}-message-page__title`)}>{title}</div>
                    {subtitle && <div className={classnames(`${cssNamespace}-message-page__subtitle`)}>{subtitle}</div>}
                    {actions && <div className={classnames(`${cssNamespace}-message-page__actions`)}>{actions}</div>}
                    {more && <div className={classnames(`${cssNamespace}-message-page__more`)}>{more}</div>}
                </div>
            </div>
        </section>
    );
}
MessagePage.propTypes = {
    /** Glyph to use for the icon */
    glyph: PropTypes.string.isRequired,
    /** Localized text for the title */
    title: PropTypes.string.isRequired,

    /** Content to use in the actions section */
    actions: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Image (or any other content) to use in place of the original icon */
    image: PropTypes.node,
    /** Content to use in the "more" section */
    more: PropTypes.node,
    /** Content to use for the subtitle */
    subtitle: PropTypes.node
};
MessagePage.defaultProps = {
    glyph: 'product'
};

export default withStyles(MessagePage);
