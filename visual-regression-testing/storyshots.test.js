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

const beforeScreenshot = (page) => {
    return page
        .emulate(view)
        .then(resp => resp)
        .catch(ex => console.error(ex));
};

initStoryshots({
    test: imageSnapshot({
        storybookUrl: 'http://localhost:12123/',
        getMatchOptions,
        beforeScreenshot
    })
});
