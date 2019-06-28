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
    children: PropTypes.node,
    className: PropTypes.string
};

export default PanelFilters;
