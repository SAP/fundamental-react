import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Identifier } from './Identifier';

describe('<Identifier />', () => {
    const defaultIcon = <Identifier size='s' glyph='washing-machine' />;
    const initials = (
        <Identifier size='m' label='Wendy Wallace'>
            WW
        </Identifier>
    );
    const circle = (
        <Identifier size='m' glyph='washing-machine'
            modifier='circle' />
    );
    const transparent = (
        <Identifier
            glyph='washing-machine'
            className='blue'
            modifier='transparent'
            size='m' />
    );
    const accentColor = (<Identifier size='m' glyph='money-bills'
        color={9} />);

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
