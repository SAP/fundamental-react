/**
 * @jest-environment jsdom
 */
import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';

// mock shortid for snapshot testing
jest.mock('shortid', () => {
    let id = 1;

    return {
        generate: () => id++
    };
});
// mock react-dom for portals
jest.mock('react-dom');


// create jest snapshot tests from each story
initStoryshots({
    stories2snapsConverter: new Stories2SnapsConverter({
        snapshotsDirName: '__snapshots__',
        snapshotExtension: '.storyshot',
        storiesExtensions: ['.js']
    })
});


// TO DO: separate snapshots into individual files
