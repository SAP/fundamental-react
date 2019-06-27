import ActionBarActions from './_ActionBarActions';
import ActionBarBack from './_ActionBarBack';
import ActionBarHeader from './_ActionBarHeader';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ActionBar = ({ mobile, width, children, className, ...props }) => {
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
    children: PropTypes.node,
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

ActionBar.Actions = ActionBarActions;
ActionBar.Back = ActionBarBack;
ActionBar.Header = ActionBarHeader;

export default ActionBar;
