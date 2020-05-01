import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListHeader = ({
    className,
    children,
    ...props
}) => {
    const ListItemClasses = classnames(
        'fd-list__group-header',
        className
    );

    return (
        <li {...props} className={ListItemClasses}>
            {children}
        </li>

    );
};

ListHeader.displayName = 'List.Header';

ListHeader.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    className: PropTypes.string
};

export default ListHeader;
