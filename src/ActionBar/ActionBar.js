import ActionBarActions from './_ActionBarActions';
import ActionBarBack from './_ActionBarBack';
import ActionBarHeader from './_ActionBarHeader';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ActionBar = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {
    const actionBarClasses = classnames(
        'fd-action-bar',
        className
    );

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/button.css');
        }
    }, []);

    return (
        <div {...props}
            className={actionBarClasses}
            ref={ref}>
            {children}
        </div>
    );
});

ActionBar.displayName = 'ActionBar';

ActionBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool
};

ActionBar.Actions = ActionBarActions;
ActionBar.Back = ActionBarBack;
ActionBar.Header = ActionBarHeader;

export { ActionBar as __ActionBar };

export default ActionBar;
