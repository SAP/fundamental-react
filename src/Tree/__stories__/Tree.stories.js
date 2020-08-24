/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import React from 'react';
import Tree from '../Tree';
import TreeNode from '../TreeNode';

export default {
    title: 'Component API/Tree',
    component: Tree,
    subcomponents: { Tree, TreeNode }
};

/**
 * Unlike tree tables, trees are used for rather basic data.
 *
 * USE THE TREE IF:
 * - You need to display the key identifier of hierarchically structured items
 * - Selecting one or more items out of a set of hierarchically structured items is a main use case.
 * - The hierarchy has a restricted number of levels (up to about 12, depending on the content) and items (around 200).
 * - You want to have only one implementation for all devices.

 * DO NOT USE THE TREE IF:
 * - The main use case is to select one item from a very small number of non-hierarchical items, without viewing additional details. In this case, a select or combo box might be more appropriate.
 * - Items are not structured hierarchically. Use a list instead.
 * - The hierarchy turns out to have only two levels. In this case, use a grouped list.
 * - The hierarchy turns out to be just a categorization based on several details of the item. In this case, an analytical table provides multi-level grouping. Note that the analytical table is not fully responsive. It is only available for desktops and tablets, so you will need to take an adaptive approach by offering an additional UI for smartphones.
 * - You need to display very deep hierarchies with additional data per item. In this case, use a tree table (not available yet in Fundamental-styles). Note that the tree table is not fully responsive. It is only available for desktops and tablets, so you will need to take an adaptive approach by offering an additional UI for smartphones.
 * - The structure contains more than around 200 items. In this case, use the tree table (not available yet in Fundamental-styles). It is optimized for large item sets and provides better performance. Note that the tree table is not fully responsive. It is only available for desktops and tablets, so you will need to take an adaptive approach by offering an additional UI for smartphones.
 * - You need an overview of a large amount of data. In this case, use a chart.
 */

export const wrappingAndNonWrappingContents = () => (
    <Tree >
        <Tree.Node>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node>
            Level 1
        </Tree.Node>
        <Tree.Node>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
        <Tree.Node wrapContent>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
    </Tree>
);

export const compact = () => (
    <Tree compact>
        <Tree.Node>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node>
            Level 1
        </Tree.Node>
        <Tree.Node>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
        <Tree.Node wrapContent>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
    </Tree>
);


export const nodeActionsAndNoBorder = () => {
    const commonActions = (<>
        <Button glyph='edit' option='transparent' />
        <Button glyph='decline' option='transparent' />
    </>);
    return (
        <Tree
            aria-label='Tree with Actions and no border'
            noBorders>
            <Tree.Node
                actions={commonActions}
                glyph='e-care'>
                Level 1
                <Tree.Node
                    actions={commonActions}
                    glyph='account'>
                    Level 2
                    <Tree.Node
                        actions={commonActions}
                        glyph='product'>
                        Level 3
                        <Tree.Node
                            actions={commonActions}
                            glyph='wrench'>
                            Level 4
                        </Tree.Node>
                    </Tree.Node>
                    <Tree.Node
                        actions={commonActions}
                        glyph='history'>
                        Level 3
                    </Tree.Node>
                </Tree.Node>
                <Tree.Node
                    actions={commonActions}
                    glyph='competitor'>
                    Level 2
                </Tree.Node>
            </Tree.Node>
            <Tree.Node
                actions={commonActions}
                glyph='batch-payments'>
                Level 1
            </Tree.Node>
            <Tree.Node
                actions={commonActions}
                glyph='favorite'>
                Level 1
            </Tree.Node>
        </Tree>
    );
};

export const highlightIndicators = () => (
    <Tree>
        <Tree.Node highlight='default'>
            Level 1
            <Tree.Node highlight='warning'>
                Level 2
                <Tree.Node highlight='error'>
                    Level 3
                    <Tree.Node highlight='success'>
                        Level 4
                        <Tree.Node>
                            Level 5
                        </Tree.Node>
                    </Tree.Node>
                    <Tree.Node>
                        Level 4
                    </Tree.Node>
                </Tree.Node>
                <Tree.Node>
                    Level 3
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node >
            Level 1
        </Tree.Node>
        <Tree.Node >
            Level 1
        </Tree.Node>
    </Tree>
);

export const navigationLinks = () => (
    <Tree>
        <Tree.Node highlight='success' link='#navigation-links'>
            Level 1
            <Tree.Node highlight='warning'>
                Level 2
                <Tree.Node highlight='error' link='#navigation-links'>
                    Level 3
                    <Tree.Node highlight='default'>
                        Level 4
                        <Tree.Node link='#navigation-links'>
                            Level 5
                            <Tree.Node>
                                Level 6
                                <Tree.Node link='#navigation-links'>
                                    Level 7
                                    <Tree.Node>
                                        Level 8
                                    </Tree.Node>
                                    <Tree.Node highlight='warning' link='#navigation-links'>
                                        Level 8
                                    </Tree.Node>
                                </Tree.Node>
                                <Tree.Node highlight='error'>
                                    Level 7
                                </Tree.Node>
                            </Tree.Node>
                            <Tree.Node highlight='default' link='#navigation-links'>
                                Level 6
                            </Tree.Node>
                        </Tree.Node>
                        <Tree.Node highlight='success' link='#navigation-links'>
                            Level 5
                        </Tree.Node>
                    </Tree.Node>
                    <Tree.Node>
                        Level 4
                    </Tree.Node>
                </Tree.Node>
                <Tree.Node>
                    Level 3
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node
            highlight='success'
            isNavigated
            link='#navigation-links'>
            Level 1
        </Tree.Node>
        <Tree.Node highlight='success' link='#navigation-links'>
            Level 1
        </Tree.Node>
    </Tree>
);

