import React from 'react';
import renderer from 'react-test-renderer';
import {
  Panel,
  PanelGrid,
  PanelBody,
  PanelHeader,
  PanelHead,
  PanelActions,
  PanelFilters,
  PanelFooter,
  PanelContent
} from './Panel';
import { Button } from '../Button/Button';

describe('<Panel />', () => {
  const panel = (
      <Panel>
          <PanelHeader>
              <PanelHead
                  title={'Panel Header with Actions'}
                  description='Panel Description' />
              <PanelActions>
                  <Button compact glyph='add'>
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
          <PanelContent>
              <div>Panel Content</div>
          </PanelContent>
          <PanelFooter>Panel Footer</PanelFooter>
      </Panel>
  );

  const panelWithClass = (
      <Panel className='blue'>
          <PanelHeader className='blue'>
              <PanelHead
                  className='blue'
                  title={'Panel Header with Actions'}
                  description='Panel Description' />
              <PanelActions className='blue'>
                  <Button compact glyph='add'>
            Add New Button
                  </Button>
              </PanelActions>
          </PanelHeader>
          <PanelFilters className='blue'>
              <div>Panel Filters</div>
              <br />
          </PanelFilters>
          <PanelBody className='blue'>
              <div>Panel Body</div>
          </PanelBody>
          <PanelContent className='blue'>
              <div>Panel Content</div>
          </PanelContent>
          <PanelFooter className='blue'>Panel Footer</PanelFooter>
      </Panel>
  );

  const panelGrid = (
      <PanelGrid className='blue'>
          <Panel colSpan={2}>
              <PanelHead title={'Panel Header with Actions'} />
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelHead description='Panel Description' />
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelHead />
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
      </PanelGrid>
  );

  const panelGridNoGap = (
      <PanelGrid nogap>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
      </PanelGrid>
  );

  const panelGridSpan = (
      <PanelGrid cols={2}>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
          <Panel>
              <PanelBody>Panel</PanelBody>
          </Panel>
      </PanelGrid>
  );

  test('create panels', () => {
    // create panel
    let component = renderer.create(panel);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // panel grid
    component = renderer.create(panelGrid);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // panel with class
    component = renderer.create(panelWithClass);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // panel with span
    component = renderer.create(panelGridSpan);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // panel with no gap
    component = renderer.create(panelGridNoGap);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
