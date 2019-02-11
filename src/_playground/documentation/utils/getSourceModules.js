const getSourceModules = (sourceModulePath) => {
    const cleanSource = sourceModulePath.replace('./src', '');

    const sourceModules = require('../../../../src' + cleanSource);

    return sourceModules;
};

export default getSourceModules;
