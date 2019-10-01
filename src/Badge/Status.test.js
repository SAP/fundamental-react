import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Status from './Status';

describe('<Status />', () => {

    const defaultStatus = <Status>Default</Status>;
    const typeStatus = (
        <Status className='blue' type='success'>
            Default
        </Status>
    );
    const iconStatus = <Status glyph='history'>Default</Status>;

    test('create status', () => {
        // create default status
        let component = renderer.create(defaultStatus);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create success type status
        component = renderer.create(typeStatus);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create icon status
        component = renderer.create(iconStatus);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Status component', () => {
            const element = mount(<Status data-sample='Sample' />);

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
            render = () => <Status ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-status-label');
    });
});
