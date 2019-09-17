import classnames from 'classnames';
import Link from '../Link/Link';
import PropTypes from 'prop-types';
import React from 'react';

const MenuItem = ({ url, isLink, addon, children, onclick, className, separator, addonProps, urlProps, ...props }) => {

    const renderLink = () => {
        if (url) {
            return (
                <Link {...urlProps}
                    className='fd-menu__item'
                    href={url}
                    onClick={onclick}>
                    {children}
                </Link>
            );
        } else if (children && React.isValidElement(children)) {
            const childrenClassnames = classnames(
                'fd-menu__item',
                children.props.className
            );

            return React.cloneElement(children, {
                'className': childrenClassnames,
                ...urlProps
            });
        } else if (children) {
            return (<a {...urlProps}
                className='fd-menu__item'
                onClick={onclick}>{children}</a>);
        }
    };

    return (
        <React.Fragment>
            <li {...props} className={className}>
                {addon &&
                    <div {...addonProps} className='fd-menu__addon-before'>{<span className={'sap-icon--' + addon} />}</div>
                }
                {renderLink()}
            </li>
            {separator && <hr />}
        </React.Fragment>
    );
};

MenuItem.displayName = 'Menu.Item';

MenuItem.propTypes = {
    addon: PropTypes.string,
    addonProps: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    isLink: PropTypes.bool,
    onclick: PropTypes.func,
    separator: PropTypes.bool,
    url: PropTypes.string,
    urlProps: PropTypes.object
};

MenuItem.propDescriptions = {
    addon: 'Name of the SAP icon to be applied as an add-on before.',
    addonProps: 'Additional props to be spread to the add-on section.',
    children: 'component - can be used to pass React Router <Link> or any other component which emits an <a>.',
    isLink: 'Set to **true** to style as a link.',
    separator: 'Set to true to add a horizontal line (separator).',
    url: 'Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute. Should use either `link` or `url`, but not both.',
    urlProps: 'Additional props to be spread to the Menu Item links (when using `url`).'
};

export default MenuItem;
