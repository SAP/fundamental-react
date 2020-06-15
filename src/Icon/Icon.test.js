import Icon from './Icon';
import { mount } from 'enzyme';
import React from 'react';

describe('<Icon />', () => {
    const mockOnClick = jest.fn();
    const defaultIcon = (
        <Icon
            className='blue'
            glyph='cart'
            onClick={mockOnClick} />
    );
    const iconWithSize = <Icon glyph='cart' size='s' />;

    test('click on icon', () => {
        let wrapper = mount(defaultIcon);
        wrapper.find('.sap-icon--cart').simulate('click');
        expect(wrapper.prop('onClick')).toBeCalledTimes(1);

        wrapper = mount(iconWithSize);
        wrapper.find('span.sap-icon--cart').simulate('click');
        expect(wrapper.prop('onClick')).toBeUndefined;
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Icon component', () => {
            const element = mount(<Icon data-sample='Sample' glyph='cart' />);

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
            render = () => <Icon glyph='cart' ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('sap-icon--cart');
    });
});
