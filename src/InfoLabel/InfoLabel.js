import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { listOfIcons } from '../utils/listOfIcons';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** An **InfoLabel** is a small non-interactive numeric or text-based control.
 * Its primary use is to add user-defined characteristic to an object. */
const InfoLabel = React.forwardRef(({
    children,
    className,
    color,
    disableStyles,
    glyph,
    numeric,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/info-label.css');
        }
    }, []);

    const labelClasses = classnames(
        'fd-info-label',
        {
            'fd-info-label--numeric': numeric,
            [`fd-info-label--accent-color-${color}`]: color,
            'fd-info-label--icon': glyph,
            [`sap-icon--${glyph}`]: glyph
        },
        className
    );

    return (<span
        {...props}
        className={labelClasses}
        ref={ref}>{children}</span>);
});
InfoLabel.displayName = 'InfoLabel';

InfoLabel.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** In addition the the default grey, there are additional Semantic color options */
    color: CustomPropTypes.range(1, 10),
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** See Icon component for list of icon options */
    glyph: PropTypes.oneOf(listOfIcons),
    /** Set to **true** if using the label for only a numeric value */
    numeric: PropTypes.bool
};

export default InfoLabel;
