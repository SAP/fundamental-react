import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';

export const Breadcrumb = props => {
    const { children } = props;
    return <ul className='fd-breadcrumb'>{children}</ul>;
};

export const BreadcrumbItem = props => {
    const { url, link, name } = props;
    return (
        <React.Fragment>
            {link ? (
                <BrowserRouter>
                    <li className='fd-breadcrumb__item'>
                        <Link className='fd-breadcrumb__link' to={{ pathname: link }}>
                            {name}
                        </Link>
                    </li>
                </BrowserRouter>
            ) : null}

            {url ? (
                <BrowserRouter>
                    <li className='fd-breadcrumb__item'>
                        <a className='fd-breadcrumb__link' href={url}>
                            {name}
                        </a>
                    </li>
                </BrowserRouter>
            ) : null}
        </React.Fragment>
    );
};

BreadcrumbItem.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    url: PropTypes.string
};
