import ActionBar from './ActionBar';
import { mount } from 'enzyme';
import React from 'react';

describe('ActionBarActions', () => {
    test('should allow props to be spread to the ActionBarActions component', () => {
        const element = mount(<ActionBar.Actions data-sample='Sample' />);

        expect(
            element.getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <ActionBar.Actions ref={ref} />;
        }
        mount(<Test />);

        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-action-bar__actions');
    });
});

