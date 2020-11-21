import classnamesBind from 'classnames/bind';
import ListSelection from './_ListSelection';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import React, { useState } from 'react';
import styles from 'fundamental-styles/dist/list.css';

const classnames = classnamesBind.bind(styles);

const ListItem = ({
    action,
    buttonProps,
    className,
    children,
    cssNamespace,
    hasByline,
    onClick,
    navigation,
    partialNavigation,
    selected,
    url,
    ...props
}) => {
    const [selectedState, setSelectedState] = useState(selected || false);

    const handleClick = (e) => {
        onClick(e);
    };

    const isLink = navigation || (partialNavigation && url);

    const ListItemClasses = classnames(
        `${cssNamespace}-list__item`,
        {
            [`${cssNamespace}-list__item--link`]: isLink,
            [`${cssNamespace}-list__item--action`]: action
        },
        className
    );

    let content, selectionProps;

    if (hasByline) {
        content = (
            <div className={classnames(`${cssNamespace}-list__content`)}>
                {children}
            </div>
        );
    } else if (isLink) {
        const linkClassNames = classnames(
            `${cssNamespace}-list__link`,
            {
                [`${cssNamespace}-list__link--navigation-indicator`]: partialNavigation,
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
                className={classnames(`${cssNamespace}-list__title`)}
                onClick={handleClick}>
                {children}
            </button>
        );
    } else {
        content = React.Children.map(children, child => {
            if (child?.type?.displayName === ListSelection.displayName) {
                selectionProps = {
                    'role': 'option',
                    'aria-selected': selectedState
                };
                return React.cloneElement(child, {
                    selected: selected || selectedState,
                    onChange: (e, checked) => {
                        setSelectedState(checked);
                        child?.props?.onChange?.(e, checked);
                    }
                });
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
    /** Internal use only */
    partialNavigation: PropTypes.bool,
    /** Set to **true** if list item is currently selected (only supported for links and List.Selection) */
    selected: PropTypes.bool,
    /** URL to navigate to if list item is a link */
    url: PropTypes.string,
    /**
     * Callback function; triggered when user clicks on the list item i.e. `<li>`
     *
     *  (not supported for links as they are supposed to navigate).
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
     */
    onClick: PropTypes.func
};

ListItem.defaultProps = {
    onClick: () => {},
    selected: false
};

export default withStyles(ListItem);
