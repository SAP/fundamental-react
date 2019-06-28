import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const BreadcrumbItem = ({ url, name, className, children, ...props }) => {
    const renderLink = () => {
        if (!children && url) {
            return (
                <a className='fd-breadcrumb__link' href={url}>{name}</a>
            );
        } else if (children) {
            return React.cloneElement(children, {
                'className': 'fd-breadcrumb__link'
            });
        }
    };

    const breadcrumbItemClasses = classnames(
        'fd-breadcrumb__item',
        className
    );

    return (
        <li {...props} className={breadcrumbItemClasses}>
            {renderLink()}
        </li>
    );
};

BreadcrumbItem.displayName = 'Breadcrumb.Item';

BreadcrumbItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string
};

BreadcrumbItem.propDescriptions = {
    name: 'Text for the internal anchor tag.',
    url: 'An anchor tag will be generated and set to the url prop. Name or child text must be provided.'
};

export default BreadcrumbItem;
