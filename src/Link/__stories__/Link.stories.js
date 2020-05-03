import Link from '../Link';
import React from 'react';

export default {
    title: 'Demo/Link',
    component: Link
};

export const DefaultStory = () => (<Link href='#'>Default</Link>);

DefaultStory.story = {
    parameters: { foo: 'bar' }
};
