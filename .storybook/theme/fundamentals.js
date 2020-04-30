import { create } from '@storybook/theming';
import packageJson from '../../package.json';

export default create({
    base: 'light',

    colorPrimary: '#1085A7',
    colorSecondary: 'white',

    // UI
    appBg: '#EAEAEA',
    appContentBg: '#F3F4F5',
    // appBorderColor: ,
    // appBorderRadius: ,

    // Typography
    fontBase: '"72", "Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#404040',
    // textInverseColor:,

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: 'white',
    barBg: '#354A5F',

    brandTitle: `Fundamental React v${packageJson.version}`,
    brandUrl: 'https://github.com/sap/fundamental-react'
    // brandImage: './logo.svg'
});
