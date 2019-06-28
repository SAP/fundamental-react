import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const PanelFooter = props => {
    const { children, className, ...rest } = props;

    const panelFooterClasses = classnames(
        'fd-panel__footer',
        className
    );

    return <div {...rest} className={panelFooterClasses}>{children}</div>;
};

PanelFooter.displayName = 'Panel.Footer';

PanelFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default PanelFooter;
