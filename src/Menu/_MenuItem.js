import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const MenuItem = ({
    addonAfter,
    addonBefore,
    url,
    isLink,
    children,
    onclick,
    className,
    addonProps,
    urlProps,
    separator,
    active,
    disabled,
    selected,
    ...props
}) => {

    const addonBeforeClassnames = classnames(
        'fd-menu__addon-before',
        {
            [`sap-icon--${addonBefore}`]: !!addonBefore
        }
    );

    const addonAfterClassnames = classnames(
        'fd-menu__addon-after',
        {
            [`sap-icon--${addonAfter}`]: !!addonAfter
        }
    );

    const linkClassNames = classnames(
        'fd-menu__link',
        {
            'is-active': active,
            'is-selected': selected,
            'is-disabled': disabled
        }
    );

    const renderLink = () => {
        if (url) {
            return (<a {...urlProps}
                className={linkClassNames}
                href={url}
                onClick={onclick}
                role='menuitem'>
                {addonBefore && <span {...addonProps} className={addonBeforeClassnames} />}
                <span className='fd-menu__title'>{children}</span>
                {addonAfter && <span {...addonProps} className={addonAfterClassnames} />}
            </a>);
        } else if (children && React.isValidElement(children)) {
            const childrenClassnames = classnames(
                linkClassNames,
                children.props.className
            );

            const addonChildBefore = addonBefore ? (<span {...addonProps} className={addonBeforeClassnames} />) : null;
            const addonChildAfter = addonAfter ? (<span {...addonProps} className={addonAfterClassnames} />) : null;

            return (
                <React.Fragment>
                    {React.Children.toArray(children).map(child => {
                        return React.cloneElement(child, {
                            'className': childrenClassnames,
                            ...urlProps
                        },
                        [addonChildBefore, (<span className='fd-menu__title'>{child.props.children}</span>), addonChildAfter]);
                    })}
                </React.Fragment>
            );
        } else if (children) {
            return (<a {...urlProps}
                className={linkClassNames}
                onClick={onclick}
                role='menuitem'>
                {addonBefore && <span {...addonProps} className={addonBeforeClassnames} />}
                <span className='fd-menu__title'>{children}</span>
                {addonAfter && <span {...addonProps} className={addonAfterClassnames} />}
            </a>);
        }
    };

    const listClassNames = classnames(
        'fd-menu__item',
        className
    );

    return (
        <React.Fragment>
            <li
                {...props}
                className={listClassNames}
                role='presentation'>
                {renderLink()}
            </li>
            {separator && <span className='fd-menu__separator' />}
        </React.Fragment>
    );
};

MenuItem.displayName = 'Menu.Item';

MenuItem.propTypes = {
    /** Set to **true** to apply active style */
    active: PropTypes.bool,
    /** Name of the SAP icon to be applied as an add-on before the text */
    addonAfter: PropTypes.string,
    /** Name of the SAP icon to be applied as an add-on after the text */
    addonBefore: PropTypes.string,
    /** Additional props to be spread to the add-ons */
    addonProps: PropTypes.object,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Set to **true** to style as a link */
    isLink: PropTypes.bool,
    /** Callback function when user clicks on the component*/
    onclick: PropTypes.func,
    /** Set to **true** to apply selected style */
    selected: PropTypes.bool,
    /** Set to **true** to place a separator after list item */
    separator: PropTypes.bool,
    /** Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute.
     * Should use either `link` or `url`, but not both. */
    url: PropTypes.string,
    /** Additional props to be spread to the Menu Item links (when using `url`). */
    urlProps: PropTypes.object
};

export default MenuItem;
