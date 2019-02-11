import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class NavSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input
                className='nav-search'
                name='search'
                onChange={this.props.onChange}
                placeholder='Search'
                value={this.props.query} />
        );
    }
}

NavSearch.propTypes = {
    query: PropTypes.string,
    onChange: PropTypes.func
};

