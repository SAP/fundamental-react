import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ActionBarHeader = ({ className, description, descriptionProps, title, titleProps, ...props }) => {
    const actionBarHeaderClasses = classnames(
        'fd-action-bar__header',
        className
    );

    return (
        <div {...props} className={actionBarHeaderClasses}>
            <h1
                {...titleProps}
                className='fd-action-bar__title'>{title}</h1>
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
    titleProps: PropTypes.object
};

ActionBarHeader.propDescriptions = {
    description: 'Localized text for the description.',
    descriptionProps: 'Additional props to be spread to the description\'s `<p>` element.'
};

export default ActionBarHeader;
