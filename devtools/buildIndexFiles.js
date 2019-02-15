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


const componentDirs = readdirSync(srcPath).map(name => path.join(srcPath, name)).filter(isComponentDirectory).map(directory => {
    return {
        path: directory,
        fileNames: readdirSync(directory).filter(isComponentFile)
    };
});

// For every component directory.
componentDirs.map((directory) => {
    let fileContents = '';
    // Loop through it's files.
    directory.fileNames.map((name) => {
        // Grab the file's exports.
        let component = require(`${directory.path}/${name}`);
        Object.keys(component).map((single) => {
            fileContents += `export { ${single} } from './${name}';\n`;
        });
    });
    // write the index file into the directory.
    let indexPath = `${directory.path}/index.js`;
    writeFileSync(indexPath, fileContents);
});
