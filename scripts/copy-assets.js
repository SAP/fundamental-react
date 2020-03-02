const fs = require('fs-extra');

const fontPath = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Regular.woff');
const fontPathLight = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Light.woff');
const fontPathBold = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Bold.woff');
const iconPath = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/fonts/SAP-icons.woff');


function copyAssets() {
    fs.copyFile('README.md', 'src/_playground/documentation/Home/README.md', (err) => {
        if (err) throw err;
    });

    if (!fs.existsSync('src/_playground/fonts')) {
        fs.mkdirSync('src/_playground/fonts');
    }

    fs.copyFile(fontPath, 'src/_playground/fonts/72-Regular.woff', (err) => {
        if (err) throw err;
    });
    fs.copyFile(fontPathLight, 'src/_playground/fonts/72-Light.woff', (err) => {
        if (err) throw err;
    });
    fs.copyFile(fontPathBold, 'src/_playground/fonts/72-Bold.woff', (err) => {
        if (err) throw err;
    });
    fs.copyFile(iconPath, 'src/_playground/fonts/SAP-icons.woff', (err) => {
        if (err) throw err;
    });
}

module.exports = {
    copyAssets
};
