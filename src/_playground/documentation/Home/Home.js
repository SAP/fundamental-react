import { MarkdownImporter } from '../Markdown/MarkdownImporter';
import React from 'react';
import Readme from './README.md';

export const Home = () => {

    return (
        <React.Fragment>
            <h1 className='frDocs-Content__header'>Fundamental React</h1>
            <MarkdownImporter source={Readme} />
        </React.Fragment>
    );
};
