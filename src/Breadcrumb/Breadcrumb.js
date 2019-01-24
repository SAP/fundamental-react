import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export const Breadcrumb = ({ children, ...props }) => {
    return <ul {...props} className='fd-breadcrumb'>{children}</ul>;
};

Breadcrumb.propTypes = {
    children: PropTypes.node
};

Breadcrumb.propDescriptions = {
    children: 'List item (`BreadcrumbItem`) nodes.'
};

export const BreadcrumbItem = ({ url, link, name, className, ...props }) => {
    const breadcrumbItemClasses = classnames(
        'fd-breadcrumb__item',
        className
    );

    return (
        <BrowserRouter>
            <li {...props} className={breadcrumbItemClasses}>
                {link && <Link className='fd-breadcrumb__link' to={{ pathname: link }}>{name}</Link>}
                {url && <a className='fd-breadcrumb__link' href={url}>{name}</a>}
            </li>
        </BrowserRouter>
    );
};

BreadcrumbItem.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    url: PropTypes.string
};

BreadcrumbItem.propDescriptions = {
    name: 'Localized display text of the link (for either `link` or `url`).',
    link: 'Enables use of react-router `Link` component. Path name to be applied to Link\'s `to` prop. Should use either `link` or `url`, but not both.',
    url: 'Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute. Should use either `link` or `url`, but not both.'
};
