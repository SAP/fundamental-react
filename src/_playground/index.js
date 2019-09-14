import 'annotated-prop-types';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

export { default as ComponentPage } from './documentation/Template/ComponentPage';
export { default as Contents } from './documentation/Contents/Contents';
export { default as Description } from './documentation/Description/Description';
export { default as DocsText } from './documentation/DocsText/DocsText';
export { default as DocsTile } from './documentation/DocsTile/DocsTile';
export { default as Example } from './documentation/Example/Example';
export { default as Header } from './documentation/Header/Header';
export { default as Heading } from './documentation/Heading/Heading';
export { default as Import } from './documentation/Import/Import';
export { default as MarkdownPage } from './documentation/Template/MarkdownPage';
export { default as Playground } from './documentation/Playground/Playground';
export { default as Properties } from './documentation/Properties/Properties';
export { default as Separator } from './documentation/Separator/Separator';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
