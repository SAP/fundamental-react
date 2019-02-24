import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const TabContent = (props) => {
    const { children, selected, className, ...rest } = props;

    // css classes for tab panels
    const tabPanelClasses = classnames(
        'fd-tabs__panel',
        className
    );

    return (
        <div
            {...rest}
            aria-expanded={selected}
            className={tabPanelClasses}
            role='tabpanel' >
            {children}
        </div >
    );
};
TabContent.displayName = 'TabContent';

TabContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    selected: PropTypes.bool
};

TabContent.propDescriptions = {
    children: 'Content to render when tab is selected.'
};
