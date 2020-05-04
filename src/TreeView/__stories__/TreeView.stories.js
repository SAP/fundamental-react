/* eslint-disable react/no-multi-comp */
import React from 'react';
import Tree from '../_Tree';
import TreeBranch from '../_TreeBranch';
import TreeCol from '../_TreeCol';
import TreeHead from '../_TreeHead';
import TreeItem from '../_TreeItem';
import TreeRow from '../_TreeRow';
import TreeView from '../TreeView';

export default {
    title: 'Component API/TreeView',
    component: TreeView,
    subcomponents: { Tree, TreeBranch, TreeCol, TreeHead, TreeItem, TreeRow }
};


export const primary = () => (
    <TreeView>
        <TreeView.Tree>
            <TreeView.Item>
                <TreeView.Row>
                    <TreeView.Col>Row 1</TreeView.Col>
                </TreeView.Row>
            </TreeView.Item>
            <TreeView.Item>
                <TreeView.Row>
                    <TreeView.Col>Row 2</TreeView.Col>
                </TreeView.Row>
                <TreeView.Branch>
                    <TreeView.Item>
                        <TreeView.Row>
                            <TreeView.Col>Child 1</TreeView.Col>
                        </TreeView.Row>
                    </TreeView.Item>
                    <TreeView.Item>
                        <TreeView.Row>
                            <TreeView.Col>Child 2</TreeView.Col>
                        </TreeView.Row>
                    </TreeView.Item>
                </TreeView.Branch>
            </TreeView.Item>
            <TreeView.Item>
                <TreeView.Row>
                    <TreeView.Col>Row 3</TreeView.Col>
                </TreeView.Row>
                <TreeView.Branch>
                    <TreeView.Item>
                        <TreeView.Row>
                            <TreeView.Col>Child 1</TreeView.Col>
                        </TreeView.Row>
                        <TreeView.Branch>
                            <TreeView.Item>
                                <TreeView.Row>
                                    <TreeView.Col>Grandchild 1</TreeView.Col>
                                </TreeView.Row>
                            </TreeView.Item>
                            <TreeView.Item>
                                <TreeView.Row>
                                    <TreeView.Col>Grandchild 2</TreeView.Col>
                                </TreeView.Row>
                            </TreeView.Item>
                        </TreeView.Branch>
                    </TreeView.Item>
                </TreeView.Branch>
            </TreeView.Item>
        </TreeView.Tree>
    </TreeView>
);


