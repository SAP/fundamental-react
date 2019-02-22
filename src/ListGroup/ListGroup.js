import classnames from 'classnames';
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

export default ListGroup;
