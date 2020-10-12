import classnamesBind from 'classnames/bind';
import { ICON_SIZES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/icon.css';

const classnames = classnamesBind.bind(styles);

/** Icons are used throughout the UI to save space, allow for visual clarity
and focus, and for fun. Icons can be used adaptively if desired, but at
this point they are used more as visual elements within other
components. */
const Icon = React.forwardRef(({ ariaHidden, ariaLabel, glyph, size, className, cssNamespace, ...props }, ref) => {

    const iconClasses = classnames(
        {
            [`sap-icon--${glyph}`]: !!glyph
        },
        className
    );

    let style;
    if (size) {
        style = { fontSize: ICON_SIZES[size] };
    }

    return (
        <i
            {...props}
            aria-hidden={ariaHidden}
            aria-label={ariaLabel}
            className={iconClasses}
            ref={ref}
            role='img'
            style={style} />
    );
});

Icon.displayName = 'Icon';

Icon.propTypes = {
    /** The icon to include. See the icon page for the list of icons */
    glyph: PropTypes.string.isRequired,
    /** The value for the `aria-hidden` attribute. Set to `true` when there is already visible text explaining the icon, or the icon is purely for decoration. */
    ariaHidden: PropTypes.bool,
    /** Text to describe the icon. The value is placed in the `aria-label` attribute. */

    ariaLabel: (props) => {
        if (
            (!props.ariaHidden && !props.ariaLabel) ||
            (!props.ariaHidden && typeof props.ariaLabel !== 'string')
        ) {
            return new Error('ariaLabel is required if ariaHidden is false and must be a string');
        }
    },
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Size of the component: 's', 'm', 'l', 'xl' */
    size: PropTypes.oneOf(Object.keys(ICON_SIZES))
};

export default withStyles(Icon);
