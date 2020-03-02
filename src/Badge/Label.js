import classnames from 'classnames';
import { LABEL_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Label = React.forwardRef(({ type, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/label.css');
        }
    }, []);

    const labelClasses = classnames(
        'fd-label',
        {
            [`fd-label--${type}`]: !!type
        },
        className
    );

    return (<span {...props} className={labelClasses}
        ref={ref}>{children}</span>);
});
Label.displayName = 'Label';

Label.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    type: PropTypes.oneOf(LABEL_TYPES)
};

export default Label;
