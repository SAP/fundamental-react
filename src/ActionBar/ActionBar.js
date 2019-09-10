import 'fundamental-styles/dist/action-bar.css';
import ActionBarActions from './_ActionBarActions';
import ActionBarBack from './_ActionBarBack';
import ActionBarHeader from './_ActionBarHeader';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ActionBar = ({ children, className, ...props }) => {
    const actionBarClasses = classnames(
        'fd-action-bar',
        className
    );

    return (
        <div {...props} className={actionBarClasses}>{children}</div>
    );
};

ActionBar.displayName = 'ActionBar';

ActionBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

ActionBar.Actions = ActionBarActions;
ActionBar.Back = ActionBarBack;
ActionBar.Header = ActionBarHeader;

export default ActionBar;
