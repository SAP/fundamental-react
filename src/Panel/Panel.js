import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PanelActions from './_PanelActions';
import PanelBody from './_PanelBody';
import PanelFilters from './_PanelFilters';
import PanelFooter from './_PanelFooter';
import PanelHead from './_PanelHead';
import PanelHeader from './_PanelHeader';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const Panel = React.forwardRef(({ colSpan, children, className, disableStyles, ...props }, ref) => {

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
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: CustomPropTypes.range(2, 6),
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

Panel.propDescriptions = {
    colSpan: 'The number of columns to span inside a `LayoutGrid`.'
};

Panel.Actions = PanelActions;
Panel.Body = PanelBody;
Panel.Filters = PanelFilters;
Panel.Footer = PanelFooter;
Panel.Head = PanelHead;
Panel.Header = PanelHeader;

export { Panel as __Panel };

export default withStyles(Panel, { cssFile: ['layout-grid', 'panel'], fonts: true });
