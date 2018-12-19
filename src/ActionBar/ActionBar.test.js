import React from 'react';
import renderer from 'react-test-renderer';
import {
  ActionBar,
  ActionBarBack,
  ActionBarHeader,
  ActionBarActions
} from './ActionBar';

describe('<ActionBar />', () => {
  const basicActionBar = (
    <ActionBar>
      <ActionBarBack />
      <ActionBarHeader
        title={'Page Title'}
        description={'Action Bar Description'}
      />
      <ActionBarActions>
        <button>Button</button>
      </ActionBarActions>
    </ActionBar>
  );

  const mobileActionBar = (
    <ActionBar mobile={true}>
      <ActionBarBack />
      <ActionBarHeader
        title={'Page Title'}
        description={'Action Bar Description'}
      />
      <ActionBarActions>
        <button>Button</button>
      </ActionBarActions>
    </ActionBar>
  );

  const mobileActionBarWidthSet = (
    <ActionBar mobile={true} width='500px'>
      <ActionBarBack />
      <ActionBarHeader
        title={'Page Title'}
        description={'Action Bar Description'}
      />
      <ActionBarActions>
        <button>Button</button>
      </ActionBarActions>
    </ActionBar>
  );

  test('create basic Action Bar', () => {
    const component = renderer.create(basicActionBar);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('create basic mobile Action Bar', () => {
    let component = renderer.create(mobileActionBar);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(mobileActionBarWidthSet);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
