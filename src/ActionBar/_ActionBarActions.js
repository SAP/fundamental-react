import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ActionBarActions = React.forwardRef(({ children, className, ...props }, ref) => {
    const actionBarActionsClasses = classnames(
        'fd-action-bar__actions',
        className
    );

    return (<div {...props} className={actionBarActionsClasses}
        ref={ref}>{children}</div>);
});

ActionBarActions.displayName = 'ActionBar.Actions';

ActionBarActions.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default ActionBarActions;
