import { Identifier } from './Identifier';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Identifier />', () => {
    const defaultIcon = <Identifier glyph='washing-machine' size='s' />;
    const initials = (
        <Identifier label='Wendy Wallace' size='m'>
            WW
        </Identifier>
    );
    const circle = (
        <Identifier glyph='washing-machine' modifier='circle'
            size='m' />
    );
    const transparent = (
        <Identifier
            className='blue'
            glyph='washing-machine'
            modifier='transparent'
            size='m' />
    );
    const accentColor = (<Identifier color={9} glyph='money-bills'
        size='m' />);

    const bgImage = (
        <Identifier
            backgroundImageUrl='https://placeimg.com/400/400/nature'
            modifier='circle' />
    );

    test('Create identifier', () => {
        // create default icon
        let component = renderer.create(defaultIcon);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create initials icon
        component = renderer.create(initials);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create circle icon
        component = renderer.create(circle);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create transparent icon
        component = renderer.create(transparent);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create accent color icon
        component = renderer.create(accentColor);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create background image icon
        component = renderer.create(bgImage);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Identifier component', () => {
            const element = mount(<Identifier data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
