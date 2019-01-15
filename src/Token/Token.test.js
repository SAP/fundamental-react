import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Token } from './Token';

describe('<Token />', () => {
    test('create token component', () => {
        let component = renderer.create(<Token>Bibendum</Token>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(<Token className='blue'>Bibendum</Token>);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Token component', () => {
            const element = mount(<Token data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
