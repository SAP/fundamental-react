import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            document.getElementById('frDocs-Content').scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

ScrollToTop.propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
};

export default withRouter(ScrollToTop);
