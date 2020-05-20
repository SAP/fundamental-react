import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListItem = ({
    action,
    buttonProps,
    className,
    children,
    hasByline,
    onClick,
    navigation,
    partialNavigation,
    selected,
    url,
    ...props
}) => {

    const handleClick = (e) => {
        onClick(e);
    };

    const isLink = navigation || (partialNavigation && url);

    const ListItemClasses = classnames(
        'fd-list__item',
        {
            'fd-list__item--link': isLink,
            'fd-list__item--action': action
        },
        className
    );

    let content;

    if (hasByline) {
        content = (
            <div className='fd-list__content'>
                {children}
            </div>
        );
    } else if (isLink) {
        const linkClassNames = classnames(
            'fd-list__link',
            {
                'fd-list__link--navigation-indicator': partialNavigation,
                'is-selected': isLink && selected
            }
        );

        content = (
            <a
                className={linkClassNames}
                href={url}
                tabIndex='0'>
                {children}
            </a>
        );
    } else if (action) {
        content = (
            <button {...buttonProps}
                className='fd-list__title'
                onClick={handleClick}>
                {children}
            </button>
        );
    } else {
        content = children;
    }

    return (
        <li
            {...props}
            className={ListItemClasses}
            tabIndex={isLink ? '-1' : '0'}>
            {content}
        </li>

    );
};

ListItem.displayName = 'List.Item';

ListItem.propTypes = {
    /** Set to true if list item is a button that will trigger an action */
    action: PropTypes.bool,
    /** Props to pass to the action button */
    buttonProps: PropTypes.object,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    hasByline: PropTypes.bool,
    /** Internal use only */
    navigation: PropTypes.bool,
    /** Interal use only */
    partialNavigation: PropTypes.bool,
    /** Set to **true** if list item is currently selected (only supported for links) */
    selected: PropTypes.bool,
    /** URL to navigate to if list item is a link */
    url: PropTypes.string,
    /** Callback function when user clicks on the component (only supported if action is true) */
    onClick: PropTypes.func
};

ListItem.defaultProps = {
    onClick: () => {},
    selected: false
};

export default ListItem;
