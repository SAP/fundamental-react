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
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    selected: PropTypes.bool
};

