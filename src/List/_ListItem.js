import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ListItem = ({
    className,
    children,
    selected,
    ...props
}) => {

    let { isSelected, setIsSelected } = useState(selected);

    const ListItemClasses = classnames(
        'fd-list__item',
        className
    );

    return (
        <li
            {...props}
            aria-selected={isSelected}
            className={ListItemClasses}
            onClick={() => setIsSelected(!isSelected)}
            role='option'
            tabIndex='0'>
            {children}
        </li>

    );
};

ListItem.displayName = 'List.Item';

ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    selected: PropTypes.bool
};

ListItem.propDescriptions = {
    selected: 'Set to **true** to set state of the list item to "selected".'
};

export default ListItem;
