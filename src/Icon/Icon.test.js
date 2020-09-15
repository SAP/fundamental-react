import Icon from './Icon';
import { mount } from 'enzyme';
import React from 'react';

describe('<Icon />', () => {
    const mockOnClick = jest.fn();

    const defaultProps = { ariaHidden: true, glyph: 'cart' };
    const defaultIcon = <Icon {...defaultProps} />;
    const clickIcon = <Icon {...defaultProps} onClick={mockOnClick} />;
    const iconWithSize = <Icon {...defaultProps} size='s' />;
    const ariaLabelIcon = <Icon ariaLabel='Add to cart' glyph='cart' />;
    const propSpreadIcon = <Icon {...defaultProps} data-sample='Sample' />;

    test('click on icon', () => {
        let wrapper = mount(clickIcon);
        wrapper.find('.sap-icon--cart').simulate('click');
        expect(wrapper.prop('onClick')).toBeCalledTimes(1);

        wrapper = mount(iconWithSize);
        wrapper.find('.sap-icon--cart').simulate('click');
        expect(wrapper.prop('onClick')).toBeUndefined;
    });

    test('passes aria-label prop', () => {
        const element = mount(ariaLabelIcon);
        expect(element.getDOMNode().getAttribute('aria-label')).toBe('Add to cart');
    });

    test('passes the aria-hidden prop', () => {
        const element = mount(defaultIcon);
        expect(element.getDOMNode().getAttribute('aria-hidden')).toBe('true');
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Icon component', () => {
            const element = mount(propSpreadIcon);

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
            render = () => <Icon {...defaultProps} ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('I');
        expect(ref.current.className).toEqual('sap-icon--cart');
    });
});
