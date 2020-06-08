import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const LayoutPanelActions = props => {
    const { children, className, ...rest } = props;

    const panelActionsClasses = classnames(
        'fd-layout-panel__actions',
        className
    );

    return <div {...rest} className={panelActionsClasses}>{children}</div>;
};

LayoutPanelActions.displayName = 'LayoutPanel.Actions';

LayoutPanelActions.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default LayoutPanelActions;
