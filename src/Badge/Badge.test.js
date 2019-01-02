import React from 'react';
import renderer from 'react-test-renderer';
import { Badge, Label, Status, Counter } from './Badge';

describe('<Badge />', () => {
  const defaultBadge = <Badge>Default</Badge>;
  const typeBadge = <Badge type='success'>Default</Badge>;

  const defaultPill = <Badge modifier='pill'>Default</Badge>;
  const typePill = (
      <Badge modifier='pill' type='success'>
      Default
      </Badge>
  );

  const defaultFilledBadge = (
      <Badge className='blue' modifier='filled'>
      Default
      </Badge>
  );
  const typeFillBadge = (
      <Badge modifier='filled' type='success'>
      Default
      </Badge>
  );

  const defaultLabel = <Label>Default</Label>;
  const typeLabel = (
      <Label className='blue' type='success'>
      Default
      </Label>
  );

  const defaultStatus = <Status>Default</Status>;
  const typeStatus = (
      <Status className='blue' type='success'>
      Default
      </Status>
  );
  const iconStatus = <Status glyph='history'>Default</Status>;

  const defaultCounter = <Counter>5</Counter>;
  const notificationCounter = (
      <Counter className='blue' notification>
      5
      </Counter>
  );

  test('create badges, pills and filled badges', () => {
    // create default badge
    let component = renderer.create(defaultBadge);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create success type badge
    component = renderer.create(typeBadge);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create default pill
    component = renderer.create(defaultPill);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create success type pill
    component = renderer.create(typePill);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create filled default badge
    component = renderer.create(defaultFilledBadge);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create filled success type badge
    component = renderer.create(typeFillBadge);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create default counter
    component = renderer.create(defaultCounter);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create counter with notification
    component = renderer.create(notificationCounter);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('create label', () => {
    // create default label
    let component = renderer.create(defaultLabel);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create success type label
    component = renderer.create(typeLabel);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('create status', () => {
    // create default status
    let component = renderer.create(defaultStatus);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create success type status
    component = renderer.create(typeStatus);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create icon status
    component = renderer.create(iconStatus);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
