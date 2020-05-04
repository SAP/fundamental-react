import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const PanelActions = props => {
    const { children, className, ...rest } = props;

    const panelActionsClasses = classnames(
        'fd-panel__actions',
        className
    );

    return <div {...rest} className={panelActionsClasses}>{children}</div>;
};

PanelActions.displayName = 'Panel.Actions';

PanelActions.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default PanelActions;
