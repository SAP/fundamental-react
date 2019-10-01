import Button from '../Button/Button';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ActionBarBack = React.forwardRef(({ onClick, className, buttonProps, disableStyles, ...props }, ref) => {
    const actionBarBackClasses = classnames(
        'fd-action-bar__back',
        className
    );

    return (
        <div {...props} className={actionBarBackClasses}
            ref={ref}>
            <Button
                {...buttonProps}
                compact
                disableStyles={disableStyles}
                glyph='nav-back'
                onClick={onClick}
                option='light' />
        </div>
    );
});

ActionBarBack.displayName = 'ActionBar.Back';

ActionBarBack.propTypes = {
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    onClick: PropTypes.func
};

export default ActionBarBack;
