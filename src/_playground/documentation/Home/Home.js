import MarkdownPage from '../Template/MarkdownPage';
import React from 'react';
import Readme from './README.md';

export const Home = () => {
    return (
        <MarkdownPage
            description='Fundamental React Homepage'
            sourceFile={Readme}
            title='Home' />
    );
};

export default Home;
