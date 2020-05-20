import Avatar from './Avatar';
import { mount } from 'enzyme';
import React from 'react';

describe('<Avatar />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the Avatar component', () => {
            const element = mount(<Avatar data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
    describe('Roles', () => {
        test('should have role of presentation by default', () => {
            const element = mount(<Avatar />);

            expect(
                element.getDOMNode().attributes.role.value
            ).toBe('presentation');
        });

        test('should have empty role if children prop is passed', () => {
            const element = mount(<Avatar children='Test child' />);

            expect(
                element.getDOMNode().attributes.role.value
            ).toBe('');
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Avatar ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-avatar');
    });
});
