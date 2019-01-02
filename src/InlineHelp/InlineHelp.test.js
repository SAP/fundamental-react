import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { InlineHelp } from './InlineHelp';

Enzyme.configure({ adapter: new Adapter() });

describe('<InlineHelp />', () => {
  const handleClick = jest.fn();
  const defaultInlineHelp = (
      <InlineHelp
          className='blue'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing.'
          placement='bottom-right' />
  );

  const inlineHelpBottomLeft = (
      <InlineHelp
          text='Lorem ipsum dolor sit amet, consectetur adipiscing.'
          placement='bottom-left' />
  );

  const inlineHelpBottomCenter = (
      <InlineHelp
          text='Lorem ipsum dolor sit amet, consectetur adipiscing.'
          placement='bottom-center' />
  );

  const inlineHelpLeft = (
      <InlineHelp
          text='Lorem ipsum dolor sit amet, consectetur adipiscing.'
          placement='left' />
  );

  const inlineHelpRight = (
      <InlineHelp
          text='Lorem ipsum dolor sit amet, consectetur adipiscing.'
          placement='right' />
  );

  test('create default InlineHelp component', () => {
    const component = renderer.create(defaultInlineHelp);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('create Bottom Left InlineHelp component', () => {
    const component = renderer.create(inlineHelpBottomLeft);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('create Bottom Center InlineHelp component', () => {
    const component = renderer.create(inlineHelpBottomCenter);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('create Left InlineHelp component', () => {
    const component = renderer.create(inlineHelpLeft);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('create Right InlineHelp component', () => {
    const component = renderer.create(inlineHelpRight);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
