import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListTitle = ({
    className,
    children,
    ...props
}) => {
    const listTitleClasses = classnames(
        'fd-list__title',
        className
    );

    return (
        <span {...props} className={listTitleClasses}>
            {children}
        </span>

    );
};

ListTitle.displayName = 'List.Title';

ListTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default ListTitle;
