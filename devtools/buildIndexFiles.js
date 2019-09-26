const { lstatSync, readdirSync, writeFileSync } = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../src');

const isComponentDirectory = (source) => {
    const ignoredDirectories = ['utils', 'playground', 'ContextualMenu'];
    return lstatSync(source).isDirectory() && !ignoredDirectories.some(ignored => source.includes(ignored));
};

const isComponentFile = (source) => {
    const ignoredFiles = ['test', 'Component', 'index', 'snapshots'];
    return !ignoredFiles.some(ignored => source.includes(ignored));
};

const isComponentExported = (source) => {
    return !source.match(/^\_/);
};


const componentDirs = readdirSync(srcPath).map(name => path.join(srcPath, name)).filter(isComponentDirectory).map(directory => {
    return {
        path: directory,
        fileNames: readdirSync(directory).filter(isComponentFile).filter(isComponentExported)
    };
});

//ignore scss imports
require.extensions['.css'] = function(module, filename) {
    console.info(`Ignoring ${filename} import`);  // eslint-disable-line
};

// For every component directory.
componentDirs.map((directory) => {
    let fileContents = '';
    // Loop through its files.
    directory.fileNames.map((fileName) => {
        // Grab the file's exports.
        let components = require(path.join(directory.path, fileName));

        Object.keys(components).map((component) => {
            if (component === 'default') {
                //components wrapped in withStyles HOC
                if (components.default.render) {
                    fileContents += `export { default as ${components.default.render.displayName} } from './${fileName}';\n`;
                } else {
                    //components not wrapped in HOC
                    fileContents += `export { default as ${components.default.name} } from './${fileName}';\n`;
                }
            } else {
                fileContents += `export { ${component} } from './${fileName}';\n`;
            }
        });
    });
    // write the index file into the directory.
    let indexPath = path.join(directory.path, 'index.js');
    writeFileSync(indexPath, fileContents);
});
