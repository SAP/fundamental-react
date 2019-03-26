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

    if (prop.typeName === 'i18n') {
        const list = Object.keys(defaultValue).map((t, i) => {
            return (
                <div key={i}>{`${t}: '${defaultValue[t]}'`}</div>);
        });
        return (
            <React.Fragment>
                {list}
            </React.Fragment>
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
