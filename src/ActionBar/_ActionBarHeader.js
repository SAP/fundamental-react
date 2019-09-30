import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const ActionBarHeader = React.forwardRef(({ className, description, descriptionProps, headingLevel, title, titleProps, ...props }, ref) => {
    const actionBarHeaderClasses = classnames(
        'fd-action-bar__header',
        className
    );

    const HeadingTag = `h${headingLevel}`;

    return (
        <div {...props} className={actionBarHeaderClasses}
            ref={ref}>
            <HeadingTag
                {...titleProps}
                className='fd-action-bar__title'>{title}</HeadingTag>
            {description &&
                <p
                    {...descriptionProps}
                    className='fd-action-bar__description'>{description}</p>
            }
        </div>
    );
});

ActionBarHeader.displayName = 'ActionBar.Header';

ActionBarHeader.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    description: PropTypes.string,
    descriptionProps: PropTypes.object,
    headingLevel: CustomPropTypes.range(1, 6),
    titleProps: PropTypes.object
};

ActionBarHeader.defaultProps = {
    headingLevel: 3
};

ActionBarHeader.propDescriptions = {
    description: 'Localized text for the description.',
    descriptionProps: 'Additional props to be spread to the description\'s `<p>` element.',
    headingLevel: 'Heading level. `<h1>` is reserved for the page title.'
};

export default ActionBarHeader;
