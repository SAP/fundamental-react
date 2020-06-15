import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const LayoutPanelBody = props => {
    const { children, className, ...rest } = props;

    const panelBodyClasses = classnames(
        'fd-layout-panel__body',
        className
    );

    return <div {...rest} className={panelBodyClasses}>{children}</div>;
};

LayoutPanelBody.displayName = 'LayoutPanel.Body';

LayoutPanelBody.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default LayoutPanelBody;
