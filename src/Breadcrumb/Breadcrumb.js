import BreadcrumbItem from './_BreadcrumbItem';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

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
    children: PropTypes.node,
    disableStyles: PropTypes.bool
};

Breadcrumb.propDescriptions = {
    children: 'List item (`BreadcrumbItem`) nodes.'
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
