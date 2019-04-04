import { defaultPropDescriptions } from './defaults';
import { getShapeTitle } from '../utils/getShapeTitle';
import Heading from '../Heading/Heading';
import PropertyDefault from './_PropertyDefault';
import PropertyDescription from './_PropertyDescription';
import PropertyShape from './_PropertyShape';
import PropertyType from './_PropertyType';
import PropTypes from 'prop-types';
import React from 'react';
import sortBy from 'sort-by';
import Table from '../../../Table/Table';

const PropertyTable = ({ title, propTypes = {}, defaultProps = {}, propDescriptions = {} }) => {
    if (!propTypes) {
        return (
            <em>This component has no defined properties.</em>
        );
    }

    let propInfo = Object.keys(propTypes).map(propName => {
        return { propName: propName, required: !!propTypes[propName].typeRequired };
    });
    const sortedProps = propInfo.sort(sortBy('-required', 'propName'));

    let data = [];
    let shapes = [];
    const mergedPropDescriptions = {
        ...defaultPropDescriptions,
        ...propDescriptions
    };

    sortedProps.forEach(({ propName }) => {
        data.push({
            rowData: [
                propName,
                <PropertyType
                    componentName={title}
                    prop={propTypes[propName]}
                    propName={propName}
                    topLevel />,
                <PropertyDefault
                    defaultValue={defaultProps[propName]}
                    prop={propTypes[propName]} />,
                <PropertyDescription
                    description={mergedPropDescriptions[propName]} />
            ]
        });

        if (propTypes[propName].typeName === 'shape' || propTypes[propName].typeName === 'i18n') {
            shapes.push(propName);
        }
    });

    return (
        <React.Fragment>
            {title && <Heading level={3}>{title}</Heading>}
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
            {shapes.map((shapeName, i) => {
                return (
                    <PropertyShape
                        defaultProps={defaultProps[shapeName]}
                        key={i}
                        propDescriptions={mergedPropDescriptions[`${shapeName}Shape`]}
                        propTypes={propTypes[shapeName].typeChecker}
                        title={getShapeTitle(title, shapeName, propTypes[shapeName].typeName)} />
                );
            })}
        </React.Fragment>
    );
};

PropertyTable.displayName = 'PropertyTable';

PropertyTable.propTypes = {
    defaultProps: PropTypes.object,
    propDescriptions: PropTypes.object,
    propTypes: PropTypes.object,
    title: PropTypes.string
};

export default PropertyTable;
