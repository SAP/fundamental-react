import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

module.exports = {
    'testURL': 'http://localhost/',
    'collectCoverageFrom': [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.Component.js',
        '!src/_playground/**'
    ]
};
