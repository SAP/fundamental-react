import PropTypes from 'prop-types';
import React from 'react';

export const Icon = ({ glyph, size, clickHandler, className, ...props }) => {
    return (
        <span
            className={`${'sap-icon--' + glyph}${size ? ' sap-icon--' + size : ''}${className ? ' ' + className : ''}`}
            onClick={clickHandler} {...props} />
    );
};

Icon.defaultProps = {
    clickHandler: () => {}
};

Icon.propTypes = {
    glyph: PropTypes.string.isRequired,
    className: PropTypes.string,
    clickHandler: PropTypes.func,
    size: PropTypes.string
};
