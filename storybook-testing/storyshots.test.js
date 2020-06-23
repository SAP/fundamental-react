/**
 * @jest-environment jsdom
 */
import path from 'path';
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

// mock react-dom for portals
jest.mock('react-dom');

// mock shortid for snapshot testing
jest.mock('shortid', () => {
    return {
        generate: () => 'mocked-short-id'
    };
});

// create jest snapshot tests from each story
initStoryshots({
    storyKindRegex: /^((?!.*?Visual).)*$/,
    integrityOptions: { cwd: path.join(__dirname, 'src', 'stories') },
    test: multiSnapshotWithOptions()
});
