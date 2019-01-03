import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Image } from './Image';

Enzyme.configure({ adapter: new Adapter() });

describe('<Image />', () => {
  const image = (
      <Image
          size='s'
          className='blue'
          photo='https://placeimg.com/400/400/nature' />
  );
  const circleImage = (
      <Image type='circle' size='m'
          photo='https://placeimg.com/400/400/nature' />
  );
  test('create image', () => {
    let component = renderer.create(image);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(circleImage);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
