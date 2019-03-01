import PropTypes from 'prop-types';
import React from 'react';

const PropertyDefault = ({ defaultValue, prop }) => {
    if (prop.typeRequired) {
        return (
            <span className='prop-required'>Required</span>
        );
    }

    if (prop.typeName === 'bool' && !defaultValue) {
        return (
            <span>false</span>
        );
    }

    if (typeof defaultValue === 'object' || !defaultValue) {
        return null;
    }

    return (
        <span>{defaultValue.toString()}</span>
    );
};

PropertyDefault.displayName = 'PropertyDefault';

PropertyDefault.propTypes = {
    defaultValue: PropTypes.any,
    prop: PropTypes.any
};

export default PropertyDefault;
