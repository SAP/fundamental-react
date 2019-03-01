import getSourceModule from '../utils/getSourceModule';
import PropertyTable from './_PropertyTable';
import PropTypes from 'prop-types';
import React from 'react';

const Properties = ({ sourceModulePath }) => {
    const sourceModule = getSourceModule(sourceModulePath);

    const componentNames = Object.keys(sourceModule).sort();

    return (
        <React.Fragment>
            <h2>Properties</h2>
            {componentNames.map((name, index) => {
                const component = sourceModule[name];
                const subcomponentNames = Object.keys(component)
                    .sort()
                    .filter(subName => component[subName] && component[subName].displayName);
                return (
                    <React.Fragment key={index}>
                        <PropertyTable
                            defaultProps={component.defaultProps}
                            propDescriptions={component.propDescriptions}
                            propTypes={component.propTypes}
                            title={name} />
                        {subcomponentNames.map((subName, subIndex) => {
                            const subcomponent = component[subName];
                            return (
                                <PropertyTable
                                    defaultProps={subcomponent.defaultProps}
                                    key={subIndex}
                                    propDescriptions={subcomponent.propDescriptions}
                                    propTypes={subcomponent.propTypes}
                                    title={`${name}.${subName}`} />
                            );
                        })}
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};

Properties.propTypes = {
    sourceModulePath: PropTypes.string.isRequired
};

export default Properties;
