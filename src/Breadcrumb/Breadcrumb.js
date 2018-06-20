import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom'

export const Breadcrumb = (props) => {
    const { children } = props;
    return (
        <ul className="fd-breadcrumb">
            {children}
        </ul>
    );
}

export const BreadcrumbItem = (props) => {
    const { url, name } = props;
    return (
        <BrowserRouter>
            <li className="fd-breadcrumb__item">
                <Link className="fd-breadcrumb__link" to={{ pathname: url }} >{name}</Link>
            </li>
        </BrowserRouter>
    );
}

BreadcrumbItem.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}