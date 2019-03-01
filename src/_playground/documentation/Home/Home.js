import Header from '../Header/Header';
import MarkdownImporter from '../Markdown/MarkdownImporter';
import React from 'react';
import Readme from './README.md';

const Home = () => {

    return (
        <React.Fragment>
            <Header />
            <MarkdownImporter source={Readme} />
        </React.Fragment>
    );
};

export default Home;
