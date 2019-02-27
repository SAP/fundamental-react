import BreadcrumbItem from './_BreadcrumbItem';
import PropTypes from 'prop-types';
import React from 'react';

const Breadcrumb = ({ children, ...props }) => {
    return <ul {...props} className='fd-breadcrumb'>{children}</ul>;
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.propTypes = {
    children: PropTypes.node
};

Breadcrumb.propDescriptions = {
    children: 'List item (`BreadcrumbItem`) nodes.'
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
