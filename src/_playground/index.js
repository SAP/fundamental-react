import 'annotated-prop-types';
import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

export { default as Description } from './documentation/Description/Description';
export { default as DocsText } from './documentation/DocsText/DocsText';
export { default as DocsTile } from './documentation/DocsTile/DocsTile';
export { default as Header } from './documentation/Header/Header';
export { default as Import } from './documentation/Import/Import';
export { default as Playground } from './documentation/Playground/Playground';
export { default as Properties } from './documentation/Properties/Properties';
export { default as Separator } from './documentation/Separator/Separator';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
