import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Tabs, TabComponent } from './Tabs';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tabs />', () => {
  const tabComponent = (
      <TabComponent
          ids={[
        {
          id: '1',
          url: '#',
          name: 'Tab 1',
          content: 'Hello world',
          disabled: false
        },
        {
          id: '2',
          url: '#',
          name: 'Tab 2',
          content: 'Hello world 2',
          disabled: false
        },
        {
          id: '3',
          url: '#',
          name: 'Tab 3',
          content: 'Hello world 3',
          disabled: true
        }
      ]} />
  );

  const tabComponentWithClass = (
      <TabComponent
          className='blue'
          ids={[
        {
          id: '1',
          url: '#',
          name: 'Tab 1',
          content: 'Hello world',
          disabled: false
        },
        {
          id: '2',
          url: '#',
          name: 'Tab 2',
          content: 'Hello world 2',
          disabled: false
        },
        {
          id: '3',
          url: '#',
          name: 'Tab 3',
          content: 'Hello world 3',
          disabled: true
        }
      ]} />
  );

  const defaultTabs = <Tabs>{tabComponent}</Tabs>;
  const defaultTabsWithClass = <Tabs className='blue'>{tabComponent}</Tabs>;

  test('create tabs component', () => {
    let component = renderer.create(defaultTabs);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(defaultTabsWithClass);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(tabComponent);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(tabComponentWithClass);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('tab selection', () => {
    const wrapper = mount(tabComponent);

    // check selected tab
    expect(wrapper.state(['selectedTab'])).toEqual('1');

    wrapper
      .find('ul.fd-tabs li.fd-tabs__item a.fd-tabs__link')
      .at(1)
      .simulate('click');

    // check selected tab changed
    expect(wrapper.state(['selectedTab'])).toEqual('2');
  });
});
