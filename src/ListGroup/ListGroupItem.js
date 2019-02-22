import classnames from 'classnames';
import ListGroupItemActions from './_ListGroupItemActions';
import ListGroupItemCheckbox from './_ListGroupItemCheckbox';
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

ListGroupItem.displayName = 'ListGroupItem';

ListGroupItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

ListGroupItem.Actions = ListGroupItemActions;
ListGroupItem.Checkbox = ListGroupItemCheckbox;

export default ListGroupItem;
