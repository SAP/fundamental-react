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
    className: PropTypes.string,
    mobile: PropTypes.bool,
    width: PropTypes.string
};

ActionBar.propDescriptions = {
    mobile: 'Set to **true** for mobile view of the Action Bar.',
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
    description: 'The description text of the component.',
    descriptionProps: 'Additional props to be spread to the description\'s `<p>` element.',
    title: 'The title text of the component.',
    titleProps: 'Additional props to be spread to the title\'s heading element.'
};

export const ActionBarActions = ({ children, className, ...props }) => {
    const actionBarActionsClasses = classnames(
        'fd-action-bar__actions',
        className
    );

    return <div {...props} className={actionBarActionsClasses}>{children}</div>;
};
