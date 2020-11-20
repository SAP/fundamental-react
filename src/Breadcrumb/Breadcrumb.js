import BreadcrumbItem from './_BreadcrumbItem';
import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/breadcrumb.css';

const classnames = classnamesBind.bind(styles);

/** A **Breadcrumb** allows users to see the current page and navigation path to that page.
 * Users can navigate to previous levels in the path. When clicking on the current page,
 * a dropdown allows users to access other pages at that same level. */

const Breadcrumb = React.forwardRef(({ children, cssNamespace, ...props }, ref) => (
    <ul {...props}
        className={classnames(`${cssNamespace}-breadcrumb`)}
        ref={ref}
        role='menu'>{children}</ul>)
);

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.propTypes = {
    /** List item (`Breadcrumb.Item`) nodes or React Router Link components */
    children: PropTypes.node
};

Breadcrumb.Item = BreadcrumbItem;

export default withStyles(Breadcrumb);
