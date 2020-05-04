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
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Localized text for the description of the panel */
    description: PropTypes.string,
    /** Heading level. `<h1>` is reserved for the page title. It should not appear in components */
    headingLevel: CustomPropTypes.range(2, 6),
    /** Localized text for the heading */
    title: PropTypes.string
};

PanelHead.defaultProps = {
    headingLevel: 3
};

export default PanelHead;
