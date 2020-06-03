import Adapter from 'enzyme-adapter-react-16';
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
window.scrollTo = () => {};

registerRequireContextHook();
