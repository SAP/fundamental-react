const fs = require('fs-extra');

const fontPath = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Regular.woff');
const fontPathLight = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Light.woff');
const fontPathBold = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Bold.woff');
const iconPath = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/fonts/SAP-icons.woff');

const introductionPath = 'src/Docs/introduction.stories.mdx';

// if readme copy already exists, remove it
if (fs.existsSync(introductionPath)) {
    fs.unlink(introductionPath, (err) => {
        if (err) return err;
    });
}

// copy readme file and prepend necessary <Meta /> tag for storybook
fs.copyFile('README.md', introductionPath, (err) => {
    if (err) throw err;

    const data = fs.readFileSync(introductionPath).toString().split('\n');
    data.splice(0, 0, 'import { Meta } from \'@storybook/addon-docs/blocks\';\n\n <Meta title=\'Overview\' />\n' );
    const text = data.join('\n');

    fs.writeFile(introductionPath, text, function(writeErr) {
        if (writeErr) return writeErr;
    });

});

if (!fs.existsSync('.storybook/static')) {
    fs.mkdirSync('.storybook/static');
}

fs.copyFile(fontPath, '.storybook/static/72-Regular.woff', (err) => {
    if (err) throw err;
});
fs.copyFile(fontPathLight, '.storybook/static/72-Light.woff', (err) => {
    if (err) throw err;
});
fs.copyFile(fontPathBold, '.storybook/static/72-Bold.woff', (err) => {
    if (err) throw err;
});
fs.copyFile(iconPath, '.storybook/static/SAP-icons.woff', (err) => {
    if (err) throw err;
});
