import React from 'react';
import PropTypes from 'prop-types';

export const Token = (props) => {
    const { children, clickHandler } = props;
    return (
        <span className="fd-token" role="button" onClick={clickHandler}>
            {children}
        </span>
    );
}

Token.propTypes = {
    clickHandler: PropTypes.func
};
