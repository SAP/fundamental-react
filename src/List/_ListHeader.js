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
        <label {...props} className={ListItemClasses}>
            {children}
        </label>

    );
};

ListHeader.displayName = 'List.Header';

ListHeader.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default ListHeader;
