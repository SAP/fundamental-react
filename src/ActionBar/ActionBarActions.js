import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ActionBarActions = ({ children, className, ...props }) => {
    const actionBarActionsClasses = classnames(
        'fd-action-bar__actions',
        className
    );

    return <div {...props} className={actionBarActionsClasses}>{children}</div>;
};

ActionBarActions.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default ActionBarActions;
