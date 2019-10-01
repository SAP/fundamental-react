import classnames from 'classnames';
import { LABEL_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const Label = React.forwardRef(({ type, children, className, disableStyles, ...props }, ref) => {
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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    type: PropTypes.oneOf(LABEL_TYPES)
};

export { Label as __Label };

export default withStyles(Label, { cssFile: 'label', font: true });