export const activeTree = () => (
    <Tree active>
        <Tree.Node>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                    <Tree.Node>
                        Level 4
                        <Tree.Node>
                            Level 5
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree.Node>
        <Tree.Node>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                    <Tree.Node>
                        Level 4
                        <Tree.Node>
                            Level 5
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree.Node>
    </Tree>
);

export const multiSelectionLeft = () => {

    const selectionHandler = (event, checked, selectionData) => alert(`${selectionData.item} was ${checked ? 'checked' : 'unchecked'}`);

    return (
        <Tree selection='multi' selectionPosition='left'>
            <Tree.Node
                onSelectionChange={selectionHandler}
                selectionData={{ level: 1, item: 'Level 1', id: 'level-1' }}>
                Level 1 - onSelectionChange
                <Tree.Node
                    onSelectionChange={selectionHandler}
                    selectionData={{ level: 2, item: 'Level 2', id: 'level-2' }}>
                    Level 2 - onSelectionChange
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 1
                <Tree.Node>
                    Level 2
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree>
    );
};

export const multiSelectionRight = () => {

    const selectionHandler = (event, checked, selectionData) => alert(`${selectionData.item} was ${checked ? 'checked' : 'unchecked'}`);

    return (
        <Tree selection='multi' selectionPosition='right'>
            <Tree.Node
                onSelectionChange={selectionHandler}
                selectionData={{ level: 1, item: 'Level 1', id: 'level-1' }}>
                Level 1 - onSelectionChange
                <Tree.Node
                    onSelectionChange={selectionHandler}
                    selectionData={{ level: 2, item: 'Level 2', id: 'level-2' }}>
                    Level 2 - onSelectionChange
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 1
                <Tree.Node>
                    Level 2
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree>
    );
};

export const singleSelectionLeft = () => {

    const selectionHandler = (event, checked, selectionData) => alert(`${selectionData.item} was ${checked ? 'checked' : 'unchecked'}`);

    return (
        <Tree selection='single' selectionPosition='left'>
            <Tree.Node
                onSelectionChange={selectionHandler}
                selectionData={{ level: 1, item: 'Level 1', id: 'level-1' }}>
                Level 1 - onSelectionChange
                <Tree.Node
                    onSelectionChange={selectionHandler}
                    selectionData={{ level: 2, item: 'Level 2', id: 'level-2' }}>
                    Level 2 - onSelectionChange
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 1
                <Tree.Node>
                    Level 2
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree>
    );
};

export const singleSelectionRight = () => {

    const selectionHandler = (event, checked, selectionData) => alert(`${selectionData.item} was ${checked ? 'checked' : 'unchecked'}`);

    return (
        <Tree selection='single' selectionPosition='right'>
            <Tree.Node
                onSelectionChange={selectionHandler}
                selectionData={{ level: 1, item: 'Level 1', id: 'level-1' }}>
                Level 1 - onSelectionChange
                <Tree.Node
                    onSelectionChange={selectionHandler}
                    selectionData={{ level: 2, item: 'Level 2', id: 'level-2' }}>
                    Level 2 - onSelectionChange
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 1
                <Tree.Node>
                    Level 2
                    <Tree.Node>
                        Level 3
                        <Tree.Node>
                            Level 4
                            <Tree.Node>
                                Level 5
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree>
    );
};

export const emptyTree = () => <Tree emptyText='No Data' />;


export const simpleNewTree = () => (
    <Tree>
        <Tree.Node>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                    <Tree.Node>
                        Level 4
                        <Tree.Node>
                            Level 5
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree.Node>
        <Tree.Node>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                    <Tree.Node>
                        Level 4
                        <Tree.Node>
                            Level 5
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
        </Tree.Node>
    </Tree>
);

export const newTree = () => (
    <Tree
        aria-label='New Tree Yo'
        noBorders>
        <Tree.Node
            actions={<>
                <Button glyph='edit' option='transparent' />
                <Button glyph='decline' option='transparent' />
            </>}
            glyph='e-care'>
            Level 1
            <Tree.Node highlight='success'>
                Level 2
                <Tree.Node>
                    Level 3
                    <Tree.Node link='#tree-with-expanded-level-6-and-navigation-links'>
                        Level 4
                        <Tree.Node link='#tree-with-expanded-level-6-and-navigation-links'>
                            Level 5
                            <Tree.Node link='#tree-with-expanded-level-6-and-navigation-links'>
                                Level 6
                                <Tree.Node link='#tree-with-expanded-level-6-and-navigation-links'>
                                    Level 7
                                    <Tree.Node link='#tree-with-expanded-level-6-and-navigation-links'>
                                        Level 8
                                    </Tree.Node>
                                </Tree.Node>
                            </Tree.Node>
                        </Tree.Node>
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node glyph='account'>
            Level 1
            <Tree.Node>
                Level 2
                <Tree.Node>
                    Level 3
                    <Tree.Node>
                        Level 4
                    </Tree.Node>
                </Tree.Node>
            </Tree.Node>
            <Tree.Node>
                Level 2
            </Tree.Node>
        </Tree.Node>
        <Tree.Node>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
        <Tree.Node wrapContent>
            Level 1 with very long text that does not wrap. Perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Tree.Node>
    </Tree>
);
