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
      <ActionBar className='blue'>
          <ActionBarBack className='blue' />
          <ActionBarHeader
              className='blue'
              title={'Page Title'}
              description={'Action Bar Description'} />
          <ActionBarActions className='blue'>
              <button>Button</button>
          </ActionBarActions>
      </ActionBar>
  );

  const basicActionBarNoClass = (
      <ActionBar>
          <ActionBarBack className='blue' />
          <ActionBarHeader
              className='blue'
              title={'Page Title'}
              description={'Action Bar Description'} />
          <ActionBarActions className='blue'>
              <button>Button</button>
          </ActionBarActions>
      </ActionBar>
  );

  const mobileActionBar = (
      <ActionBar className='blue' mobile>
          <ActionBarBack />
          <ActionBarHeader
              title={'Page Title'}
              description={'Action Bar Description'} />
          <ActionBarActions>
              <button>Button</button>
          </ActionBarActions>
      </ActionBar>
  );

  const mobileActionBarWidthSet = (
      <ActionBar mobile width='500px'>
          <ActionBarBack />
          <ActionBarHeader
              title={'Page Title'}
              description={'Action Bar Description'} />
          <ActionBarActions>
              <button>Button</button>
          </ActionBarActions>
      </ActionBar>
  );

  test('create basic Action Bar', () => {
    let component = renderer.create(basicActionBar);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(basicActionBarNoClass);
    tree = component.toJSON();
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
