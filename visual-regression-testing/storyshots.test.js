/**
 * @jest-environment jsdom
 */
import initStoryshots from '@storybook/addon-storyshots';

// mock shortid for snapshot testing
jest.mock('shortid', () => {
    let id = 1;

    return {
        generate: () => id++
    };
});

// ReactDOM.createPortal = node => node;
jest.mock('react-dom');


// create jest snapshot tests from each story
initStoryshots();


