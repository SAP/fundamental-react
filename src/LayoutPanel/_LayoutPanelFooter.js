import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/layout-panel.css';

const classnames = classnamesBind.bind(styles);

const LayoutPanelFooter = props => {
    const { children, className, cssNamespace, ...rest } = props;

    const panelFooterClasses = classnames(
        `${cssNamespace}-layout-panel__footer`,
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

export default withStyles(LayoutPanelFooter);
