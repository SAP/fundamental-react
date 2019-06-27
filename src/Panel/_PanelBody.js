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
    children: PropTypes.node,
    className: PropTypes.string
};

export default PanelBody;
