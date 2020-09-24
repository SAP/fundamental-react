import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line sort-imports
import styles from 'fundamental-styles/dist/layout-panel.css';

const classnames = classnamesBind.bind(styles);

const LayoutPanelFilters = props => {
    const { children, className, ...rest } = props;

    const panelFiltersClasses = classnames(
        'fd-layout-panel__filters',
        className
    );

    return (
        <div {...rest} className={panelFiltersClasses}>
            {children}
        </div>
    );
};

LayoutPanelFilters.displayName = 'LayoutPanel.Filters';

LayoutPanelFilters.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default LayoutPanelFilters;
