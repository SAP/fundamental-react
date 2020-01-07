import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const MenuItem = ({ addonBefore, url, isLink, addon, children, onclick, className, addonProps, urlProps, ...props }) => {

    const addonClassnames = classnames(
        'fd-menu__addon-before',
        {
            [`sap-icon--${addon}`]: !!addon
        }
    );

    const renderLink = () => {
        if (url) {
            return (<a {...urlProps}
                className='fd-menu__item'
                href={url}
                onClick={onclick}>
                {addonBefore && <span {...addonProps} className={addonClassnames} />}
                {children}
            </a>);
        } else if (children && React.isValidElement(children)) {
            const childrenClassnames = classnames(
                'fd-menu__item',
                children.props.className
            );

            const addonChild = addonBefore ? (<span {...addonProps} className={addonClassnames} />) : null;

            return (
                <React.Fragment>
                    {React.Children.toArray(children).map(child => {
                        return React.cloneElement(child, {
                            'className': childrenClassnames,
                            ...urlProps
                        },
                        [addonChild, ...child.props.children]);
                    })}
                </React.Fragment>
            );
        } else if (children) {
            return (<a {...urlProps}
                className='fd-menu__item'
                onClick={onclick}>
                {addonBefore && <span {...addonProps} className={addonClassnames} />}
                {children}
            </a>);
        }
    };

    return (
        <React.Fragment>
            <li {...props} className={className}>
                {renderLink()}
            </li>
        </React.Fragment>
    );
};

MenuItem.displayName = 'Menu.Item';

MenuItem.propTypes = {
    addon: PropTypes.string,
    addonBefore: PropTypes.string,
    addonProps: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    isLink: PropTypes.bool,
    onclick: PropTypes.func,
    url: PropTypes.string,
    urlProps: PropTypes.object
};

MenuItem.propDescriptions = {
    addon: 'Name of the SAP icon to be applied as an add-on before.',
    addonProps: 'Additional props to be spread to the add-on section.',
    children: 'component - can be used to pass React Router <Link> or any other component which emits an <a>.',
    isLink: 'Set to **true** to style as a link.',
    url: 'Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute. Should use either `link` or `url`, but not both.',
    urlProps: 'Additional props to be spread to the Menu Item links (when using `url`).'
};

export default MenuItem;
