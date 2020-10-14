import { mount } from 'enzyme';
import React from 'react';
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

    test('onClick of tab', () => {
        const wrapper = mount(defaultTab);
        wrapper.find('a').simulate('click');
        expect(wrapper.prop('onClick')).toBeCalledTimes(1);
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Tab component', () => {
            const element = mount(
                <Tab data-sample='Sample' id='testId'
                    title='Tab 1' />
            );

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tab component\'s li elements', () => {
            const element = mount(
                <Tab id='testId' title='Tab 1'
                    {...{ 'data-sample': 'Sample' }} />
            );

            expect(
                element.find('li').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tab component\'s a elements', () => {
            const element = mount(
                <Tab id='1' linkProps={{ 'data-sample': 'Sample' }}
                    title='Tab 1' />
            );

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
                render = () => <Tab ref={ref} title='Tab 1' />;
            }
            mount(<Test />);
            expect(ref.current.tagName).toEqual('LI');
            expect(ref.current.className).toEqual('fd-tabs__item');
        });
    });
});
