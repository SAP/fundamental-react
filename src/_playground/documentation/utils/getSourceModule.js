const getSourceModule = (sourceModulePath) => {
    // To get this to play nice with webpack we have to strip src from the string and hard code the path to src in the require statement. This gives webpack a hint at where to find the module when bundling. Otherwise the module returns undefined.
    const cleanSource = sourceModulePath.replace('./src', '');
    const sourceModule = require('../../../../src' + cleanSource);

    return sourceModule;
};

export default getSourceModule;
