import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Token = (props) => {
    const { children, clickHandler, className, ...rest } = props;

    const tokenClasses = classnames(
        'fd-token',
        className
    );

    return (
        <span {...rest} className={tokenClasses}
            onClick={clickHandler}
            role='button'>
            {children}
        </span>
    );
};
Token.displayName = 'Token';

Token.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    clickHandler: PropTypes.func
};

Token.propDescriptions = {
    clickHandler: 'Callback function when user clicks on the component.'
};
