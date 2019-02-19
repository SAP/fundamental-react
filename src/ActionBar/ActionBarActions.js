import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const ActionBar = ({ mobile, width, children, className, ...props }) => {
    const actionBarClasses = classnames(
        'fd-action-bar',
        className
    );

    return (
        <React.Fragment>
            {mobile ? (
                <div style={{ width }}>
                    <div {...props} className={actionBarClasses}>{children}</div>
                </div>
            ) : (
                <div {...props} className={actionBarClasses}>{children}</div>
            )}
        </React.Fragment>
    );
};
ActionBar.displayName = 'ActionBar';

ActionBar.propTypes = {
    className: PropTypes.string,
    mobile: PropTypes.bool,
    width: PropTypes.string
};

ActionBar.defaultProps = {
    width: '319px'
};

ActionBar.propDescriptions = {
    mobile: 'Set to **true** for mobile view of the Action Bar.',
    width: 'The width of the Action Bar in mobile view.'
};

export const ActionBarActions = ({ children, className, ...props }) => {
    const actionBarActionsClasses = classnames(
        'fd-action-bar__actions',
        className
    );

    return <div {...props} className={actionBarActionsClasses}>{children}</div>;
};
