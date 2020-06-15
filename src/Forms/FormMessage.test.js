import FormMessage from './_FormMessage';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormMessage />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormMessage component', () => {
            const element = mount(<FormMessage data-sample='Sample' />);

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
            render = () => <FormMessage ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-form-message');
    });
});
