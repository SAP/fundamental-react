import FormLabel from './FormLabel';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormLabel />', () => {
    const formLabel = (
        <FormLabel forAttr='input-1' required>
            Default Input
        </FormLabel>
    );

    test('create form label', () => {
        let component = renderer.create(formLabel);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('rendering', () => {
        test('should add is-disabled class when disabled', () => {
            const element = mount(<FormLabel disabled />);

            expect(
                element.find('label').hasClass('is-disabled')
            ).toBe(true);
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormLabel component', () => {
            const element = mount(<FormLabel data-sample='Sample' />);

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
            render = () => <FormLabel ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('LABEL');
        expect(ref.current.className).toEqual('fd-form-label');
    });
});
