import classnames from 'classnames';
import LayoutPanelActions from './_LayoutPanelActions';
import LayoutPanelBody from './_LayoutPanelBody';
import LayoutPanelFilters from './_LayoutPanelFilters';
import LayoutPanelFooter from './_LayoutPanelFooter';
import LayoutPanelHead from './_LayoutPanelHead';
import LayoutPanelHeader from './_LayoutPanelHeader';
import PropTypes from 'prop-types';
import React from 'react';
import 'fundamental-styles/dist/layout-grid.css';
import 'fundamental-styles/dist/layout-panel.css';

/** A **LayoutPanel** is used to encapsulate part of the content, form elements, lists, collections, etc., on a page.
Place patterns and interactions within panels on your pages to achieve focus and separation for the tasks at-hand
with the information displayed inside the panel. */
const LayoutPanel = React.forwardRef(({ children, className, ...props }, ref) => {

    const panelClasses = classnames(
        'fd-layout-panel',
        className
    );

    return (<div {...props} className={panelClasses}
        ref={ref}>
        {children}
    </div>);
});

LayoutPanel.displayName = 'LayoutPanel';

LayoutPanel.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

LayoutPanel.Actions = LayoutPanelActions;
LayoutPanel.Body = LayoutPanelBody;
LayoutPanel.Filters = LayoutPanelFilters;
LayoutPanel.Footer = LayoutPanelFooter;
LayoutPanel.Head = LayoutPanelHead;
LayoutPanel.Header = LayoutPanelHeader;

export default LayoutPanel;
