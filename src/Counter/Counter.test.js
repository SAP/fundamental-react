import Counter from './Counter';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Counter />', () => {
    const defaultCounter = <Counter>5</Counter>;
    const notificationCounter = (
        <Counter className='blue' notification>
            5
        </Counter>
    );

    test('create badges, pills and filled badges', () => {
        // create default counter
        let component = renderer.create(defaultCounter);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create counter with notification
        component = renderer.create(notificationCounter);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Counter component', () => {
            const element = mount(<Counter data-sample='Sample' />);

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
            render = () => <Counter ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-counter');
    });
});
