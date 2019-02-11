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
        fileName: readdirSync(directory).filter(isComponentFile)
    };
});

componentDirs.map((directory) => {
    let component = require(`${directory.path}/${directory.fileName}`);
    let fileContents = '';
    Object.keys(component).map((single) => {
        fileContents += `export { ${single} } from './${directory.fileName}';\n`;
        let indexPath = `${directory.path}/index.js`;
        writeFileSync(indexPath, fileContents);
    });
});
