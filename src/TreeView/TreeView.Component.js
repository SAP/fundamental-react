import path from 'path';
import React from 'react';
import { TreeView } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const TreeViewComponent = () => {
    const simpleTreeViewCode = `
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
</TreeView>`;

    const treeViewCode = `
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
</TreeView>`;

    const treeViewCodeRich = `
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
</TreeView>`;


    return (
        <div>
            <Header>Tree View</Header>
            <Description>
                A **Tree View** is used to display data in a visual hierarchy. Items that contain additional items
                are called nodes, while items that do not contain any other items are called leaves. If available,
                a single top-most node is called a "root" node. Apart from the hierarchical structure of its nodes
                and leaves, a tree is similar to a list.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './TreeView')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './TreeView')} />

            <Separator />

            <h2>Simple TreeView</h2>
            <Description>
                This is an example of a simple tree view.
            </Description>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{simpleTreeViewCode}</DocsText>

            <Separator />

            <h2>Complex TreeView</h2>
            <Description>
                This is an example of a tree view with a header, multiple levels, multiple columns and actions.
            </Description>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{treeViewCode}</DocsText>

            <Separator />

            <h2>Rich TreeView</h2>
            <Description>
                This is an example of a tree view with "rich" cells.
            </Description>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{treeViewCodeRich}</DocsText>
        </div>
    );
};

