import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import { OBJECT_STATUS_SIZES, OBJECT_STATUS_TYPES } from '../utils/constants';
import 'fundamental-styles/dist/icon.css';
import 'fundamental-styles/dist/object-status.css';

/** *Object Status* is a short text that represents the semantic status of an object. It has a semantic color and an optional icon.
 * Typically, the object status is used in the dynamic page header and as a status attribute of a line item in a table. */

const ObjectStatus = React.forwardRef(({ children, className, glyph, indication, inverted, link, onClick, size, status, ...props }, ref) => {
    const objectStatusClasses = classnames(
        'fd-object-status',
        {
            [`sap-icon--${glyph}`]: !!glyph,
            [`fd-object-status--indication-${indication}`]: !!indication,
            'fd-object-status--inverted': inverted,
            'fd-object-status--large': size === 'l',
            [`fd-object-status--${status}`]: !!status,
            ['fd-object-status--link']: !!link || !!onClick
        },
        className
    );
    const StatusTag = typeof link !== 'undefined' ? 'a' : 'span';

    return (
        <StatusTag
            {...props}
            className={objectStatusClasses}
            href={link}
            onClick={onClick}
            ref={ref}>
            {children}
        </StatusTag>
    );
});


ObjectStatus.displayName = 'ObjectStatus';

ObjectStatus.propTypes = {

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
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func
};

export default ObjectStatus;

