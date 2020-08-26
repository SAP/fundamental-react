import classnames from 'classnames';
import ListSelection from './_ListSelection';
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
    titleClassName,
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

    let content, selectionProps;

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
                'is-selected': selected
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
        content = React.Children.map(children, child => {
            if (child?.type?.displayName === ListSelection.displayName) {
                selectionProps = {
                    'role': 'option',
                    'aria-selected': selected
                };
                return React.cloneElement(child, { selected });
            }
            return child;
        });
    }

    const disableListItemOnClick = isLink || action;

    return (
        <li
            tabIndex={isLink || action ? '-1' : '0'}
            {...props}
            {...selectionProps}
            className={ListItemClasses}
            onClick={disableListItemOnClick ? null : handleClick}>
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
    /** Set to **true** if list item is currently selected (only supported for links and List.Selection) */
    selected: PropTypes.bool,
    /** CSS class(es) to add to the title element */
    titleClassName: PropTypes.string,
    /** URL to navigate to if list item is a link */
    url: PropTypes.string,
    /** Callback function when user clicks on the component (not supported for links) */
    onClick: PropTypes.func
};

ListItem.defaultProps = {
    onClick: () => {},
    selected: false
};

export default ListItem;
