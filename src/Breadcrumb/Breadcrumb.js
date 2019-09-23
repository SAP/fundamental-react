import BreadcrumbItem from './_BreadcrumbItem';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/StyleProvider';

const Breadcrumb = ({ children, customStyles, disableStyles, ...props }) => {
    return <ul {...props} className='fd-breadcrumb'>{children}</ul>;
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.propTypes = {
    children: PropTypes.node,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

Breadcrumb.propDescriptions = {
    children: 'List item (`BreadcrumbItem`) nodes.'
};

Breadcrumb.Item = BreadcrumbItem;

export default withStyles(Breadcrumb);
