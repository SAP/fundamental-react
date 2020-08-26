import classnames from 'classnames';
import PropTypes from 'prop-types';
import TreeNode from './TreeNode';
import useUniqueId from '../utils/useUniqueId';
import React, { useState } from 'react';

const Tree = React.forwardRef(({
    active,
    children,
    className,
    compact,
    id,
    noBorders,
    emptyText,
    selection,
    selectionPosition,
    ...props
}, ref) => {
    const [expansionDepth, setExpansionDepth] = useState(0);
    const [tree, setTree] = useState({
        'root': {
            id: 'root',
            expanded: true,
            level: 0,
            children: {}
        }
    });

    const updateTree = ({
        toggledAtLevel,
        lastLevelExpanding,
        parentPath }) => {
        const pathArr = parentPath && parentPath.split && parentPath.split('/') || [];
        let checkTree = tree;
        let checkTreeRoot = checkTree;
        pathArr.forEach((pathItem, index) => {
            const currentItem = checkTree[pathItem];

            if (currentItem && index === pathArr.length - 1) {
                currentItem.expanded = lastLevelExpanding;
            }
            if (!currentItem) {
                checkTree[pathItem] = {
                    id: pathItem,
                    expanded: lastLevelExpanding,
                    level: toggledAtLevel,
                    children: {}
                };
                checkTree = checkTree[pathItem].children;
            } else {
                checkTree = currentItem && currentItem.children;
            }
        });
        setTree(checkTreeRoot);

    };

    const getExpandedChildren = (treeNode) => {
        if (!treeNode || !treeNode.children || Object.keys(treeNode.children).length === 0) return 0;
        const childrenIds = Object.keys(treeNode.children);
        const expandedChildrenCount = childrenIds.filter && childrenIds.filter( childId => treeNode?.children[childId]?.expanded).length || 0;
        return expandedChildrenCount;
    };

    const getMaxExpandedNodeLevel = (node) => {
        const expandedChildrenCount = getExpandedChildren(node);
        if (expandedChildrenCount < 1) {
            return node.level;
        }
        let maxExpandedLevel = node.level;
        const nodeChildren = node?.children || {};
        const nodeChildrenIds = Object.keys(nodeChildren);
        const expandedChildrenIds = nodeChildrenIds.filter(childId => node?.children[childId]?.expanded);
        for ( const expandedChildId of expandedChildrenIds) {
            const expandedChild = node?.children[expandedChildId];
            let expandedChildMaxDepth = getMaxExpandedNodeLevel(expandedChild);
            if (expandedChildMaxDepth > maxExpandedLevel) {
                maxExpandedLevel = expandedChildMaxDepth;
            }
        }
        return maxExpandedLevel;
    };

    const treeId = useUniqueId(id);

    const levelOneNodes = React.Children.toArray(children)
        .filter(child => child.type && child.type.displayName === 'Tree.Node')
        .map(child => React.cloneElement(child, {
            ...child?.props,
            level: 1,
            expansionEventBubbler: (toggledAtLevel, lastLevelExpanding, itemId, parentId, parentPath) => {
                updateTree({
                    toggledAtLevel,
                    lastLevelExpanding,
                    itemId,
                    parentId,
                    parentPath
                });
                const newExpansionDepth = getMaxExpandedNodeLevel(tree.root);
                setExpansionDepth(newExpansionDepth);
            },
            parentId: 'root',
            parentPath: 'root',
            selection,
            selectionPosition,
            treeId,
            treeActive: active
        }));

    const emptyTree = !levelOneNodes?.length > 0;


    const treeClasses = classnames(
        'fd-tree',
        {
            [`expanded-level-${expansionDepth}`]: typeof expansionDepth === 'number' && expansionDepth > 0,
            'fd-tree--active': active,
            'fd-tree--compact': compact,
            'fd-tree--no-border': noBorders,
            'fd-tree--no-data': emptyTree
        },
        className
    );

    return (
        <ul
            ref={ref}
            {...props}
            className={treeClasses}
            id={treeId}
            role='tree'>
            {!emptyTree ?
                levelOneNodes
                : (
                    <li aria-level='1' className='fd-tree__item'
                        role='treeitem'>
                        <div className='fd-tree__item-container'>
                            <div className='fd-tree__content'>
                                <span className='fd-tree__text'>{emptyText}</span>
                            </div>
                        </div>
                    </li>)}
        </ul>);
});

Tree.displayName = 'Tree';

Tree.propTypes = {
    /** Set to **true** to make all `TreeNode`s have styles for interaction states (hover, selected, active).*/
    active: PropTypes.bool,
    /** React nodes to render within. Nest `TreeNode`s to create multiple levels in the `Tree`.*/
    children: PropTypes.node,
    /** Custom classes to add to Tree.*/
    className: PropTypes.string,
    /** Set to **true** to apply compact styles.*/
    compact: PropTypes.bool,
    /** Set to a **String** value to display when `Tree` is empty, i.e. has no children.*/
    emptyText: PropTypes.string,
    /** Set to a **String** value to use as id for root node which is an `<ul>`. If unset, a generate value will be used.*/
    id: PropTypes.string,
    /** Set to **true** to remove borders from all level 1 nodes.*/
    noBorders: PropTypes.bool,
    /** Set to `multi` to enable selecting multiple selection of `TreeNode`s with Checkboxes.
     *
     * Set to `single` to enable selecting only one of the `TreeNode`s at a time, with radio buttons.
    */
    selection: PropTypes.oneOf([
        'multi',
        'single'
    ]),
    /** Set to `left` to show selection control before node contents.
     *
     * Set to `right` to show selection control after node contents.
    */
    selectionPosition: PropTypes.oneOf([
        'left',
        'right'
    ])
};

Tree.defaultProps = {
    active: false,
    selectionPosition: 'left'
};

Tree.Node = TreeNode;

export default Tree;
