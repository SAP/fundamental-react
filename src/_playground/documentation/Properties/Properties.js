import getSourceModule from '../utils/getSourceModule';
import Heading from '../Heading/Heading';
import PropertyTable from './_PropertyTable';
import PropTypes from 'prop-types';
import React from 'react';

const Properties = ({ sourceModulePath }) => {
    if (!sourceModulePath) {
        return null;
    }

    const sourceModule = getSourceModule(sourceModulePath);

    const componentNames = Object.keys(sourceModule).filter(comp => comp.match(/^\_\_/)).sort();

    return (
        <React.Fragment>
            <Heading level={2}>Properties</Heading>
            {componentNames.map((name, index) => {
                const component = sourceModule[name];
                const subcomponentNames = Object.keys(component)
                    .filter(subName => component[subName] && component[subName].displayName)
                    .sort();
                return (
                    <React.Fragment key={index}>
                        <PropertyTable
                            defaultProps={component.defaultProps}
                            propDescriptions={component.propDescriptions}
                            propTypes={component.propTypes}
                            title={component.displayName} />
                        {subcomponentNames.map((subName, subIndex) => {
                            const subcomponent = component[subName];
                            return (
                                <PropertyTable
                                    defaultProps={subcomponent.defaultProps}
                                    key={subIndex}
                                    propDescriptions={subcomponent.propDescriptions}
                                    propTypes={subcomponent.propTypes}
                                    title={subcomponent.displayName} />
                            );
                        })}
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};

Properties.propTypes = {
    sourceModulePath: PropTypes.string
};

export default Properties;
