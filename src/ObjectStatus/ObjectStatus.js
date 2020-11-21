import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import { OBJECT_STATUS_SIZES, OBJECT_STATUS_TYPES } from '../utils/constants';
import iconStyles from 'fundamental-styles/dist/icon.css';
import objectStatus from 'fundamental-styles/dist/object-status.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...objectStatus
});

/** *Object Status* is a short text that represents the semantic status of an object. It has a semantic color and an optional icon.
 * Typically, the object status is used in the dynamic page header and as a status attribute of a line item in a table. */

const ObjectStatus = React.forwardRef(({ ariaLabel, children, className, cssNamespace, glyph, indication, inverted, link, onClick, size, status, ...props }, ref) => {
    const objectStatusClasses = classnames(
        `${cssNamespace}-object-status`,
        {
            [`${cssNamespace}-object-status--indication-${indication}`]: !!indication,
            [`${cssNamespace}-object-status--inverted`]: inverted,
            [`${cssNamespace}-object-status--large`]: size === 'l',
            [`${cssNamespace}-object-status--${status}`]: !!status,
            [`${cssNamespace}-object-status--link`]: !!link || !!onClick
        },
        className
    );

    const handleKeyPress = e => {
        if (e.key === 'Enter' || e.key === ' ')
            onClick();
    };

    let StatusTag = 'span';
    let semanticProps = {};

    if (link?.length) {
        StatusTag = 'a';
        semanticProps.href = link;
    } else if ( typeof onClick === 'function') {
        StatusTag = 'span';
        semanticProps.onClick = onClick;
        semanticProps.onKeyPress = handleKeyPress;
        semanticProps.role = 'button';
        semanticProps.tabIndex = 0;
    }
    return (
        <StatusTag
            {...props}
            aria-label={ariaLabel}
            className={objectStatusClasses}
            {...semanticProps}
            ref={ref}>
            {glyph &&
                <Icon ariaHidden className={classnames(`${cssNamespace}-object-status__icon`)}
                    glyph={glyph} />}
            {children &&
                <span className={classnames(`${cssNamespace}-object-status__text`)}>
                    {children}
                </span>
            }
        </StatusTag>
    );
});


ObjectStatus.displayName = 'ObjectStatus';

ObjectStatus.propTypes = {
    /**
     * aria-label is required for a11y, when object status has only icon
    */

    ariaLabel: (props) => {
        if ((!props.children && !props.ariaLabel) || (!props.children && typeof props.ariaLabel !== 'string'))
            return new Error('ariaLabel is required if there is no text inside the ObjectStatus component and must be a string');
    },
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** The icon to include. See the icon page for the list of icons */
    glyph: PropTypes.string,
    /** Generic Indication Colors which will appear on the text */
    indication: CustomPropTypes.range(1, 8),
    /** Inverted Object Status(optional inverted visualization) determines whether the background color reflects
     * the set state instead of the control’s text. Use the inverted object status if the information is crucial
     * for the user’s actions and needs to stand out visually */
    inverted: PropTypes.bool,
    /** The link for the anchor tag */
    link: PropTypes.string,
    /** Size of the component:
    'l' */
    size: PropTypes.oneOf(OBJECT_STATUS_SIZES),
    /** Display the semantic status of an object: 'negative',
    'critical',
    'positive',
    'informative'*/
    status: PropTypes.oneOf(OBJECT_STATUS_TYPES),
    /**
     * Callback function; triggered when user clicks on the ObjectStatus.
     * This is not supported for links as they are supposed to navigate.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onClick: PropTypes.func
};

export default withStyles(ObjectStatus);
