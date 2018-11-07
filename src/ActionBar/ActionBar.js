import React from 'react';
import PropTypes from 'prop-types';

export const ActionBar = props => {
    const { mobile, width, children } = props;

    return (
        <React.Fragment>
            {mobile ? (
                <div style={{ width: width ? width : '319px' }}>
                    <div className="fd-action-bar">{children}</div>
                </div>
            ) : (
                <div className="fd-action-bar">{children}</div>
            )}
        </React.Fragment>
    );
};

ActionBar.propTypes = {
    mobile: PropTypes.bool
};

export const ActionBarBack = props => {
    return (
        <div class="fd-action-bar__back">
             <button class="fd-button--light fd-button--compact sap-icon--nav-back"></button>
        </div>
    );
};

export const ActionBarHeader = props => {
    const { title, description } = props;
    return (
        <div class="fd-action-bar__header">
            <h1 class="fd-action-bar__title">{title}</h1>
            <p class="fd-action-bar__description">{description} </p>
        </div>
    );
};

ActionBarHeader.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

export const ActionBarActions = props => {
    const { children } = props;
    return <div class="fd-action-bar__actions">{children}</div>;
};
