import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ActionBarBack = ({ onClick, className, buttonProps, ...props }) => {
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

ActionBarBack.displayName = 'ActionBarBack';

ActionBarBack.propTypes = {
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default ActionBarBack;
