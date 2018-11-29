import React from 'react';
import renderer from 'react-test-renderer';
import { Token } from './Token';

describe('<Token />', () => {
  test('create token component', () => {
    const component = renderer.create(<Token>Bibendum</Token>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
