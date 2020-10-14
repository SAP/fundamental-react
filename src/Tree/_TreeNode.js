import Checkbox from '../Forms/Checkbox';
import classnamesBind from 'classnames/bind';
import FormRadioItem from '../Forms/FormRadioItem';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import { TREE_NODE_HIGHLIGHTS } from '../utils/constants';
import useUniqueId from '../utils/useUniqueId';
import withStyles from '../utils/withStyles';
import React, { useState } from 'react';
import styles from 'fundamental-styles/dist/tree.css';

const classnames = classnamesBind.bind(styles);

const TreeNode = ({
    actions,
    active,
    children,
    className,
    cssNamespace,
    glyphsAfter,
    glyphsBefore,
    highlight,
    id,
    isNavigated,
    link,
    onExpandToggle,
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
    let nodePath = rest?.parentPath?.split?.('/') || ['root'];
    if (!nodePath?.includes?.(nodeId) && nodePath?.push) {
        nodePath.push(nodeId);
    }
    nodePath = nodePath?.join && nodePath.join('/');

    const nodeContentPayload = React.Children.toArray(children).filter(child => child?.type?.displayName !== 'Tree.Node');
    const nodeTextContent = React.Children.toArray(children).find(child => typeof child === 'string');


    const childrenLevel = level + 1;


    const nodeChildren = React.Children.toArray(children)
        .filter(child => child?.type?.displayName === 'Tree.Node')
        .map(child => React.cloneElement(child, {
            active,
            level: childrenLevel,
            expansionEventBubbler: rest?.expansionEventBubbler,
            parentId: nodeId,
            parentPath: nodePath,
            selection: rest.selection,
            selectionPosition: rest.selectionPosition,
            treeId: rest.treeId,
            treeActive: rest?.treeActive
        }));

    const handleButtonClick = (event) => {
        const toggledExpansionState = !isExpanded;
        rest?.expansionEventBubbler?.(level, toggledExpansionState, nodeId, rest?.parentId, nodePath);
        onExpandToggle?.(event, toggledExpansionState, nodeData);
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

    const nodeClasses = classnames(
        `${cssNamespace}-tree__item`,
        className
    );

    const containerClasses = classnames(
        `${cssNamespace}-tree__item-container`,
        {
            [`has-highlight-indicator${highlightModifier()}`]: validHighlight(),
            [`${cssNamespace}-tree__item-container--active`]: hasNavigation || active,
            'is-navigated': isNavigated,
            'is-selected': rest?.selection === 'multi' && isSelected
        }
    );

    const buttonClasses = classnames(
        `${cssNamespace}-tree__expander`,
        { 'is-expanded': !!isExpanded }
    );

    const contentClasses = classnames(
        `${cssNamespace}-tree__content`,
        { [`${cssNamespace}-tree__content--wrap`]: wrapContent },
        { 'has-navigation-indicator': hasNavigation && !rest?.treeActive }
    );

    const branchClasses = classnames(
        `${cssNamespace}-tree`,
        {
            'is-hidden': level > 1 && !isExpanded
        });

    const nodeContent = (
        <span className={classnames(`${cssNamespace}-tree__text`)}>
            {nodeContentPayload}
        </span>
    );

    let checkBox;
    let radioItem;
    const selectionControlId = `${nodeId}-selection-control`;

    if ( rest?.selection === 'multi' ) {
        const { onChange } = selectionProps || {};
        checkBox = (
            <Checkbox
                ariaLabel={nodeTextContent}
                {...selectionProps}
                id={selectionControlId}
                onChange={(event, checked) => {
                    onChange && onChange(event, checked);
                    onSelectionChange?.(event, checked, nodeData);
                    setSelected(checked);
                }} />
        );
    } else if (rest?.selection === 'single') {
        const { name } = selectionProps || {};
        const radioItemName = rest?.treeId;
        const { onChange } = selectionProps?.inputProps || {};

        radioItem = (
            <FormRadioItem
                children=''
                {...selectionProps}
                id={ selectionControlId }
                inputProps={{
                    'aria-label': nodeTextContent,
                    ...selectionProps?.inputProps,
                    onChange: (event) => {
                        onChange && onChange(event);
                        // always return true because radio item change is only triggered on selection not de-selection
                        onSelectionChange && onSelectionChange(event, true, nodeData);
                    }
                }}
                name={name ? name : radioItemName } />
        );
    }

    const { expansionEventBubbler, level: removeLevel, parentId, parentPath, selectionPosition, treeId, treeActive, ...otherProps } = rest;


    const renderIcons = (icons) => {
        return icons && icons?.length && icons?.map((icon, index) => (<Icon className={classnames(`${cssNamespace}-tree__icon`)} glyph={icon}
            key={index} />)) || '';
    };

    const buttonId = `${nodeId}-expansion-toggle-button`;
    const subTreeId = `${nodeId}-subtree-root`;

    return (
        <li
            {...otherProps}
            aria-expanded={isExpanded}
            aria-level={level}
            className={nodeClasses}
            id={nodeId}
            role='treeitem'>
            <div className={containerClasses}>
                {nodeChildren?.length > 0 &&
                    <button
                        aria-controls={nodeId}
                        aria-label={isExpanded ? 'collapse' : 'expand'}
                        aria-pressed={isExpanded}
                        className={buttonClasses}
                        id={buttonId}
                        onClick={handleButtonClick}>
                        <Icon ariaHidden className={classnames('fd-tree__icon')}
                            glyph={isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'} />
                    </button>
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
                aria-hidden={!isExpanded}
                className={branchClasses}
                id={subTreeId}
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
    /** Custom classes to add to TreeNode.*/
    className: PropTypes.string,
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
    /** **Object** to be received in the `onExpandToggle` and `onSelectionChange` callbacks of this node.*/
    nodeData: PropTypes.object,
    /** Additional props to be spread to the selection control, if any.*/
    selectionProps: PropTypes.object,
    /** Set to **true** to make node contents wrap to next line(s).*/
    wrapContent: PropTypes.bool,
    /**
     * Callback function; triggered when a node's expansion button is clicked.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {Boolean} expansion - Boolean representing if this event will expand TreeNode's subtree.
     * @param {Object} nodeData - TreeNode.nodeData
     * @returns {void}
    */
    onExpandToggle: PropTypes.func,
    /**
     * Callback function; triggered when a node is selected (if selection is enabled)
     *
     * * multi: selection state changes
     * * single: is selected
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {Boolean} checked - Boolean representing if this event will select the TreeNode.
     * This is always true for single select Tree's because this event is only fired on radio selection.
     * @param {Object} nodeData - TreeNode.nodeData
    */
    onSelectionChange: PropTypes.func
};


export default withStyles(TreeNode);
