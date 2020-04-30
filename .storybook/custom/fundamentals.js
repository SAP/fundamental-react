import { create } from '@storybook/theming';
import packageJson from '../../package.json';

export default create({
    base: 'light',

    colorPrimary: '#1085A7',
    colorSecondary: '#354A5F',

    // UI
    appBg: '#EAEAEA',
    appContentBg: '#F3F4F5',

    // Typography
    fontBase: '"72", "Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#404040',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: '#61DAFB',
    barBg: '#354A5F',

    brandTitle: `Fundamental React v${packageJson.version}`,
    brandUrl: 'https://github.com/sap/fundamental-react',
    brandImage: './logo_text.png'
});
