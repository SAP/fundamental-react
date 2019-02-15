import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const TabContent = (props) => {
    const { children, id, selected, className, ...tabContentProps } = props;

    // css classes for tab panels
    const tabPanelClasses = classnames(
        'fd-tabs__panel',
        className
    );

    return (
        <div
            {...tabContentProps}
            aria-expanded={selected}
            className={tabPanelClasses}
            id={id}
            role='tabpanel' >
            {children}
        </div >
    );
};
TabContent.displayName = 'TabContent';

TabContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    selected: PropTypes.bool
};

TabContent.propDescriptions = {
    children: 'Content to render when tab is selected.'
};