export const complex = () => (
    <TreeView>
        <TreeView.Head>
            <TreeView.Col>Column Header 1</TreeView.Col>
            <TreeView.Col>Column Header 2</TreeView.Col>
            <TreeView.Col>Column Header 3</TreeView.Col>
            <TreeView.Col>Column Header 4</TreeView.Col>
        </TreeView.Head>
        <TreeView.Tree>
            <TreeView.Item>
                <TreeView.Row>
                    <TreeView.Col>Row 1</TreeView.Col>
                    <TreeView.Col>Data Col 2</TreeView.Col>
                    <TreeView.Col>Data Col 3</TreeView.Col>
                    <TreeView.Col>Data Col 4</TreeView.Col>
                </TreeView.Row>
                <TreeView.Branch>
                    <TreeView.Item>
                        <TreeView.Row>
                            <TreeView.Col>Child 1</TreeView.Col>
                            <TreeView.Col>Data Col 2</TreeView.Col>
                            <TreeView.Col>Data Col 3</TreeView.Col>
                            <TreeView.Col>Data Col 4</TreeView.Col>
                        </TreeView.Row>
                        <TreeView.Branch>
                            <TreeView.Item>
                                <TreeView.Row>
                                    <TreeView.Col>Grandchild 1</TreeView.Col>
                                    <TreeView.Col>Data Col 2</TreeView.Col>
                                    <TreeView.Col>Data Col 3</TreeView.Col>
                                    <TreeView.Col>Data Col 4</TreeView.Col>
                                </TreeView.Row>
                                <TreeView.Branch>
                                    <TreeView.Item>
                                        <TreeView.Row>
                                            <TreeView.Col>Great Grandchild 1</TreeView.Col>
                                            <TreeView.Col>Data Col 2</TreeView.Col>
                                            <TreeView.Col>Data Col 3</TreeView.Col>
                                            <TreeView.Col>Data Col 4</TreeView.Col>
                                        </TreeView.Row>
                                    </TreeView.Item>
                                </TreeView.Branch>
                            </TreeView.Item>
                        </TreeView.Branch>
                    </TreeView.Item>
                    <TreeView.Item>
                        <TreeView.Row>
                            <TreeView.Col>Child 2</TreeView.Col>
                            <TreeView.Col>Data Col 2</TreeView.Col>
                            <TreeView.Col>Data Col 3</TreeView.Col>
                            <TreeView.Col>Data Col 4</TreeView.Col>
                        </TreeView.Row>
                    </TreeView.Item>
                </TreeView.Branch>
            </TreeView.Item>
            <TreeView.Item>
                <TreeView.Row>
                    <TreeView.Col>Row 2</TreeView.Col>
                    <TreeView.Col>Data Col 2</TreeView.Col>
                    <TreeView.Col>Data Col 3</TreeView.Col>
                    <TreeView.Col>Data Col 4</TreeView.Col>
                </TreeView.Row>
                <TreeView.Branch>
                    <TreeView.Item>
                        <TreeView.Row>
                            <TreeView.Col>Child 1</TreeView.Col>
                            <TreeView.Col>Data Col 2</TreeView.Col>
                            <TreeView.Col>Data Col 3</TreeView.Col>
                            <TreeView.Col>Data Col 4</TreeView.Col>
                        </TreeView.Row>
                    </TreeView.Item>
                    <TreeView.Item>
                        <TreeView.Row>
                            <TreeView.Col>Child 2</TreeView.Col>
                            <TreeView.Col>Data Col 2</TreeView.Col>
                            <TreeView.Col>Data Col 3</TreeView.Col>
                            <TreeView.Col>Data Col 4</TreeView.Col>
                        </TreeView.Row>
                    </TreeView.Item>
                </TreeView.Branch>
            </TreeView.Item>
            <TreeView.Item>
                <TreeView.Row>
                    <TreeView.Col>Row 3</TreeView.Col>
                    <TreeView.Col>Data Col 2</TreeView.Col>
                    <TreeView.Col>Data Col 3</TreeView.Col>
                    <TreeView.Col>Data Col 4</TreeView.Col>
                </TreeView.Row>
            </TreeView.Item>
            <TreeView.Item>
                <TreeView.Row>
                    <TreeView.Col>Row 4</TreeView.Col>
                    <TreeView.Col>Data Col 2</TreeView.Col>
                    <TreeView.Col>Data Col 3</TreeView.Col>
                    <TreeView.Col>Data Col 4</TreeView.Col>
                </TreeView.Row>
                <TreeView.Branch>
                    <TreeView.Item>
                        <TreeView.Row>
                            <TreeView.Col>Child 1</TreeView.Col>
                            <TreeView.Col>Data Col 2</TreeView.Col>
                            <TreeView.Col>Data Col 3</TreeView.Col>
                            <TreeView.Col>Data Col 4</TreeView.Col>
                        </TreeView.Row>
                    </TreeView.Item>
                </TreeView.Branch>
            </TreeView.Item>
        </TreeView.Tree>
    </TreeView>
);

complex.story = {
    parameters: {
        docs: {
            storyDescription: 'This is an example of a tree view with a header, multiple levels, multiple columns and actions.'
        }
    }
};

export const richTreeView = () => (
    <TreeView>
        <TreeView.Head>
            <TreeView.Col>Column Header 1</TreeView.Col>
            <TreeView.Col>Column Header 2</TreeView.Col>
            <TreeView.Col>Column Header 3</TreeView.Col>
            <TreeView.Col>Column Header 4</TreeView.Col>
        </TreeView.Head>
        <TreeView.Tree>
            <TreeView.Item>
                <TreeView.Row>
                    <TreeView.Col>Row 1</TreeView.Col>
                </TreeView.Row>
                <TreeView.Branch>
                    <TreeView.Item>
                        <TreeView.Row>
                            <TreeView.Col />
                            <TreeView.Col><a href='http://www.google.com'>Google</a></TreeView.Col>
                            <TreeView.Col><a href='http://www.bing.com'>Bing</a></TreeView.Col>
                            <TreeView.Col><a href='http://www.yahoo.com'>Yahoo</a></TreeView.Col>
                        </TreeView.Row>
                    </TreeView.Item>
                </TreeView.Branch>
            </TreeView.Item>
        </TreeView.Tree>
    </TreeView>
);
