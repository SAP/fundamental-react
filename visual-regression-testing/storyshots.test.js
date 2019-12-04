/* eslint-disable no-unused-vars */
/* eslint-disable compat/compat */
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import initStoryshots from '@storybook/addon-storyshots';

const getMatchOptions = ({ context: { kind, story }, url }) => {
    return {
        failureThreshold: 0.2,
        failureThresholdType: 'percent'
    };
};
const beforeScreenshot = (page, { context: { kind, story }, url }) => {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, 100)
    );
};

initStoryshots({
    test: imageSnapshot({ storybookUrl: 'http://localhost:12123/', getMatchOptions, beforeScreenshot })
});
