import Image from './Image';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Image />', () => {
    const image = (
        <Image
            className='blue'
            photo='https://placeimg.com/400/400/nature'
            size='s' />
    );
    const circleImage = (
        <Image photo='https://placeimg.com/400/400/nature' size='m'
            type='circle' />
    );
    test('create image', () => {
        let component = renderer.create(image);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(circleImage);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Image component', () => {
            const element = mount(
                <Image
                    data-sample='Sample'
                    photo='https://placeimg.com/400/400/nature'
                    size='s' />
            );

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
            render = () => (<Image photo='www.image.com' ref={ref}
                size='m' />);
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('SPAN');
        expect(ref.current.className).toEqual('fd-image--m');
    });
});
