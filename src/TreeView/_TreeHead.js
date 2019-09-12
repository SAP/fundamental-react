import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TreeHead extends Component {
    render() {
        const {
            buttonProps,
            children,
            className,
            isExpanded,
            onExpandAll,
            ...rest
        } = this.props;

        const headerClassName = classnames(
            'fd-tree',
            'fd-tree--header',
            className
        );

        const buttonClassName = classnames(
            'fd-tree__control',
            { 'is-pressed': !!isExpanded }
        );

        return (
            <div {...rest} className={headerClassName}>
                <div className='fd-tree__row fd-tree__row--header'>
                    {
                        React.Children.toArray(children).map((child, index) => {
                            const isFirstTreeCol = index === 0 && child.type && child.type.displayName === 'TreeView.Col';

                            // Add control class to first TreeCol element
                            const childClassName = classnames({
                                'fd-tree__col--control': isFirstTreeCol
                            });

                            // Add expand button to first TreeCol element
                            const newChildren = isFirstTreeCol ? (
                                <div>
                                    <button
                                        {...buttonProps}
                                        aria-label={isExpanded ? 'collapse all' : 'expand all'}
                                        aria-pressed={isExpanded}
                                        className={buttonClassName}
                                        onClick={onExpandAll} />
                                    {child.props && child.props.children}
                                </div>
                            ) : child.props && child.props.children;

                            return React.cloneElement(child, {
                                children: newChildren,
                                className: childClassName
                            });
                        })
                    }
                </div>
            </div>
        );
    }
}

TreeHead.displayName = 'TreeView.Head';

TreeHead.propTypes = {
    buttonProps: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    isExpanded: PropTypes.bool,
    onExpandAll: PropTypes.func
};

TreeHead.propDescriptions = {
    buttonProps: 'Additional props to be spread to the header expand/collapse `<button>` element.',
    children: 'Node(s) to render within the component. Expecting `TreeCol` components as children.',
    isExpanded: '_INTERNAL USE ONLY._',
    onExpandAll: '_INTERNAL USE ONLY._'
};

export default TreeHead;
