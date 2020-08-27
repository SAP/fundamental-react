import { mount } from 'enzyme';
import React from 'react';
import Title from './Title';

describe('<Title />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the Title component', () => {
            const element = mount(
                <Title
                    data-sample='Sample'
                    level={1} />
            );

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    describe('Title level', () => {
        test('should set the tagname of the element', () => {
            const element = mount(
                <Title
                    data-sample='Sample'
                    level={1} />
            );

            expect(element.getDOMNode().tagName).toBe('H1');
        });

        test('should be used as the visual style by default', () => {
            const element = mount(
                <Title
                    data-sample='Sample'
                    level={1} />
            );

            expect(
                element.getDOMNode().attributes.class.value
            ).toBe('fd-title fd-title--h1');
        });

        test('style should be overriden if levelStyle prop is passed', () => {
            const element = mount(
                <Title
                    data-sample='Sample'
                    level={1}
                    levelStyle={3} />
            );

            expect(
                element.getDOMNode().attributes.class.value
            ).toBe('fd-title fd-title--h3');
        });
    });

    describe('Wrap class name', () => {
        test('should be added if the wrap prop is set to true', () => {
            const element = mount(
                <Title
                    data-sample='Sample'
                    level={1}
                    wrap />
            );

            expect(
                element.getDOMNode().attributes.class.value
            ).toBe('fd-title fd-title--h1 fd-title--wrap');
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Title level={1} ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('H1');
        expect(ref.current.className).toEqual('fd-title fd-title--h1');
    });
});
