import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const LayoutPanelFooter = props => {
    const { children, className, ...rest } = props;

    const panelFooterClasses = classnames(
        'fd-layout-panel__footer',
        className
    );

    return <div {...rest} className={panelFooterClasses}>{children}</div>;
};

LayoutPanelFooter.displayName = 'LayoutPanel.Footer';

LayoutPanelFooter.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default LayoutPanelFooter;
