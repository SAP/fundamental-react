import arraySort from 'array-sort';
import { defaultPropDescriptions } from './defaults';
import PropTypes from 'prop-types';
import React from 'react';
import { Table } from '../../../Table/Table';

export const Properties = ({ sourceModule }) => {
    const componentNames = arraySort(Object.keys(sourceModule));

    return (
        <React.Fragment>
            <h2>Properties</h2>
            {componentNames.map((name, index) => {
                const component = sourceModule[name];
                // console.log('Properties name', name);
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
    sourceModule: PropTypes.object.isRequired
};



const PropertyTable = ({ propTypes, defaultProps, propDescriptions }) => {
    // console.log('PropertyTable propTypes', propTypes);
    // console.log('PropertyTable defaultProps', defaultProps);
    // console.log('PropertyTable propDescriptions', propDescriptions);
    if (!propTypes) {
        return (
            <em>This component has no defined properties.</em>
        );
    }

    let data = [];
    const mergedPropDescriptions = {
        ...defaultPropDescriptions,
        ...propDescriptions
    };

    Object.keys(propTypes).forEach(propName => {
        data.push({
            rowData: [
                propName,
                <PropertyType prop={propTypes[propName]} />,
                propTypes[propName].typeRequired
                    ? (<span className='prop-required'>Required</span>)
                    : defaultProps && typeof defaultProps[propName] !== 'object' && defaultProps[propName],
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
    let details;

    switch (prop.typeName) {
        case 'arrayOf':
        case 'objectOf':
            details = (
                <div>({typeChecker.typeName})</div>
            );
            break;
        case 'instanceOf':
            details = (
                <div>({typeChecker.name || typeChecker.displayName})</div>
            );
            break;
        case 'oneOf':
            details = (
                <div>({typeChecker.join(', ')})</div>
            );
            break;
        case 'oneOfType':
            let types = [];
            typeChecker.forEach(t => {
                types.push(t.typeName);
            });
            details = (
                <div>({types.join(', ')})</div>
            );
            break;
        case 'shape':
            details = '';
            break;
        default:
    }

    return (
        <React.Fragment>
            <div>{prop.typeName}</div>
            <div>{details}</div>
        </React.Fragment>
    );
};

PropertyType.propTypes = {
    prop: PropTypes.any
};



const PropertyDescription = ({ defaultValue, description, prop }) => {
    const typeChecker = prop.typeChecker;
    // console.log('PropertyDescription typeChecker', typeChecker);

    return (
        <React.Fragment>
            <div>{description}</div>
            <div style={{color: 'blue'}}>
                {prop.typeName === 'shape' &&
                    <PropertyTable
                        defaultProps={defaultValue}
                        propTypes={typeChecker} />
                }
            </div>
        </React.Fragment>
    );
};

PropertyDescription.propTypes = {
    defaultValue: PropTypes.any,
    description: PropTypes.string,
    prop: PropTypes.any
};
