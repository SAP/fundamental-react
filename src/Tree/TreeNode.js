import Checkbox from '../Forms/Checkbox';
import classnames from 'classnames';
import FormRadioItem from '../Forms/FormRadioItem';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import { TREE_NODE_HIGHLIGHTS } from '../utils/constants';
import useUniqueId from '../utils/useUniqueId';
import React, { useState } from 'react';

const TreeNode = ({
    actions,
    active,
    children,
    glyphsAfter,
    glyphsBefore,
    highlight,
    id,
    isNavigated,
    link,
    onExpandClick,
    onSelectionChange,
    selectionProps,
    nodeData,
    wrapContent,
    ...rest
}) => {
    const [isExpanded, setExpanded] = useState(false);
    const [isSelected, setSelected] = useState(false);

    const { level } = rest;
    const nodeId = `${useUniqueId(id)}`;
    let myPath = rest?.parentPath?.split('/') || ['root'];
    if (myPath?.includes ? !myPath.includes(nodeId) && myPath?.push : false) {
        myPath.push(nodeId);
    }
    myPath = myPath?.join && myPath.join('/');

    const nodeContentPayload = React.Children.toArray(children).filter(child => child?.type?.displayName !== 'Tree.Node');
    const nodeTextContent = React.Children.toArray(children).find(child => typeof child === 'string');


    const childrenLevel = level + 1;


    const nodeChildren = React.Children.toArray(children)
        .filter(child => child?.type?.displayName === 'Tree.Node')
        .map(child => React.cloneElement(child, {
            active,
            level: childrenLevel,
            onExpandClickInternal: rest?.onExpandClickInternal,
            parentId: nodeId,
            parentPath: myPath,
            selection: rest.selection,
            selectionPosition: rest.selectionPosition,
            treeId: rest.treeId,
            treeActive: rest?.treeActive
        }));

    const handleButtonClick = () => {
        const toggledExpansionState = !isExpanded;
        rest.onExpandClickInternal && rest.onExpandClickInternal(level, toggledExpansionState, nodeId, rest?.parentId, myPath);
        onExpandClick && onExpandClick(nodeData, toggledExpansionState);
        setExpanded(toggledExpansionState);
    };

    const validHighlight = () => TREE_NODE_HIGHLIGHTS.includes(highlight);

    const highlightModifier = () => {
        let modifier = '';
        if (validHighlight() && highlight !== 'default') {
            modifier = `--${highlight}`;
        }
        return modifier;
    };

    const hasNavigation = !!link?.trim();

    const containerClasses = classnames(
        'fd-tree__item-container',
        {
            [`has-highlight-indicator${highlightModifier()}`]: validHighlight(),
            ['fd-tree__item-container--active']: hasNavigation || active,
            'is-navigated': isNavigated,
            'is-selected': rest?.selection === 'multi' && isSelected
        }
    );

    const buttonClasses = classnames(
        'fd-tree__expander',
        { 'is-expanded': !!isExpanded }
    );

    const contentClasses = classnames(
        'fd-tree__content',
        { 'fd-tree__content--wrap': wrapContent },
        { 'has-navigation-indicator': hasNavigation && !rest?.treeActive }
    );

    const branchClasses = classnames(
        'fd-tree',
        {
            'is-hidden': level > 1 && !isExpanded
        });

    const nodeContent = (
        <span className='fd-tree__text'>
            {nodeContentPayload}
        </span>
    );

    let checkBox;
    let radioItem;

    if ( rest?.selection === 'multi' ) {
        const { onChange } = selectionProps || {};
        checkBox = (
            <Checkbox
                ariaLabel={nodeTextContent}
                {...selectionProps}
                onChange={(event, checked) => {
                    onChange && onChange(event, checked);
                    onSelectionChange && onSelectionChange(event, checked, nodeData);
                    setSelected(checked);
                }} />
        );
    } else if (rest?.selection === 'single') {
        const { name } = selectionProps || {};
        const radioItemName = rest?.treeId;
        const { onChange } = selectionProps?.inputProps || {};

        radioItem = (
            <FormRadioItem
                {...selectionProps}
                inputProps={{
                    'aria-label': nodeTextContent,
                    ...selectionProps?.inputProps,
                    onChange: (event) => {
                        onChange && onChange(event);
                        const radioSelected = event?.target?.checked;
                        onSelectionChange && onSelectionChange(event, radioSelected, nodeData);
                    }
                }}
                name={name ? name : radioItemName } />
        );
    }

    const { parentId, parentPath, selectionPosition, treeId, ...otherProps } = rest;


    const renderIcons = (icons) => {
        return icons && icons?.length && icons?.map(icon => <Icon className='fd-tree__icon' glyph={icon} />) || '';
    };

    return (
        <li
            {...otherProps}
            aria-expanded={isExpanded}
            aria-level={level}
            className='fd-tree__item'
            id={nodeId}
            role='treeitem'>
            <div className={containerClasses}>
                {nodeChildren?.length > 0 &&
                    <button
                        aria-controls={nodeId}
                        aria-label={isExpanded ? 'collapse' : 'expand'}
                        aria-pressed={isExpanded}
                        className={buttonClasses}
                        onClick={handleButtonClick} />
                }
                {
                    renderIcons(glyphsBefore)
                }
                {
                    rest.selectionPosition === 'left' && rest?.selection === 'single' &&
                        radioItem
                }
                {
                    rest.selectionPosition === 'left' && rest?.selection === 'multi' &&
                        checkBox
                }
                {
                    hasNavigation ? (
                        <a className={contentClasses} href={link} >
                            {nodeContent}
                        </a>
                    ) : (
                        <div className={contentClasses}>
                            {nodeContent}
                        </div>
                    )
                }
                {
                    renderIcons(glyphsAfter)
                }
                {actions}
                {
                    rest.selectionPosition === 'right' && rest?.selection === 'single' &&
                        radioItem
                }
                {
                    rest.selectionPosition === 'right' && rest?.selection === 'multi' &&
                        checkBox
                }
            </div>
            {nodeChildren?.length > 0 &&
            <ul
                {...otherProps}
                aria-hidden={!isExpanded}
                className={branchClasses}
                role='group'>
                {nodeChildren}
            </ul>
            }
        </li>
    );
};

