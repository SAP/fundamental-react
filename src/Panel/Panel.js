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

const Panel = props => {
    const { colSpan, children, className, ...rest } = props;

    const panelClasses = classnames(
        'fd-panel',
        {
            [`fd-has-grid-column-span-${colSpan}`]: !!colSpan
        },
        className
    );

    return <div {...rest} className={panelClasses}>{children}</div>;
};

Panel.displayName = 'Panel';

Panel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: CustomPropTypes.range(1, 6)
};

Panel.propDescriptions = {
    colSpan: 'The number of columns to span inside a `PanelGrid`.'
};

Panel.Actions = PanelActions;
Panel.Body = PanelBody;
Panel.Filters = PanelFilters;
Panel.Footer = PanelFooter;
Panel.Head = PanelHead;
Panel.Header = PanelHeader;

export default Panel;
