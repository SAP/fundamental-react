import FormItem from './FormItem';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormItem />', () => {
    describe('Rendering', () => {
        test('should add inline class when isInline prop passed', () => {
            const element = mount(<FormItem isInline />);

            expect(
                element.find('div').hasClass('fd-form-item--inline')
            ).toBe(true);
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormItem component', () => {
            const element = mount(<FormItem data-sample='Sample' />);

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
            render = () => <FormItem ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-form-item');
    });
});
