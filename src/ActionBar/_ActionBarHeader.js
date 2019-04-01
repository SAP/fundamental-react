import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const ActionBarHeader = ({ className, description, descriptionProps, level, title, titleProps, ...props }) => {
    const actionBarHeaderClasses = classnames(
        'fd-action-bar__header',
        className
    );

    const HeadingTag = `h${level}`;

    return (
        <div {...props} className={actionBarHeaderClasses}>
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
};

ActionBarHeader.displayName = 'ActionBar.Header';

ActionBarHeader.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    description: PropTypes.string,
    descriptionProps: PropTypes.object,
    level: CustomPropTypes.range(2, 6),
    titleProps: PropTypes.object
};

ActionBarHeader.defaultProps = {
    level: 3
};

ActionBarHeader.propDescriptions = {
    description: 'Localized text for the description.',
    descriptionProps: 'Additional props to be spread to the description\'s `<p>` element.'
};

export default ActionBarHeader;
