import classnames from 'classnames';
import ListGroupItem from './_ListGroupItem';
import ListGroupItemActions from './_ListGroupItemActions';
import ListGroupItemCheckbox from './_ListGroupItemCheckbox';
import PropTypes from 'prop-types';
import React from 'react';

const ListGroup = ({ children, className, ...props }) => {
    const listGroupClasses = classnames(
        'fd-list-group',
        className
    );

    return (
        <ul {...props} className={listGroupClasses}>
            {children}
        </ul>
    );
};

ListGroup.displayName = 'ListGroup';

ListGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

ListGroup.Item = ListGroupItem;
ListGroup.ItemActions = ListGroupItemActions;
ListGroup.ItemCheckbox = ListGroupItemCheckbox;

export default ListGroup;
