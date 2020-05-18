/* eslint-disable no-console */
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import initStoryshots from '@storybook/addon-storyshots';

const getMatchOptions = () => {
    return {
        failureThreshold: 0.2,
        failureThresholdType: 'percent'
    };
};

//This is needed to keep CI from failing due to viewport differences
const view = {
    name: 'Desktop 800x600',
    userAgent: 'placeholder',
    viewport: {
        width: 800,
        height: 600
    }
};

const customizePage = (page) => page.emulate(view);
const beforeScreenshot = (page) => page.emulate(view);

// create visual regession images from each story
initStoryshots({
    storyKindRegex: /^((?!.*?Component).)*$/,
    test: imageSnapshot({
        storybookUrl: 'http://localhost:12123/',
        customizePage,
        getMatchOptions,
        beforeScreenshot
    })
});
