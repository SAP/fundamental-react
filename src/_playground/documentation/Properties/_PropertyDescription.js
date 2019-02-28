import PropertyTable from './_PropertyTable';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

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

PropertyDescription.displayName = 'PropertyDescription';

PropertyDescription.propTypes = {
    defaultValue: PropTypes.any,
    description: PropTypes.string,
    prop: PropTypes.any
};

export default PropertyDescription;
