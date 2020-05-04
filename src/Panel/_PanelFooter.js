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
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default PanelFooter;
