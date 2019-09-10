import Button from '../Button/Button';
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
            <Button
                {...buttonProps}
                compact
                glyph='nav-back'
                onClick={onClick}
                option='light' />
        </div>
    );
};

ActionBarBack.displayName = 'ActionBar.Back';

ActionBarBack.propTypes = {
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default ActionBarBack;
