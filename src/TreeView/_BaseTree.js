import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class BaseTree extends Component {
    render() {
        const {
            children,
            expandData,
            level,
            isExpanded,
            onExpandClick,
            ...rest
        } = this.props;

        const className = classnames({
            'fd-tree': level === 0,
            'fd-tree__group': level > 0,
            [`fd-tree__group--sublevel-${level}`]: level > 0,
            'is-hidden': level > 0 && !isExpanded
        });

        return (
            <ul
                {...rest}
                aria-hidden={level > 0 && !isExpanded}
                className={className}
                role={level === 0 ? 'tree' : 'group'}>
                {React.Children.toArray(children).map(child => {
                    return React.cloneElement(child, {
                        expandData,
                        level,
                        onExpandClick
                    });
                })}
            </ul>
        );
    }
}

BaseTree.displayName = 'BaseTree';

BaseTree.propTypes = {
    expandData: PropTypes.object.isRequired,
    level: PropTypes.number.isRequired,
    onExpandClick: PropTypes.func.isRequired,
    children: PropTypes.node,
    isExpanded: PropTypes.bool
};

export default BaseTree;
