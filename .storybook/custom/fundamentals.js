import { create } from '@storybook/theming';
import packageJson from '../../package.json';

// TO DO: run axe for color contrast

export default create({
    base: 'light',
    colorPrimary: '#0e7290', // Fundamental logo blue
    colorSecondary: '#0e7290',
    // UI
    appBg: '#EAEAEA',
    appContentBg: '#F3F4F5',
    // Typography
    fontBase: '"72", "Open Sans", sans-serif',
    fontCode: 'monospace',
    // Text colors
    textColor: '#404040',
    textInverseColor: '#0e7290',
    // Toolbar default and active colors
    barTextColor: '#404040',
    barSelectedColor: '#0c637d',
    barBg: '#dbdbdb',
    brandTitle: `Fundamental React v${packageJson.version}`,
    brandUrl: 'https://github.com/sap/fundamental-react',
    brandImage: './logo_text.png'
});
