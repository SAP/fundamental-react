import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemActions,
  ListGroupItemCheckbox
} from './ListGroup';
import { Button } from '../Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<ListGroup />', () => {
  const defaultListGroup = (
      <ListGroup className='blue'>
          <ListGroupItem className='blue'>
              <a style={{ cursor: 'pointer' }}>List item 1</a>
          </ListGroupItem>
          <ListGroupItem>List item 2</ListGroupItem>
          <ListGroupItem>
              <a style={{ cursor: 'pointer' }}>List item3</a>
          </ListGroupItem>
          <ListGroupItem>List item 4</ListGroupItem>
          <ListGroupItem>
        List item 1
              <ListGroupItemActions className='blue'>
                  <Button type='standard' glyph='edit' />
              </ListGroupItemActions>
          </ListGroupItem>
      </ListGroup>
  );
  const listGroupAction = (
      <ListGroup>
          <ListGroupItem>
        List item 1
              <ListGroupItemActions>
                  <Button type='standard' glyph='edit' />
              </ListGroupItemActions>
          </ListGroupItem>
      </ListGroup>
  );

  const listGroupCheckbox = (
      <ListGroup>
          <ListGroupItem>
              <ListGroupItemCheckbox>List item 1</ListGroupItemCheckbox>
          </ListGroupItem>
      </ListGroup>
  );

  test('create list group', () => {
    // create default list group
    let component = renderer.create(defaultListGroup);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // list group with action
    component = renderer.create(listGroupAction);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // list group with checkbox
    component = renderer.create(listGroupCheckbox);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
