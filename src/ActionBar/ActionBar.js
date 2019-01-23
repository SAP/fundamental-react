import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const ActionBar = ({ mobile, width, children, className, ...props }) => {
    const actionBarClasses = classnames(
        'fd-action-bar',
        className
    );

    return (
        <React.Fragment>
            {mobile ? (
                <div style={{ width: width ? width : '319px' }}>
                    <div {...props} className={actionBarClasses}>{children}</div>
                </div>
            ) : (
                <div {...props} className={actionBarClasses}>{children}</div>
            )}
        </React.Fragment>
    );
};

ActionBar.propTypes = {
    className: PropTypes.string.isRequired,
    mobile: PropTypes.bool,
    testArrayOf: PropTypes.arrayOf(PropTypes.object),
    testInstanceOf: PropTypes.instanceOf(ActionBar),
    testObjectOf: PropTypes.objectOf(PropTypes.string),
    testOneOf: PropTypes.oneOf(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']),
    testOneOfType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    testShape: PropTypes.shape({
        child1: PropTypes.string.isRequired,
        child2: PropTypes.object
    }),
    width: PropTypes.string
};

ActionBar.defaultProps = {
    width: '400px'
};

ActionBar.propDescriptions = {
    mobile: 'Set to "true" for mobile view of the Action Bar.',
    testOneOf: 'This is the testOneOf description.',
    testOneOfType: 'This is the testOneOfType description.',
    testShape: 'This is the testShape description.',
    width: 'The width of the Action Bar in mobile view.'
};

export const ActionBarBack = ({ onClick, className, buttonProps, ...props }) => {
    const actionBarBackClasses = classnames(
        'fd-action-bar__back',
        className
    );

    return (
        <div {...props} className={actionBarBackClasses}>
            <button
                {...buttonProps}
                className='fd-button--light fd-button--compact sap-icon--nav-back'
                onClick={onClick} />
        </div>
    );
};

ActionBarBack.propTypes = {
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func
};

ActionBarBack.propDescriptions = {
    buttonProps: 'Additional props to be spread to the button element.'
};

export const ActionBarHeader = ({ className, description, descriptionProps, title, titleProps, ...props }) => {
    const actionBarHeaderClasses = classnames(
        'fd-action-bar__header',
        className
    );

    return (
        <div {...props} className={actionBarHeaderClasses}>
            <h1
                {...titleProps}
                className='fd-action-bar__title'>{title}</h1>
            <p
                {...descriptionProps}
                className='fd-action-bar__description'>{description} </p>
        </div>
    );
};

ActionBarHeader.propTypes = {
    className: PropTypes.string,
    description: PropTypes.string,
    descriptionProps: PropTypes.object,
    title: PropTypes.string,
    titleProps: PropTypes.object
};

ActionBarHeader.propDescriptions = {
    description: 'Action bar description.',
    descriptionProps: 'Additional props to be spread to the description\'s paragraph element.',
    title: 'The title text of the action bar.',
    titleProps: 'Additional props to be spread to the title\'s heading element.'
};

export const ActionBarActions = ({ children, className, ...props }) => {
    const actionBarActionsClasses = classnames(
        'fd-action-bar__actions',
        className
    );

    return <div {...props} className={actionBarActionsClasses}>{children}</div>;
};
