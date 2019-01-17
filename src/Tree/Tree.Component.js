import React from 'react';
import { Tree } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const TreeComponent = () => {
    const treeCode = `headers={['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status']}
    treeData={[
        {
            id: '1', hasChildren: true,
            values: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            children: [
                {
                    id: '2', hasChildren: true,
                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                    children: [
                        {
                            id: '3', hasChildren: true,
                            values: ['Grandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    id: '4', hasChildren: false,
                                    values: ['GreatGrandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '5', hasChildren: false,
                    values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                }
            ]
        },



        {
            id: '6', hasChildren: true,
            values: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
            children: [
                {
                    id: '7', hasChildren: false,
                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                },
                {
                    id: '8', hasChildren: false,
                    values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                }
            ]
        },



        {
            id: '9', hasChild: true,
            values: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE']
        },

        {
            id: '10', hasChildren: true,
            values: ['Row 4', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            children: [
                {
                    id: '11', hasChildren: false,
                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                }
            ]
        }
    ]}`;

    const treeCodeUrl = `headers={['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status']}
    treeData={[
        {
            id: '1', hasChildren: true,
            values: ['First Level', ' ', ' ', ' '],
            children: [
                {
                    id: '2', hasChildren: false,
                    values: [{
                        display: ''
                    },{
                        displayText: 'Google',
                        linkUrl: 'http://google.com',
                    },
                    {
                        displayText: 'Bing',
                        linkUrl: 'http://bing.com'
                    },
                    {
                        displayText: 'Yahoo',
                        linkUrl: 'http://yahoo.com'
                    }]
                }
            ]
        }
    ]}`;


    return (
        <div>
            <Header>Tree</Header>
            <Description>A tree is used to display data in a visual hierarchy. Items that contain additional items are called nodes, while items that do not contain any other items are called leaves. If available, a single topmost node is called a root node. Apart from the hierarchical structure of its nodes and leaves, a tree is similar to a list.</Description>
            <Import module='Tree' path='/fundamental-react/src/' />

            <Separator />

            <Properties properties={[
                { name: 'headers', description: 'array of strings for the column headers of the tree' },
                { name: 'treeData', description: 'array of objects that contain several properties, id (the id of the row), values (an array of strings containing data for each column in the row), hasChildren(a boolean value whether the row contains children or not) and children (an array of objects containing additional rows).' }
            ]} type='Inputs' />

            <Separator />

            <h2>Tree with multiple levels and actions</h2>
            <DocsTile>
                <Tree
                    headers={['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status']}
                    treeData={[
                        {
                            id: '1', hasChildren: true,
                            values: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    id: '2', hasChildren: true,
                                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                                    children: [
                                        {
                                            id: '3', hasChildren: true,
                                            values: ['Grandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                                            children: [
                                                {
                                                    id: '4', hasChildren: false,
                                                    values: ['GreatGrandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: '5', hasChildren: false,
                                    values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        },



                        {
                            id: '6', hasChildren: true,
                            values: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
                            children: [
                                {
                                    id: '7', hasChildren: false,
                                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                },
                                {
                                    id: '8', hasChildren: false,
                                    values: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        },



                        {
                            id: '9', hasChild: true,
                            values: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                        },

                        {
                            id: '10', hasChildren: true,
                            values: ['Row 4', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    id: '11', hasChildren: false,
                                    values: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        }
                    ]} />

            </DocsTile>
            <DocsText>{treeCode}</DocsText>
            <Separator />

            <h2>Rich Tree</h2>
            <Description>This is an example of a tree with rich cells, where the rowData is an array of objects, where each object can have one or both of the following properties:</Description>
            <Properties properties={[
                { name: 'displayText', description: 'The text to display in the cell. If omitted, the link url will be displayed.' },
                { name: 'linkUrl', description: 'If provided, this is the URL the link will navigate to.' }

            ]} type='Properties' />
            <Properties properties={[
                { name: 'headers', description: 'Array of strings for the column headers of the tree' },
                { name: 'treeData', description: '	Array of objects that contain several properties, id(the id of the row), hasChildren(a boolean value whether the row contains children or not), values (an array of objects containing data for each column in the row), and children (an array of objects containing additional rows).' }

            ]} type='Inputs' />
            <Separator />
            <DocsTile>
                <Tree

                    headers={['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status']}
                    treeData={[
                        {
                            id: '1', hasChildren: true,
                            values: ['First Level', ' ', ' ', ' '],
                            children: [
                                {
                                    id: '2', hasChildren: false,
                                    values: [{
                                        display: ''
                                    }, {
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
                                    }]
                                }
                            ]
                        }
                    ]} />

            </DocsTile>
            <DocsText>{treeCodeUrl}</DocsText>

        </div>
    );
};

