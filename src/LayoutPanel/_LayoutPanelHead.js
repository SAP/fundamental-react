import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title/Title';

const LayoutPanelHead = props => {
    const { title, description, className, headingLevel, headingStyle, ...rest } = props;

    const panelHeadClasses = classnames(
        'fd-layout-panel__head',
        className
    );

    const titleStyle = headingStyle || headingLevel;

    return (
        <div {...rest} className={panelHeadClasses}>
            {title ?
                <div className='fd-layout-panel__title'>
                    <Title level={headingLevel} levelStyle={titleStyle}>{title}</Title>
                </div> : null}
            {description ? <p className='fd-layout-panel__description'>{description}</p> : null}
        </div>
    );
};

LayoutPanelHead.displayName = 'LayoutPanel.Head';

LayoutPanelHead.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Localized text for the description of the panel */
    description: PropTypes.string,
    /** Heading level. `<h1>` is reserved for the page title. It should not appear in components */
    headingLevel: CustomPropTypes.range(2, 6),
    /** Heading style, if it should be different from the default style for the heading level. */
    headingStyle: CustomPropTypes.range(2, 6),
    /** Localized text for the heading */
    title: PropTypes.string
};

LayoutPanelHead.defaultProps = {
    headingLevel: 3
};

export default LayoutPanelHead;
