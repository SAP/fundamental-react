import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ListItem = ({
    className,
    children,
    hasByline,
    onClick,
    selected,
    ...props
}) => {

    let [isSelected, setIsSelected] = useState(selected);

    const handleClick = (e) => {
        setIsSelected(!isSelected);
        onClick(e);
    };

    const ListItemClasses = classnames(
        'fd-list__item',
        {
            'is-selected': isSelected
        },
        className
    );

    const content = hasByline ? (
        <div className='fd-list__content'>
            {children}
        </div>
    ) : children;

    return (
        <li
            {...props}
            aria-selected={isSelected}
            className={ListItemClasses}
            onClick={handleClick}
            role='option'
            tabIndex='0'>
            {content}
        </li>

    );
};

ListItem.displayName = 'List.Item';

ListItem.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    hasByline: PropTypes.bool,
    /** Set to **true** to set state of the list item to "selected". */
    selected: PropTypes.bool,
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func
};

ListItem.defaultProps = {
    onClick: () => {},
    selected: false
};

export default ListItem;
