import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Tabs, Tab } from './index';

import { writeFile } from 'fs';
import { JsxEmit } from 'typescript';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tabs />', () => {
  function getTabs(additionalProps = {}) {
    return (
      <Tabs {...additionalProps}>
        <Tab
          key={'1'}
          title={'Tab 1'}
        >
          Hello World
      </Tab>
        <Tab
          key={'2'}
          title={'Tab 2'}
        >
          Hello World 2
      </Tab>
        <Tab
          key={'3'}
          title={'Tab 3'}
          disabled={false}
        >
          Hello World
      </Tab>
      </Tabs>
    );
  }

  test('create tabs component', () => {
    const tabs = getTabs();
    let component = renderer.create(tabs);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(tabs);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('tab selection', () => {
    const onChangeFn = jest.fn();
    const wrapper = mount(getTabs({ onChange: onChangeFn }));

    expect((wrapper.state() as any)['activeKey']).toEqual('1');

    wrapper
      .find('ul.fd-tabs li.fd-tabs__item a.fd-tabs__link')
      .at(1)
      .simulate('click');

    // check selected tab changed
    expect((wrapper.state() as any).activeKey).toEqual('2');
    expect(onChangeFn).toHaveBeenCalledWith('2', '1');
  });
});
