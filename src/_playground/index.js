import 'annotated-prop-types';
import './index.css';
import App from './App';
import ComponentPage from './documentation/Template/ComponentPage';
import Contents from './documentation/Contents/Contents';
import { Description } from './documentation/Description/Description';
import Example from './documentation/Example/Example';
import { Header } from './documentation/Header/Header';
import Heading from './documentation/Heading/Heading';
import { Import } from './documentation/Import/Import';
import MarkdownPage from './documentation/Template/MarkdownPage';
import { Playground } from './documentation/Playground/Playground';
import { Properties } from './documentation/Properties/Properties';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Separator } from './documentation/Separator/Separator';
import { DocsText, DocsTile } from './documentation/DocsTile/DocsTile';

export {
    Description,
    ComponentPage,
    Contents,
    DocsTile,
    DocsText,
    Example,
    Header,
    Heading,
    Import,
    MarkdownPage,
    Playground,
    Properties,
    Separator
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
