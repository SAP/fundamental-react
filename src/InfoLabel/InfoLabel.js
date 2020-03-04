import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { listOfIcons } from '../utils/listOfIcons';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

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
    children: PropTypes.node,
    className: PropTypes.string,
    color: CustomPropTypes.range(1, 10),
    disableStyles: PropTypes.bool,
    glyph: PropTypes.oneOf(listOfIcons),
    numeric: PropTypes.bool
};

InfoLabel.propDescriptions = {
    color: 'In addition the the default grey, there are additional Semantic color options.',
    numeric: 'Set to **true** if using the label for only a numeric value.'
};

export default InfoLabel;
