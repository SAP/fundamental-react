import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Breadcrumb = ({ children, ...props }) => {
    return <ul {...props} className='fd-breadcrumb'>{children}</ul>;
};

Breadcrumb.propTypes = {
    children: PropTypes.node
};

Breadcrumb.propDescriptions = {
    children: 'List item (`BreadcrumbItem`) nodes.'
};

export const BreadcrumbItem = ({ url, name, className, children, ...props }) => {
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

BreadcrumbItem.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
};

BreadcrumbItem.propDescriptions = {
    name: 'Text for the internal anchor tag.',
    url: 'An anchor tag will be generated and set to the url prop. Name or child text must be provided.'
};
