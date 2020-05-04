import LayoutGrid from './LayoutGrid';
import { mount } from 'enzyme';
import React from 'react';

describe('<LayoutGrid />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the LayoutGrid component', () => {
            const element = mount(<LayoutGrid data-sample='Sample' />);

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
            render = () => <LayoutGrid ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-layout-grid');
    });
});
