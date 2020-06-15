import BaseTree from './_BaseTree';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TreeBranch extends Component {
    render() {
        return <BaseTree {...this.props} />;
    }
}

TreeBranch.displayName = 'TreeView.Branch';

TreeBranch.propTypes = {
    /** Node(s) to render within the component. Expecting `TreeItem` components as children */
    children: PropTypes.node,
    /** Internal use only */
    expandData: PropTypes.object,
    /** Internal use only */
    isExpanded: PropTypes.bool,
    /** Internal use only */
    level: PropTypes.number,
    /** Internal use only */
    onExpandClick: PropTypes.func
};

TreeBranch.defaultProps = {
    expandData: {}
};

export default TreeBranch;
