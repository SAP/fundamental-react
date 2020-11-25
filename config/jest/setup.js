import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

configure({ adapter: new Adapter() });

//https://github.com/FezVrasta/popper.js/issues/478
if (global.document) {
    document.createRange = () => ({
        setStart: () => { },
        setEnd: () => { },
        commonAncestorContainer: {
            nodeName: 'BODY',
            ownerDocument: document
        }
    });
}

// Defines window.scrollTo() as it's not defined by jsdom
if (global.window) {
    window.scrollTo = () => {};
}

registerRequireContextHook();
