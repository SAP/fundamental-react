import { mount } from 'enzyme';
import React from 'react';
import Time from './Time';

describe('<Time />', () => {
    const defaultTime = <Time />;
    const meridiemTime = <Time name='meridiem' />;
    const twelveHour = <Time format12Hours />;
    const timeMeridiemSet = (
        <Time
            format12Hours={false}
            name='meridiem'
            time={{ hour: 22, minute: 34, second: 12, meridiem: 0 }} />
    );

    test('time number up click', () => {
        const wrapper = mount(twelveHour);

        // hour timer click up
        expect(wrapper.children().state('time').hour).toEqual('12');
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(1);

        // minute timer click up
        expect(wrapper.children().state('time').minute).toEqual('00');
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.children().state('time').minute).toEqual(1);
    });

    test('time number up merdiem click', () => {
        const wrapper = mount(timeMeridiemSet);

        // hour timer click up
        expect(wrapper.children().state('time').hour).toEqual(22);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(23);

        // minute timer click up
        expect(wrapper.children().state('time').minute).toEqual(34);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.children().state('time').minute).toEqual(35);
    });

    test('time number down click on merdiem time', () => {
        const wrapper = mount(meridiemTime);
        // hour timer click down
        expect(wrapper.children().state('time').hour).toEqual('12');
        // 3 down clicks
        for (let i = 0; i < 3; i += 1) {
            wrapper
                .find(
                    'button.fd-button--transparent'
                )
                .at(0)
                .simulate('click');
        }
        expect(wrapper.children().state('time').hour).toEqual(9);

        // minute timer click down
        expect(wrapper.children().state('time').minute).toEqual('00');
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.children().state('time').minute).toEqual(59);
    });

    test('time number down click', () => {
        let wrapper = mount(twelveHour);

        // hour timer click down
        expect(wrapper.children().state('time').hour).toEqual('12');
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(11);

        // minute timer click down
        expect(wrapper.children().state('time').minute).toEqual('00');
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.children().state('time').minute).toEqual(59);
    });

    // Down arrow clicks
    test('clicking down on meridiem', () => {
        let wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 0, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(7)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(0);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(0);
    });

    test('clicking down on hours', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 0, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(23);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(1);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(12);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(0);
        expect(wrapper.children().state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(12);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(11);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(0);
        expect(wrapper.children().state('time').meridiem).toEqual(1);
    });

    test('clicking down on minutes', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(0);
        expect(wrapper.children().state('time').minute).toEqual(59);
        expect(wrapper.children().state('time').second).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(12);
        expect(wrapper.children().state('time').minute).toEqual(59);
        expect(wrapper.children().state('time').second).toEqual(0);
        expect(wrapper.children().state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(11);
        expect(wrapper.children().state('time').minute).toEqual(59);
        expect(wrapper.children().state('time').second).toEqual(0);
        expect(wrapper.children().state('time').meridiem).toEqual(1);
    });

    test('clicking down seconds', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 0, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').second).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(4)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(23);
        expect(wrapper.children().state('time').minute).toEqual(59);
        expect(wrapper.children().state('time').second).toEqual(59);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').second).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(4)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(12);
        expect(wrapper.children().state('time').minute).toEqual(59);
        expect(wrapper.children().state('time').second).toEqual(59);
        expect(wrapper.children().state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').second).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(4)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(11);
        expect(wrapper.children().state('time').minute).toEqual(59);
        expect(wrapper.children().state('time').second).toEqual(59);
        expect(wrapper.children().state('time').meridiem).toEqual(1);
    });

    // Up arrow clicks
    test('clicking up on meridiem', () => {
        let wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 0, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(6)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(0);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(0);
    });

    test('clicking up on hours', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 0, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(1);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 23, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(23);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(1);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(2);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(0);
        expect(wrapper.children().state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(12);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(1);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(0);
        expect(wrapper.children().state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 11, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(11);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(12);
        expect(wrapper.children().state('time').meridiem).toEqual(1);
    });

    test('clicking up on minutes', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(1);
        expect(wrapper.children().state('time').minute).toEqual(1);
        expect(wrapper.children().state('time').second).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 23, minute: 59, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').minute).toEqual(59);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(0);
        expect(wrapper.children().state('time').minute).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(1);
        expect(wrapper.children().state('time').minute).toEqual(1);
        expect(wrapper.children().state('time').second).toEqual(0);
        expect(wrapper.children().state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 59, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(1);
        expect(wrapper.children().state('time').minute).toEqual(59);

        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(1);
        expect(wrapper.children().state('time').minute).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 11, minute: 59, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').hour).toEqual(11);
        expect(wrapper.children().state('time').minute).toEqual(59);

        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(12);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').meridiem).toEqual(1);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(12);
        expect(wrapper.children().state('time').minute).toEqual(1);
        expect(wrapper.children().state('time').second).toEqual(0);
        expect(wrapper.children().state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 59, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').minute).toEqual(59);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(12);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(0);
        expect(wrapper.children().state('time').meridiem).toEqual(0);
    });

    test('clicking up seconds', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 0, minute: 58, second: 59, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').second).toEqual(59);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(4)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(0);
        expect(wrapper.children().state('time').minute).toEqual(58);
        expect(wrapper.children().state('time').second).toEqual(58);

        wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 0, minute: 59, second: 59, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').second).toEqual(59);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(5)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(1);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(0);

        // expect(wrapper.children().state('time').second).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(4)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(0);
        expect(wrapper.children().state('time').minute).toEqual(59);
        expect(wrapper.children().state('time').second).toEqual(59);
        expect(wrapper.children().state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        );
        expect(wrapper.children().state('time').second).toEqual(0);
        wrapper
            .find(
                'button.fd-button--transparent'
            )
            .at(5)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(12);
        expect(wrapper.children().state('time').minute).toEqual(0);
        expect(wrapper.children().state('time').second).toEqual(1);
        expect(wrapper.children().state('time').meridiem).toEqual(0);
    });

    test('click a time value', () => {
        const wrapper = mount(defaultTime);
        wrapper
            .find('.fd-time__unit')
            .at(0)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(9);
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Time component', () => {
            const element = mount(<Time data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
