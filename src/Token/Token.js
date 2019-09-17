import 'fundamental-styles/dist/token.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Token = (props) => {
    const { children, className, ...rest } = props;

    const tokenClasses = classnames(
        'fd-token',
        className
    );

    return (
        <span
            {...rest}
            className={tokenClasses}
            role='button'>
            {children}
        </span>
    );
};

Token.displayName = 'Token';

Token.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Token;
