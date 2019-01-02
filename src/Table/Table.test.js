import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Table } from './Table';

Enzyme.configure({ adapter: new Adapter() });

describe('<Table />', () => {
  const simpleTable = (
      <Table
          headers={[
        'Column Header 1',
        'Column Header 2',
        'Column Header 3',
        'Column Header 4'
      ]}
          tableData={[
        {
          rowData: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
        },
        {
          rowData: ['Data 5', 'Data 6', 'Data 7', 'Data 8']
        }
      ]} />
  );

  const simpleTableWithClass = (
      <Table
          className='blue'
          headers={[
        'Column Header 1',
        'Column Header 2',
        'Column Header 3',
        'Column Header 4'
      ]}
          tableData={[
        {
          rowData: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
        },
        {
          rowData: ['Data 5', 'Data 6', 'Data 7', 'Data 8']
        }
      ]} />
  );

  test('create table component', () => {
    let component = renderer.create(simpleTable);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(simpleTableWithClass);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
