import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './Tab';

describe('<Tabs />', () => {
    const mockOnClick = jest.fn();

    const defaultTab = (
        <Tab
            id='1'
            onClick={mockOnClick}
            title='Tab 1' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore et ducimus veritatis officiis amet ? Vitae officia optio dolor exercitationem incidunt magnam non, suscipit, illo quisquam numquam fugiat ? Debitis, delectus sequi ?
        </Tab>);

    const disabledTab = (
        <Tab
            disabled
            id='3'
            title='Tab 3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Tab>);

    const glyphTab = (
        <Tab glyph='cart' id='4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam ipsa cumque soluta debitis accusantium iste alias quas vel perferendis voluptatibus quod asperiores praesentium quaerat, iusto repellendus nulla, maiores eius.
        </Tab>);


    test('create tabs component', () => {
        let component = renderer.create(defaultTab);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(disabledTab);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(glyphTab);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('onClick of tab', () => {
        const wrapper = mount(defaultTab);
        wrapper.find('a').simulate('click');
        expect(wrapper.prop('onClick')).toBeCalledTimes(1);
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Tab component', () => {
            const element = mount(<Tab data-sample='Sample' id='testId' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tab component\'s li elements', () => {
            const element = mount(<Tab id='testId' {...{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('li').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tab component\'s a elements', () => {
            const element = mount(<Tab id='1' linkProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('li a').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('forwards the ref', () => {
            let ref;
            class Test extends React.Component {
                constructor(props) {
                    super(props);
                    ref = React.createRef();
                }
                render = () => <Tab ref={ref} />;
            }
            mount(<Test />);
            expect(ref.current.tagName).toEqual('LI');
            expect(ref.current.className).toEqual('fd-tabs__item');
        });
    });
});
