import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title/Title';
// eslint-disable-next-line sort-imports
import styles from 'fundamental-styles/dist/layout-panel.css';

const classnames = classnamesBind.bind(styles);

const LayoutPanelHead = props => {
    const { title, description, className, headingLevel, headingStyle, ...rest } = props;

    const panelHeadClasses = classnames(
        'fd-layout-panel__head',
        className
    );

    return (
        <div {...rest} className={panelHeadClasses}>
            {title ?
                <div className='fd-layout-panel__title'>
                    <Title
                        level={headingLevel}
                        levelStyle={headingStyle}
                        wrap>
                        {title}
                    </Title>
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
    headingLevel: 3,
    headingStyle: 5
};

export default LayoutPanelHead;
