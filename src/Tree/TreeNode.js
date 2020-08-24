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
    children,
    compact,
    glyph,
    highlight,
    isNavigated,
    level,
    link,
    noBorders,
    onExpandClick,
    onSelectionChange,
    rowId,
    selectionProps,
    selectionData,
    wrapContent,
    ...rest
}) => {
    const [isExpanded, setExpanded] = useState(false);
    const [isSelected, setSelected] = useState(false);

    const itemId = `${useUniqueId(rowId)}-level-${level}`;
    let myPath = rest?.parentPath?.split('/') || ['root'];
    if (myPath?.includes ? !myPath.includes(itemId) && myPath?.push : false) {
        myPath.push(itemId);
    }
    myPath = myPath?.join && myPath.join('/');

    const nodeTextContent = React.Children.toArray(children).find(child => typeof child === 'string');

    const childrenLevel = level + 1;


    // console.debug('myPath', myPath, level);

    const nodeChildren = React.Children.toArray(children)
        .filter(child => child.type && child.type.displayName === 'Tree.Node')
        .map(child => React.cloneElement(child, {
            level: childrenLevel,
            onExpandClick,
            parentId: itemId,
            parentPath: myPath,
            selection: rest.selection,
            selectionPosition: rest.selectionPosition,
            treeId: rest.treeId
        }));

    const handleButtonClick = () => {
        // console.debug(`level ${level} handler`);
        // console.debug('handleButtonClick.myPath', myPath, level);
        onExpandClick && onExpandClick(level, !isExpanded, itemId, rest?.parentId, myPath);
        setExpanded(!isExpanded);
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
            ['fd-tree__item-container--active']: hasNavigation,
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
        { 'has-navigation-indicator': hasNavigation }
    );

    const branchClasses = classnames(
        'fd-tree',
        {
            'is-hidden': level > 1 && !isExpanded
        });

    const nodeContent = (
        <span className='fd-tree__text'>
            {nodeTextContent}
        </span>
    );

    let checkBox;
    let radioItem;

    if ( rest?.selection === 'multi' ) {
        const { onChange } = selectionProps || {};
        checkBox = (
            <Checkbox
                {...selectionProps}
                ariaLabel={nodeTextContent}
                onChange={(event, checked) => {
                    onChange && onChange(event, checked);
                    onSelectionChange && onSelectionChange(event, checked, selectionData);
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
                    ...selectionProps?.inputProps,
                    onChange: (event) => {
                        onChange && onChange(event);
                        const radioSelected = event?.target?.checked;
                        onSelectionChange && onSelectionChange(event, radioSelected, selectionData);
                    }
                }}
                name={name ? name : radioItemName } />
        );
    }

    const { parentId, parentPath, selectionPosition, treeId, ...otherProps } = rest;

    return (
        <li
            {...otherProps}
            aria-expanded={isExpanded}
            aria-level={level}
            className='fd-tree__item'
            id={itemId}
            role='treeitem'>
            <div className={containerClasses}>
                {nodeChildren?.length > 0 &&
                    <button
                        aria-controls={itemId}
                        aria-label={isExpanded ? 'collapse' : 'expand'}
                        aria-pressed={isExpanded}
                        className={buttonClasses}
                        onClick={handleButtonClick} />
                }
                {
                    glyph && <Icon className='fd-tree__icon' glyph={glyph} />
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
    actions: PropTypes.node,
    children: PropTypes.node,
    compact: PropTypes.bool,
    expandData: PropTypes.object,
    glyph: PropTypes.string,
    highlight: PropTypes.oneOf([
        'default',
        'error',
        'success',
        'warning'
    ]),
    isNavigated: PropTypes.bool,
    level: PropTypes.number,
    link: PropTypes.string,
    noBorders: PropTypes.bool,
    rowId: PropTypes.string,
    selectionData: PropTypes.object,
    selectionProps: PropTypes.object,
    wrapContent: PropTypes.bool,
    onExpandClick: PropTypes.func,
    onSelectionChange: PropTypes.func
};


export default TreeNode;
