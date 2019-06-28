import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const MenuItem = ({ url, isLink, separator, addon, children, onclick, className, addonProps, urlProps, ...props }) => {
    const menuItemLinkClasses = classnames(
        'fd-menu__item',
        {
            'fd-menu__link': isLink
        }
    );

    const renderLink = () => {
        if (url) {
            return (
                <a {...urlProps}
                    className={menuItemLinkClasses}
                    href={url}
                    onClick={onclick}>
                    {children}
                </a>
            );
        } else if (children && React.isValidElement(children)) {
            const childrenClassnames = classnames(
                menuItemLinkClasses,
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
    separator: 'Set to **true** to add a horizontal line (separator).',
    url: 'Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute. Should use either `link` or `url`, but not both.',
    urlProps: 'Additional props to be spread to the Menu Item links (when using `url`).'
};

export default MenuItem;
