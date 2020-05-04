import BaseTree from './_BaseTree';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Tree extends Component {
    render() {
        return <BaseTree {...this.props} level={0} />;
    }
}

Tree.displayName = 'TreeView.Tree';

Tree.propTypes = {
    children: PropTypes.node,
    /** Internal use only */
    expandData: PropTypes.object,
    /** Internal use only */
    isExpanded: PropTypes.bool,
    /** Internal use only */
    onExpandClick: PropTypes.func
};

Tree.defaultProps = {
    expandData: {}
};

export default Tree;
