import { MarkdownImporter } from '../Markdown/MarkdownImporter';
import React from 'react';
import Readme from './README.md';

export const Home = () => {

    return (
        <React.Fragment>
            <MarkdownImporter source={Readme} />
        </React.Fragment>
    );
};
