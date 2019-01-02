import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';

export const Breadcrumb = props => {
    const { children } = props;
    return <ul className='fd-breadcrumb'>{children}</ul>;
};

export const BreadcrumbItem = ({ url, link, name, className, ...props }) => {
    return (
        <BrowserRouter>
            <li className={`fd-breadcrumb__item${className ? ' ' + className : ''}`} {...props}>
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
