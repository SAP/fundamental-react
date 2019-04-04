import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const PanelHead = props => {
    const { title, description, className, headingLevel, ...rest } = props;

    const panelHeadClasses = classnames(
        'fd-panel__head',
        className
    );

    const HeadingTag = `h${headingLevel}`;

    return (
        <div {...rest} className={panelHeadClasses}>
            {title ? <HeadingTag className='fd-panel__title'>{title}</HeadingTag> : null}
            {description ? <p className='fd-panel__description'>{description}</p> : null}
        </div>
    );
};

PanelHead.displayName = 'Panel.Head';

PanelHead.propTypes = {
    className: PropTypes.string,
    description: PropTypes.string,
    headingLevel: CustomPropTypes.range(2, 6),
    title: PropTypes.string
};

PanelHead.defaultProps = {
    headingLevel: 3
};

PanelHead.propDescriptions = {
    description: 'Localized text for the description of the panel.',
    title: 'Localized text for the title of the panel.'
};

export default PanelHead;
