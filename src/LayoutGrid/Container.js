import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/layout-grid.css';

const classnames = classnamesBind.bind(styles);

/** **Container** can be used to arrange wrap the **Row** and **Column** components to create a responsive grid layout with appropriate padding.*/
const Container = React.forwardRef(({ noGap, children, className, cssNamespace, ...props }, ref) => {

    const containerClasses = classnames(
        `${cssNamespace}-container`,
        {
            [`${cssNamespace}-container--no-gap`]: noGap
        },
        className
    );

    return (
        <div
            {...props}
            className={containerClasses}
            ref={ref}>
            {children}
        </div>
    );
});

Container.displayName = 'Container';

Container.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to remove the margins between the panels */
    noGap: PropTypes.bool
};

export default withStyles(Container);