TreeNode.displayName = 'Tree.Node';


TreeNode.propTypes = {
    /** React nodes to render as `TreeNode`s actions. Expecting `Button`s here.*/
    actions: PropTypes.node,
    /** Set to **true** to make this particular `TreeNode` have styles for interaction states (hover, selected, active).*/
    active: PropTypes.bool,
    /** React nodes to render within. Nest `TreeNode`s to create multiple levels in the `Tree`.*/
    children: PropTypes.node,
    /** An **Array of string** values to representing icon names to display before node contents.*/
    glyphsAfter: PropTypes.arrayOf(PropTypes.string),
    /** An **Array of string** values to representing icon names to display before after contents.*/
    glyphsBefore: PropTypes.arrayOf(PropTypes.string),
    /** Set to one of the valid values to highlight the row with the corresponding semantic color.*/
    highlight: PropTypes.oneOf([
        'default',
        'error',
        'success',
        'warning'
    ]),
    /** Set to a **String** value to use as id for this node which is a `<li>`. If unset, a generate value will be used.*/
    id: PropTypes.string,
    /** Set to **true** to show styles representing that the node has been navigate to.*/
    isNavigated: PropTypes.bool,
    /** Set to a **String**  value to use as href and make this node an `<a>` tag with appropriate styles.*/
    link: PropTypes.string,
    /** **Object** to be received in the `onExpandClick` and `onSelectionChange` callbacks of this node.*/
    nodeData: PropTypes.object,
    /** Additional props to be spread to the selection control, if any.*/
    selectionProps: PropTypes.object,
    /** Set to **true** to make node contents wrap to next line(s).*/
    wrapContent: PropTypes.bool,
    /** Callback function triggered when a node's expansion button is clicked.
     * This function is called with the `event`, `checked` state, and `nodeData` parameters.
    */
    onExpandClick: PropTypes.func,
    /** If selection is enabled , this is a callback function triggered when a node:
     *
     * * multi: selection state changes
     * * single: is selected
     *
     * This function is called with the `event`, `checked` state, and `nodeData` parameters.
    */
    onSelectionChange: PropTypes.func
};


export default TreeNode;
