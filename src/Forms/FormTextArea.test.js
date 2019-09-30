import FormTextarea from './FormTextarea';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormTextArea />', () => {
    const formTextArea = (
        <FormTextarea id='textarea-2'>
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.
        </FormTextarea>
    );

    test('create form textarea', () => {
        let component = renderer.create(formTextArea);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormTextarea component', () => {
            const element = mount(<FormTextarea data-sample='Sample' />);

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
            render = () => <FormTextarea ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('TEXTAREA');
        expect(ref.current.className).toEqual('fd-textarea');
    });
});
