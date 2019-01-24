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
            console.warn('It is suggested to use an anchor link or other link to provide a uniform API'); //TODO: We block these via lint and need a warning util
            return (
                <a className='fd-breadcrumb__link' href={url}>{name}</a>
            );
        } else if (children) {
            return React.cloneElement(children, {
                'className': 'fd-breadcrumb__link'
            });
        }
    };

    return (
        <li className={`fd-breadcrumb__item${className ? ' ' + className : ''}`} {...props}>
            {renderLink()}
        </li>
    );
};

BreadcrumbItem.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string
};
