import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  Panel,
  PanelGrid,
  PanelBody,
  PanelHeader,
  PanelHead,
  PanelActions,
  PanelFilters,
  PanelFooter
} from './Panel';
import { Button } from '../Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  const panel = (
    <Panel>
      <PanelHeader>
        <PanelHead
          title={'Panel Header with Actions'}
          description="Panel Description"
        />
        <PanelActions>
          <Button compact glyph="add">
            Add New Button
          </Button>
        </PanelActions>
      </PanelHeader>
      <PanelFilters>
        <div>Panel Filters</div>
        <br />
      </PanelFilters>
      <PanelBody>
        <div>Panel Body</div>
      </PanelBody>
      <PanelFooter>Panel Footer</PanelFooter>
    </Panel>
  );
  test('create panel', () => {
    const component = renderer.create(panel);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
