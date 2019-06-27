import classnames from 'classnames';
import { LABEL_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ type, children, className, ...props }) => {
    const labelClasses = classnames(
        'fd-label',
        {
            [`fd-label--${type}`]: !!type
        },
        className
    );

    return <span {...props} className={labelClasses}>{children}</span>;
};
Label.displayName = 'Label';

Label.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(LABEL_TYPES)
};

export default Label;
