import BreadcrumbItem from './_BreadcrumbItem';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const Breadcrumb = React.forwardRef(({ children, disableStyles, ...props }, ref) => {
    return (<ul {...props}
        className='fd-breadcrumb'
        ref={ref}>{children}</ul>);
});

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

export { Breadcrumb as __Breadcrumb };

export default withStyles(Breadcrumb, { cssFile: 'breadcrumb', font: true });
