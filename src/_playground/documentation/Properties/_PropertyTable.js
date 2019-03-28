import { defaultPropDescriptions } from './defaults';
import Heading from '../Heading/Heading';
import PropertyDefault from './_PropertyDefault';
import PropertyDescription from './_PropertyDescription';
import PropertyShape from './_PropertyShape';
import PropertyType from './_PropertyType';
import PropTypes from 'prop-types';
import React from 'react';
import sortBy from 'sort-by';
import Table from '../../../Table/Table';

const PropertyTable = ({ title, propTypes, defaultProps, propDescriptions }) => {
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
    let shapes = [];
    const mergedPropDescriptions = {
        ...defaultPropDescriptions,
        ...propDescriptions
    };

    sortedProps.forEach(({ propName }) => {
        data.push({
            rowData: [
                propName,
                <PropertyType componentName={title} prop={propTypes[propName]} />,
                <PropertyDefault
                    defaultValue={defaultProps && defaultProps[propName]}
                    prop={propTypes[propName]} />,
                <PropertyDescription
                    defaultValue={defaultProps && defaultProps[propName]}
                    description={mergedPropDescriptions[propName]}
                    prop={propTypes[propName]} />
            ]
        });
        if (propTypes[propName].typeName === 'i18n') {
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
            {shapes.map((shape, i) => {
                const shapeName = `${title} - Localized Text`;
                return (<PropertyShape
                    defaultProps={defaultProps[shape]}
                    description={mergedPropDescriptions[shape]}
                    key={i}
                    propTypes={propTypes[shape].typeChecker}
                    title={shapeName} />);
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
