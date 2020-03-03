import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListFooter = ({
    className,
    children,
    ...props
}) => {
    const ListItemClasses = classnames(
        'fd-list__footer',
        className
    );

    return (
        <li {...props} className={ListItemClasses}>
            {children}
        </li>

    );
};

ListFooter.displayName = 'List.Footer';

ListFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default ListFooter;
