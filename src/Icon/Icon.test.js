import Icon from './Icon';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

describe('<Icon />', () => {
    const mockOnClick = jest.fn();
    const defaultIcon = (
        <Icon
            className='blue'
            glyph='cart'
            onClick={mockOnClick} />
    );
    const iconWithSize = <Icon glyph='cart' size='s' />;

    test('create icon', () => {
        // default icon
        let component = renderer.create(defaultIcon);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // icon with different size
        component = renderer.create(iconWithSize);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('click on icon', () => {
        let wrapper = mount(defaultIcon);
        wrapper.find('.sap-icon--cart').simulate('click');
        expect(wrapper.prop('onClick')).toBeCalledTimes(1);

        wrapper = shallow(iconWithSize);
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
});
