import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { Tree, TreeCell, TreeHeader, TreeList, TreeRow } from '../';

export const TreeComponent = () => {
    const treeCode = `
<Tree>
    <TreeHeader>
        <TreeCell>Column Header 1</TreeCell>
        <TreeCell>Column Header 2</TreeCell>
        <TreeCell>Column Header 3</TreeCell>
        <TreeCell>Column Header 4</TreeCell>
    </TreeHeader>
    <TreeList>
        <TreeRow>
            <TreeCell>Row 1</TreeCell>
            <TreeCell>Data Col 2</TreeCell>
            <TreeCell>Data Col 3</TreeCell>
            <TreeCell>Data Col 4</TreeCell>
            <TreeList>
                <TreeRow>
                    <TreeCell>Child 1</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                    <TreeList>
                        <TreeRow>
                            <TreeCell>Grandchild 1</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                            <TreeList>
                                <TreeRow>
                                    <TreeCell>Great Grandchild 1</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                </TreeRow>
                            </TreeList>
                        </TreeRow>
                    </TreeList>
                </TreeRow>
                <TreeRow>
                    <TreeCell>Child 2</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                </TreeRow>
            </TreeList>
        </TreeRow>
        <TreeRow>
            <TreeCell>Row 2</TreeCell>
            <TreeCell>Data Col 2</TreeCell>
            <TreeCell>Data Col 3</TreeCell>
            <TreeCell>Data Col 4</TreeCell>
            <TreeList>
                <TreeRow>
                    <TreeCell>Child 1</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                </TreeRow>
                <TreeRow>
                    <TreeCell>Child 2</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                </TreeRow>
            </TreeList>
        </TreeRow>
        <TreeRow>
            <TreeCell>Row 3</TreeCell>
            <TreeCell>Data Col 2</TreeCell>
            <TreeCell>Data Col 3</TreeCell>
            <TreeCell>Data Col 4</TreeCell>
        </TreeRow>
        <TreeRow>
            <TreeCell>Row 4</TreeCell>
            <TreeCell>Data Col 2</TreeCell>
            <TreeCell>Data Col 3</TreeCell>
            <TreeCell>Data Col 4</TreeCell>
            <TreeList>
                <TreeRow>
                    <TreeCell>Child 1</TreeCell>
                    <TreeCell>Data Col 2</TreeCell>
                    <TreeCell>Data Col 3</TreeCell>
                    <TreeCell>Data Col 4</TreeCell>
                </TreeRow>
            </TreeList>
        </TreeRow>
    </TreeList>
</Tree>`;

    const treeCodeRich = `
<Tree>
    <TreeHeader>
        <TreeCell>Column Header 1</TreeCell>
        <TreeCell>Column Header 2</TreeCell>
        <TreeCell>Column Header 3</TreeCell>
        <TreeCell>Column Header 4</TreeCell>
    </TreeHeader>
    <TreeList>
        <TreeRow>
            <TreeCell>Row 1</TreeCell>
            <TreeList>
                <TreeRow>
                    <TreeCell />
                    <TreeCell><a href='http://www.google.com'>Google</a></TreeCell>
                    <TreeCell><a href='http://www.bing.com'>Bing</a></TreeCell>
                    <TreeCell><a href='http://www.yahoo.com'>Yahoo</a></TreeCell>
                </TreeRow>
            </TreeList>
        </TreeRow>
    </TreeList>
</Tree>`;


    return (
        <div>
            <Header>Tree</Header>
            <Description>
                A **Tree** is used to display data in a visual hierarchy. Items that contain additional items
                are called nodes, while items that do not contain any other items are called leaves. If available,
                a single top-most node is called a "root" node. Apart from the hierarchical structure of its nodes
                and leaves, a tree is similar to a list.
            </Description>
            <Import sourceModule={require('./Tree')} />

            <Separator />

            <Properties sourceModule={require('./Tree')} />

            <Separator />

            <h2>Tree with multiple levels and actions</h2>
            <DocsTile>
                <Tree>
                    <TreeHeader>
                        <TreeCell>Column Header 1</TreeCell>
                        <TreeCell>Column Header 2</TreeCell>
                        <TreeCell>Column Header 3</TreeCell>
                        <TreeCell>Column Header 4</TreeCell>
                    </TreeHeader>
                    <TreeList>
                        <TreeRow>
                            <TreeCell>Row 1</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                            <TreeList>
                                <TreeRow>
                                    <TreeCell>Child 1</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                    <TreeList>
                                        <TreeRow>
                                            <TreeCell>Grandchild 1</TreeCell>
                                            <TreeCell>Data Col 2</TreeCell>
                                            <TreeCell>Data Col 3</TreeCell>
                                            <TreeCell>Data Col 4</TreeCell>
                                            <TreeList>
                                                <TreeRow>
                                                    <TreeCell>Great Grandchild 1</TreeCell>
                                                    <TreeCell>Data Col 2</TreeCell>
                                                    <TreeCell>Data Col 3</TreeCell>
                                                    <TreeCell>Data Col 4</TreeCell>
                                                </TreeRow>
                                            </TreeList>
                                        </TreeRow>
                                    </TreeList>
                                </TreeRow>
                                <TreeRow>
                                    <TreeCell>Child 2</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                </TreeRow>
                            </TreeList>
                        </TreeRow>
                        <TreeRow>
                            <TreeCell>Row 2</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                            <TreeList>
                                <TreeRow>
                                    <TreeCell>Child 1</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                </TreeRow>
                                <TreeRow>
                                    <TreeCell>Child 2</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                </TreeRow>
                            </TreeList>
                        </TreeRow>
                        <TreeRow>
                            <TreeCell>Row 3</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                        </TreeRow>
                        <TreeRow>
                            <TreeCell>Row 4</TreeCell>
                            <TreeCell>Data Col 2</TreeCell>
                            <TreeCell>Data Col 3</TreeCell>
                            <TreeCell>Data Col 4</TreeCell>
                            <TreeList>
                                <TreeRow>
                                    <TreeCell>Child 1</TreeCell>
                                    <TreeCell>Data Col 2</TreeCell>
                                    <TreeCell>Data Col 3</TreeCell>
                                    <TreeCell>Data Col 4</TreeCell>
                                </TreeRow>
                            </TreeList>
                        </TreeRow>
                    </TreeList>
                </Tree>
            </DocsTile>
            <DocsText>{treeCode}</DocsText>

            <Separator />

            <h2>Rich Tree</h2>
            <Description>
                This is an example of a tree with "rich" cells.
            </Description>
            <DocsTile>
                <Tree>
                    <TreeHeader>
                        <TreeCell>Column Header 1</TreeCell>
                        <TreeCell>Column Header 2</TreeCell>
                        <TreeCell>Column Header 3</TreeCell>
                        <TreeCell>Column Header 4</TreeCell>
                    </TreeHeader>
                    <TreeList>
                        <TreeRow>
                            <TreeCell>Row 1</TreeCell>
                            <TreeList>
                                <TreeRow>
                                    <TreeCell />
                                    <TreeCell><a href='http://www.google.com'>Google</a></TreeCell>
                                    <TreeCell><a href='http://www.bing.com'>Bing</a></TreeCell>
                                    <TreeCell><a href='http://www.yahoo.com'>Yahoo</a></TreeCell>
                                </TreeRow>
                            </TreeList>
                        </TreeRow>
                    </TreeList>
                </Tree>
            </DocsTile>
            <DocsText>{treeCodeRich}</DocsText>
        </div>
    );
};

