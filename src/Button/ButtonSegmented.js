import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/segmented-button.css';

const classnames = classnamesBind.bind(styles);

/** Group a series of buttons together on a single line with the segmented button.
 * Only one of the options can be active at a time, the others remain or become inactive.
 * The option can be activated by clicking on it.
 * This type of button is comparable to a radio button group. */
const ButtonSegmented = React.forwardRef(({ children, cssNamespace, ...props }, ref) => (
    <div
        {...props}
        aria-label='Group label'
        className={classnames(`${cssNamespace}-segmented-button`)}
        ref={ref}
        role='group'>
        {children}
    </div>)
);

ButtonSegmented.displayName = 'ButtonSegmented';

ButtonSegmented.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node
};

export default withStyles(ButtonSegmented);
