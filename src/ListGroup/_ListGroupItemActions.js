import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListGroupItemActions = ({ children, className, ...props }) => {
    const listGroupItemActionsClasses = classnames(
        'fd-list-group__action',
        className
    );

    return (
        <span {...props} className={listGroupItemActionsClasses}>
            {children}
        </span>
    );
};

ListGroupItemActions.displayName = 'ListGroup.ItemActions';

ListGroupItemActions.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default ListGroupItemActions;
