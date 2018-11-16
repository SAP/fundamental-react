import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Tree } from './Tree';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tree />', () => {
  const multiLevelTree = (
    <Tree
      headers={[
        'Column Header',
        'Column Header 1 ',
        'Column Header 2',
        'Status'
      ]}
      treeData={[
        {
          id: '1',
          hasChildren: true,
          values: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
          children: [
            {
              id: '2',
              hasChildren: true,
              values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
              children: [
                {
                  id: '3',
                  hasChildren: true,
                  values: [
                    'Grandchild 1',
                    'Data Col 2',
                    'Data Col 3',
                    'INACTIVE'
                  ],
                  children: [
                    {
                      id: '4',
                      hasChildren: false,
                      values: [
                        'GreatGrandchild 1',
                        'Data Col 2',
                        'Data Col 3',
                        'INACTIVE'
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: '5',
              hasChildren: false,
              values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
            }
          ]
        },

        {
          id: '6',
          hasChildren: true,
          values: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
          children: [
            {
              id: '7',
              hasChildren: false,
              values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
            },
            {
              id: '8',
              hasChildren: false,
              values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
            }
          ]
        },

        {
          id: '9',
          hasChild: true,
          values: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE']
        },

        {
          id: '10',
          hasChildren: true,
          values: ['Row 4', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
          children: [
            {
              id: '11',
              hasChildren: false,
              values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
            }
          ]
        }
      ]}
    />
  );

  const richTree = (
    <Tree
      headers={[
        'Column Header',
        'Column Header 1 ',
        'Column Header 2',
        'Status'
      ]}
      treeData={[
        {
          id: '1',
          hasChildren: true,
          values: ['First Level', ' ', ' ', ' '],
          children: [
            {
              id: '2',
              hasChildren: false,
              values: [
                {
                  display: ''
                },
                {
                  displayText: 'Google',
                  linkUrl: 'http://google.com'
                },
                {
                  displayText: 'Bing',
                  linkUrl: 'http://bing.com'
                },
                {
                  displayText: 'Yahoo',
                  linkUrl: 'http://yahoo.com'
                }
              ]
            }
          ]
        }
      ]}
    />
  );

  test('create tree component', () => {
    // multi-level tree
    let component = renderer.create(multiLevelTree);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // rich tree
    component = renderer.create(richTree);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
