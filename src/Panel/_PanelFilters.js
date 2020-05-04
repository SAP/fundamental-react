import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const PanelFilters = props => {
    const { children, className, ...rest } = props;

    const panelFiltersClasses = classnames(
        'fd-panel__filters',
        className
    );

    return (
        <div {...rest} className={panelFiltersClasses}>
            {children}
        </div>
    );
};

PanelFilters.displayName = 'Panel.Filters';

PanelFilters.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default PanelFilters;
