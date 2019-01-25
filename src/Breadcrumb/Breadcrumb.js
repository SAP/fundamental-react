import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Breadcrumb = ({ children, ...props }) => {
    return <ul {...props} className='fd-breadcrumb'>{children}</ul>;
};

Breadcrumb.propTypes = {
    children: PropTypes.node
};

export const BreadcrumbItem = ({ url, link, name, className, children, ...props }) => {
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
        <li className={breadcrumbItemClasses} {...props}>
            {renderLink()}
        </li>
    );
};

BreadcrumbItem.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string
};
