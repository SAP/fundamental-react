import ActionBarActions from './_ActionBarActions';
import ActionBarBack from './_ActionBarBack';
import ActionBarHeader from './_ActionBarHeader';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/StyleProvider';

const ActionBar = ({ children, className, customStyles, disableStyles, ...props }) => {
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
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

ActionBar.Actions = ActionBarActions;
ActionBar.Back = ActionBarBack;
ActionBar.Header = ActionBarHeader;

export default withStyles(ActionBar, { cssFile: 'action-bar', fonts: true });
