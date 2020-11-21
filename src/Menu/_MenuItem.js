import classnamesBind from 'classnames/bind';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import iconStyles from 'fundamental-styles/dist/icon.css';
import menuItemStyles from 'fundamental-styles/dist/menu.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...menuItemStyles
});

const MenuItem = ({
    addonAfter,
    addonBefore,
    url,
    isLink,
    children,
    onClick,
    className,
    cssNamespace,
    addonProps,
    urlProps,
    separator,
    active,
    disabled,
    selected,
    ...props
}) => {

    const linkClassNames = classnames(
        `${cssNamespace}-menu__link`,
        {
            'is-active': active,
            'is-selected': selected,
            'is-disabled': disabled
        }
    );

    const addonBeforeClassname = classnames(`${cssNamespace}-menu__addon-before`);
    const addonAfterClassname = classnames(`${cssNamespace}-menu__addon-after`);

    const renderLink = () => {
        if (url) {
            return (<a {...urlProps}
                className={linkClassNames}
                href={url}
                onClick={onClick}
                role='menuitem'>
                {addonBefore &&
                    <span className={addonBeforeClassname}>
                        <Icon {...addonProps} ariaHidden
                            glyph={addonBefore} />
                    </span>
                }
                <span className={classnames(`${cssNamespace}-menu__title`)}>{children}</span>
                {addonAfter &&
                    <span className={addonAfterClassname}>
                        <Icon {...addonProps} ariaHidden
                            glyph={addonAfter} />
                    </span>
                }
            </a>);
        } else if (children && React.isValidElement(children)) {
            const childrenClassnames = classnames(
                linkClassNames,
                children.props.className
            );

            return (
                <>
                    {addonBefore &&
                        <span {...urlProps} className={addonBeforeClassname}>
                            <Icon {...addonProps} ariaHidden
                                glyph={addonBefore} />
                        </span>
                    }
                    <span className={classnames(`${cssNamespace}-menu__title`)}>
                        {React.Children.map(children, child => {
                            return React.cloneElement(child, {
                                className: childrenClassnames,
                                ...urlProps
                            });
                        })}
                    </span>
                    {addonAfter &&
                        <span {...urlProps} className={addonAfterClassname}>
                            <Icon {...addonProps} ariaHidden
                                glyph={addonAfter} />
                        </span>
                    }
                </>
            );
        } else if (children) {
            return (<a {...urlProps}
                className={linkClassNames}
                onClick={onClick}
                role='menuitem'>
                {addonBefore &&
                    <span className={addonBeforeClassname}>
                        <Icon {...addonProps} ariaHidden
                            glyph={addonBefore} />
                    </span>
                }
                <span className={classnames(`${cssNamespace}-menu__title`)}>{children}</span>
                {addonAfter &&
                    <span className={addonAfterClassname}>
                        <Icon {...addonProps} ariaHidden
                            glyph={addonAfter} />
                    </span>
                }
            </a>);
        }
    };

    const listClassNames = classnames(
        `${cssNamespace}-menu__item`,
        className
    );

    return (
        <>
            <li
                {...props}
                className={listClassNames}
                role='presentation'>
                {renderLink()}
            </li>
            {separator && <span className={classnames(`${cssNamespace}-menu__separator`)} />}
        </>
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
    /** Set to **true** to apply selected style */
    selected: PropTypes.bool,
    /** Set to **true** to place a separator after list item */
    separator: PropTypes.bool,
    /** Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute.
     * Should use either `link` or `url`, but not both. */
    url: PropTypes.string,
    /** Additional props to be spread to the Menu Item links (when using `url`). */
    urlProps: PropTypes.object,
    /**
     * Callback function; triggered when the MenuItem (i.e. the `<a>` element) is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onClick: PropTypes.func
};

export default withStyles(MenuItem);
