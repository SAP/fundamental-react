import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line sort-imports
import styles from 'fundamental-styles/dist/layout-panel.css';

const classnames = classnamesBind.bind(styles);

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
