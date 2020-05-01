import Button from './Button';
import { mount } from 'enzyme';
import React from 'react';

describe('<Button />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the Button component', () => {
            const element = mount(<Button data-sample='Sample' />);

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
            render = () => <Button ref={ref}>Button</Button>;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('BUTTON');
        expect(ref.current.className).toEqual('fd-button');
    });
});
