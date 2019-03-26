import PropTypes from 'prop-types';
import React from 'react';

const PropertyType = ({ prop }) => {
    const typeChecker = prop.typeChecker;

    switch (prop.typeName) {
        case 'arrayOf':
        case 'objectOf':
            return (
                <React.Fragment>
                    <div>{prop.typeName}</div>
                    {typeChecker.typeChecker ? (
                        <PropertyType prop={typeChecker} />
                    ) : (
                        <div>{`(${typeChecker.typeName})`}</div>
                    )}
                </React.Fragment>
            );
        case 'instanceOf':
            return (
                <React.Fragment>
                    <div>{prop.typeName}</div>
                    {typeChecker.typeChecker ? (
                        <PropertyType prop={typeChecker} />
                    ) : (
                        <div>{`(${typeChecker.name || typeChecker.displayName})`}</div>
                    )}
                </React.Fragment>
            );
        case 'oneOf':
            return (
                <React.Fragment>
                    <div>{prop.typeName}</div>
                    <div>{`(${typeChecker.join(', ')})`}</div>
                </React.Fragment>
            );
        case 'oneOfType':
            const types = typeChecker
                .map((t, i) =>
                    t.typeChecker ? <PropertyType key={i} prop={t} /> : <span key={i}>{`(${t.typeName})`}</span>
                ).reduce((prev, curr) => [prev, ', ', curr]);
            return (
                <React.Fragment>
                    <div>{prop.typeName}</div>
                    [{types}]
                </React.Fragment>
            );
        case 'shape':
            return <div>{prop.typeName} ({`\{${Object.keys(prop.typeChecker).sort().join(', ')}\}`})</div>;
        case 'range':
            const values = Object.keys(typeChecker).map(key => `${key}: ${typeChecker[key]}`);
            return (
                <React.Fragment>
                    <div>{prop.typeName}</div>
                    <div>{`(${values.join('; ')})`}</div>
                </React.Fragment>
            );
        case 'i18n':
            const list = Object.keys(typeChecker).map(key => `${key}: ${typeChecker[key].typeName}`);
            return (
                <React.Fragment>
                    <div>{list.join('\n')}</div>
                </React.Fragment>
            );
        default:
            return <div>{prop.typeName}</div>;
    }
};

PropertyType.displayName = 'PropertyType';

PropertyType.propTypes = {
    prop: PropTypes.any
};

export default PropertyType;
