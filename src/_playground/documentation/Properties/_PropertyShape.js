import Heading from '../Heading/Heading';
import PropertyDefault from './_PropertyDefault';
import PropertyType from './_PropertyType';
import PropTypes from 'prop-types';
import React from 'react';
import sortBy from 'sort-by';
import Table from '../../../Table/Table';

const PropertyShape = ({ title, propTypes, defaultProps }) => {
    if (!propTypes) {
        return (
            <em>This shape has no defined properties.</em>
        );
    }

    let propInfo = Object.keys(propTypes).map((propName) => {
        return { propName: propName, required: propTypes[propName].typeRequired };
    });
    const sortedProps = propInfo.sort(sortBy('-required', 'propName'));

    let data = [];

    sortedProps.forEach(({ propName }) => {
        data.push({
            rowData: [
                propName,
                <PropertyType prop={propTypes[propName]} />,
                <PropertyDefault
                    defaultValue={defaultProps && defaultProps[propName]}
                    prop={propTypes[propName]} />
            ]
        });
    });

    return (
        <div className='fd-localizedText'>
            {title && <Heading level={4}>{title}</Heading>}
            <Table
                className='property-table'
                headers={
                    [
                        'Name',
                        'Type',
                        'Default'
                    ]}
                tableData={data} />
        </div>
    );
};

PropertyShape.displayName = 'PropertyShape';

PropertyShape.propTypes = {
    defaultProps: PropTypes.object,
    propTypes: PropTypes.object,
    title: PropTypes.string
};

export default PropertyShape;
