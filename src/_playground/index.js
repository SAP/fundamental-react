import './index.css';
import App from './App';
import { Description } from './documentation/Description/Description';
import { Header } from './documentation/Header/Header';
import { Import } from './documentation/Import/Import';
import { Playground } from './documentation/Playground/Playground';
import { Properties } from './documentation/Properties/Properties';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Separator } from './documentation/Separator/Separator';
import { DocsText, DocsTile } from './documentation/DocsTile/DocsTile';

export {
    Description,
    DocsTile,
    DocsText,
    Header,
    Import,
    Playground,
    Properties,
    Separator
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
