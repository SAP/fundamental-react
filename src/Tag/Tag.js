import React from 'react';
import { Icon } from '../Icon/Icon';
import PropTypes from 'prop-types';


export const Tag = (props) => {
    const { children, clickHandler } = props;
    return (
        <span className="fd-tag" role="button" onClick={clickHandler}>
            {children}
        </span>
    );
}
