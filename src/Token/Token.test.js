import React from 'react';
import renderer from 'react-test-renderer';
import { Token } from './Token';

describe('<Token />', () => {
  test('create token component', () => {
    let component = renderer.create(<Token>Bibendum</Token>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(<Token className='blue'>Bibendum</Token>);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
