import { defaultPropDescriptions } from './defaults';
import getSourceModule from '../utils/getSourceModule';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import sortBy from 'sort-by';
import { Table } from '../../../Table/Table';

export const Properties = ({ sourceModulePath }) => {
    const sourceModule = getSourceModule(sourceModulePath);

    const componentNames = Object.keys(sourceModule).sort();

    return (
        <React.Fragment>
            <h2>Properties</h2>
            {componentNames.map((name, index) => {
                const component = sourceModule[name];
                return (
                    <React.Fragment key={index}>
                        <h3 className='header'>{name}</h3>
                        <PropertyTable
                            defaultProps={component.defaultProps}
                            propDescriptions={component.propDescriptions}
                            propTypes={component.propTypes} />
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};

Properties.propTypes = {
    sourceModulePath: PropTypes.string.isRequired
};



const PropertyTable = ({ propTypes, defaultProps, propDescriptions }) => {
    if (!propTypes) {
        return (
            <em>This component has no defined properties.</em>
        );
    }

    let propInfo = Object.keys(propTypes).map(propName => {
        return { propName: propName, required: propTypes[propName].typeRequired };
    });
    const sortedProps = propInfo.sort(sortBy('-required', 'propName'));

    let data = [];
    const mergedPropDescriptions = {
        ...defaultPropDescriptions,
        ...propDescriptions
    };

    sortedProps.forEach(({ propName }) => {
        data.push({
            rowData: [
                propName,
                <PropertyType prop={propTypes[propName]} />,
                <PropertyDefault
                    defaultValue={defaultProps && defaultProps[propName]}
                    prop={propTypes[propName]} />,
                <PropertyDescription
                    defaultValue={defaultProps && defaultProps[propName]}
                    description={mergedPropDescriptions[propName]}
                    prop={propTypes[propName]} />
            ]
        });
    });

    return (
        <Table
            className='property-table'
            headers={
                [
                    'Name',
                    'Type',
                    'Default',
                    'Description'
                ]}
            tableData={data} />
    );
};

PropertyTable.propTypes = {
    defaultProps: PropTypes.object,
    propDescriptions: PropTypes.object,
    propTypes: PropTypes.object
};



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
        default:
            return <div>{prop.typeName}</div>;
    }
};

PropertyType.propTypes = {
    prop: PropTypes.any
};



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

PropertyDefault.propTypes = {
    defaultValue: PropTypes.any,
    prop: PropTypes.any
};



const PropertyDescription = ({ defaultValue, description, prop }) => {
    const typeChecker = prop.typeChecker;

    return (
        <React.Fragment>
            <div>
                <ReactMarkdown source={description} />
            </div>
            {prop.typeName === 'shape' &&
                <PropertyTable
                    defaultProps={defaultValue}
                    propTypes={typeChecker} />
            }
        </React.Fragment>
    );
};

PropertyDescription.propTypes = {
    defaultValue: PropTypes.any,
    description: PropTypes.string,
    prop: PropTypes.any
};
