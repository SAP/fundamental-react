import classnames from 'classnames';
import { ICON_SIZES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const Icon = React.forwardRef(({ glyph, size, className, disableStyles, ...props }, ref) => {
    const iconClasses = classnames(
        {
            [`sap-icon--${glyph}`]: !!glyph,
            [`sap-icon--${size}`]: !!size
        },
        className
    );

    return (
        <span
            {...props}
            className={iconClasses}
            ref={ref} />
    );
});

Icon.displayName = 'Icon';

Icon.propTypes = {
    glyph: PropTypes.string.isRequired,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    size: PropTypes.oneOf(ICON_SIZES)
};

Icon.propDescriptions = {
    size: 'Size of the icon. Options include **xs**, **s**, **compact**, and **l**. If no size is provided, default (normal) will be used.'
};

export { Icon as __Icon };

export default withStyles(Icon, { cssFile: 'icon' });
