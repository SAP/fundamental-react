import InlineHelp from './InlineHelp';
import { mount } from 'enzyme';
import React from 'react';

describe('<InlineHelp />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the InlineHelp component', () => {
            const element = mount(
                <InlineHelp
                    buttonLabel='Quick Help for Content'
                    data-sample='Sample'
                    placement='bottom'
                    text='Text' />
            );

            element.find('.fd-inline-help').at(0).simulate('click');

            expect(
                element.find('.fd-inline-help__content').at(0).getDOMNode().attributes['data-sample'].value
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
            render = () => (
                <InlineHelp
                    buttonLabel='Quick Help for Content'
                    ref={ref}
                    text='hello' />
            );
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-inline-help');
    });
});
