import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PanelActions from './_PanelActions';
import PanelBody from './_PanelBody';
import PanelFilters from './_PanelFilters';
import PanelFooter from './_PanelFooter';
import PanelHead from './_PanelHead';
import PanelHeader from './_PanelHeader';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Panel = React.forwardRef(({ colSpan, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/layout-grid.css');
            require('fundamental-styles/dist/panel.css');
        }
    }, []);

    const panelClasses = classnames(
        'fd-panel',
        {
            [`fd-layout-grid__span-column-${colSpan}`]: !!colSpan
        },
        className
    );

    return (<div {...props} className={panelClasses}
        ref={ref}>
        {children}
    </div>);
});

Panel.displayName = 'Panel';

Panel.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** The number of columns to span inside a `LayoutGrid` */
    colSpan: CustomPropTypes.range(2, 6),
    /** Internal use only */
    disableStyles: PropTypes.bool
};

Panel.Actions = PanelActions;
Panel.Body = PanelBody;
Panel.Filters = PanelFilters;
Panel.Footer = PanelFooter;
Panel.Head = PanelHead;
Panel.Header = PanelHeader;

export default Panel;
