import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const PanelBody = props => {
    const { children, className, ...rest } = props;

    const panelBodyClasses = classnames(
        'fd-panel__body',
        className
    );

    return <div {...rest} className={panelBodyClasses}>{children}</div>;
};

PanelBody.displayName = 'Panel.Body';

PanelBody.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default PanelBody;
