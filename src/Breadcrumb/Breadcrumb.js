import BreadcrumbItem from './_BreadcrumbItem';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** The **Breadcrumb** allows users to see the current page and navigation path to that page.
 * Users can navigate to previous levels in the path. When clicking on the current page,
 * a dropdown allows users to access other pages at that same level. */

const Breadcrumb = React.forwardRef(({ children, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/breadcrumb.css');
        }
    }, []);

    return (<ul {...props}
        className='fd-breadcrumb'
        ref={ref}>{children}</ul>);
});

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.propTypes = {
    /** List item (`Breadcrumb.Item`) nodes or React Router Link components */
    children: PropTypes.node,
    /** Internal use only */
    disableStyles: PropTypes.bool
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
