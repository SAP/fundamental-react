/**
 * @jest-environment jsdom
 */
import path from 'path';
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

// mock react-dom for portals
jest.mock('react-dom');


// create jest snapshot tests from each story
initStoryshots({
    integrityOptions: { cwd: path.join(__dirname, 'src', 'stories') },
    test: multiSnapshotWithOptions()
});


// TO DO: separate snapshots into individual files
