import List from './List';
import { mount } from 'enzyme';
import React from 'react';

describe('<List />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the List component', () => {
            const element = mount(<List data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <List ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('UL');
        expect(ref.current.className).toEqual('fd-list');
    });
});
