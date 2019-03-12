import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListGroupItem = ({ children, className, ...props }) => {
    const listGroupItemClasses = classnames(
        'fd-list-group__item',
        className
    );

    return (
        <li {...props} className={listGroupItemClasses}>
            {children}
        </li>

    );
};

ListGroupItem.displayName = 'ListGroup.Item';

ListGroupItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default ListGroupItem;
