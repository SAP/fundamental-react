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

    const renderLink = () => {
        if (url) {
            return (<a {...urlProps}
                className='fd-menu__link'
                href={url}
                onClick={onclick}>
                {addonBefore && <span {...addonProps} className={addonBeforeClassnames} />}
                <span className='fd-menu__title'>{children}</span>
                {addonAfter && <span {...addonProps} className={addonAfterClassnames} />}
            </a>);
        } else if (children && React.isValidElement(children)) {
            const childrenClassnames = classnames(
                'fd-menu__link',
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
                className='fd-menu__link'
                onClick={onclick}>
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
            <li {...props} className={listClassNames}>
                {renderLink()}
            </li>
            {separator && <span className='fd-menu__separator' />}
        </React.Fragment>
    );
};

MenuItem.displayName = 'Menu.Item';

MenuItem.propTypes = {
    addonAfter: PropTypes.string,
    addonBefore: PropTypes.string,
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
    addonBefore: 'Name of the SAP icon to be applied as an add-on before the text.',
    addonAfter: 'Name of the SAP icon to be applied as an add-on after the text.',
    addonProps: 'Additional props to be spread to the add-ons.',
    children: 'component - can be used to pass React Router <Link> or any other component which emits an <a>.',
    isLink: 'Set to **true** to style as a link.',
    separator: 'Set to true to place a separator after list item.',
    url: 'Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute. Should use either `link` or `url`, but not both.',
    urlProps: 'Additional props to be spread to the Menu Item links (when using `url`).'
};

export default MenuItem;
