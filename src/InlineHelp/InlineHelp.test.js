import InlineHelp from './InlineHelp';
import { mount } from 'enzyme';
import React from 'react';

describe('<InlineHelp />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the InlineHelp component', () => {
            const element = mount(
                <InlineHelp
                    data-sample='Sample'
                    placement='bottom-center'
                    text='Text' />
            );

            expect(
                element.getDOMNode().querySelector('span').attributes['data-sample'].value
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
            render = () => <InlineHelp ref={ref} text='hello' />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-inline-help');
    });
});
