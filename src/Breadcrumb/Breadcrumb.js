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

BreadcrumbItem.propDescriptions = {
    name: 'Localized display text of the link (for either `link` or `url`).',
    link: 'Enables use of react-router `Link` component. Path name to be applied to Link\'s `to` prop. Should use either `link` or `url`, but not both.',
    url: 'Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute. Should use either `link` or `url`, but not both.'
};
