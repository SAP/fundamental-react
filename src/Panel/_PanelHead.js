import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const PanelHead = props => {
    const { title, description, className, ...rest } = props;

    const panelHeadClasses = classnames(
        'fd-panel__head',
        className
    );

    return (
        <div {...rest} className={panelHeadClasses}>
            {title ? <h1 className='fd-panel__title'>{title}</h1> : null}
            {description ? <p className='fd-panel__description'>{description}</p> : null}
        </div>
    );
};

PanelHead.displayName = 'PanelHead';

PanelHead.propTypes = {
    className: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
};

PanelHead.propDescriptions = {
    description: 'Localized text for the description of the panel.',
    title: 'Localized text for the title of the panel.'
};

export default PanelHead;
