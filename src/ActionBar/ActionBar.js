import React from 'react';
import PropTypes from 'prop-types';

export const ActionBar = props => {
    const { mobile, width, children } = props;

    return (
        <React.Fragment>
            {mobile ? (
                <div style={{ width: width ? width : '319px' }}>
                    <div className='fd-action-bar'>{children}</div>
                </div>
            ) : (
                <div className='fd-action-bar'>{children}</div>
            )}
        </React.Fragment>
    );
};

ActionBar.propTypes = {
    mobile: PropTypes.bool,
    width: PropTypes.string
};

export const ActionBarBack = props => {
    const { onclick } = props;
    return (
        <div className='fd-action-bar__back'>
            <button className='fd-button--light fd-button--compact sap-icon--nav-back' onClick={onclick} />
        </div>
    );
};

ActionBarBack.propTypes = {
    onclick: PropTypes.func
};

export const ActionBarHeader = props => {
    const { title, description } = props;
    return (
        <div className='fd-action-bar__header'>
            <h1 className='fd-action-bar__title'>{title}</h1>
            <p className='fd-action-bar__description'>{description} </p>
        </div>
    );
};

ActionBarHeader.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

export const ActionBarActions = props => {
    const { children } = props;
    return <div className='fd-action-bar__actions'>{children}</div>;
};
