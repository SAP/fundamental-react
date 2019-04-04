import { getShapeTitle } from '../utils/getShapeTitle';
import { makeSafeId } from '../utils/makeSafeId';
import PropTypes from 'prop-types';
import React from 'react';

const PropertyType = ({ prop, propName, componentName, topLevel }) => {
    const typeChecker = prop.typeChecker;

    switch (prop.typeName) {
        case 'arrayOf':
        case 'objectOf':
            return (
                <React.Fragment>
                    <div>{prop.typeName}</div>
                    {typeChecker.typeChecker ? (
                        <PropertyType prop={typeChecker} propName={propName} />
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
                        <PropertyType prop={typeChecker} propName={propName} />
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
                    t.typeChecker ? <PropertyType key={i} prop={t}
                        propName={propName} /> : <span key={i}>{`(${t.typeName})`}</span>
                ).reduce((prev, curr) => [prev, ', ', curr]);
            return (
                <React.Fragment>
                    <div>{prop.typeName}</div>
                    [{types}]
                </React.Fragment>
            );
        case 'range':
            const values = Object.keys(typeChecker).map(key => `${key}: ${typeChecker[key]}`);
            return (
                <React.Fragment>
                    <div>{prop.typeName}</div>
                    <div>{`(${values.join('; ')})`}</div>
                </React.Fragment>
            );
        case 'shape':
        case 'i18n':
            return (
                <React.Fragment>
                    <div>{prop.typeName}</div>
                    {topLevel && <div>(<a href={`#${makeSafeId(getShapeTitle(componentName, propName, prop.typeName))}`}>details</a>)</div>}
                </React.Fragment>
            );
        default:
            return <div>{prop.typeName}</div>;
    }
};

PropertyType.displayName = 'PropertyType';

PropertyType.propTypes = {
    componentName: PropTypes.string,
    prop: PropTypes.any,
    propName: PropTypes.string,
    topLevel: PropTypes.bool
};

export default PropertyType;
