import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TreeCol extends Component {
    render() {
        const {
            children,
            className,
            ...rest
        } = this.props;

        const cellClassName = classnames(
            'fd-tree__col',
            className
        );

        return (
            <div
                {...rest}
                className={cellClassName}>
                {children}
            </div>
        );
    }
}

TreeCol.displayName = 'TreeView.Col';

TreeCol.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default TreeCol;
