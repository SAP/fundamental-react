import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListTitleSecondary = ({
    className,
    children,
    ...props
}) => {
    const listTitleSecondaryClasses = classnames(
        'fd-list__secondary',
        className
    );

    return (
        <span {...props} className={listTitleSecondaryClasses}>
            {children}
        </span>

    );
};

ListTitleSecondary.displayName = 'List.TitleSecondary';

ListTitleSecondary.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default ListTitleSecondary;
