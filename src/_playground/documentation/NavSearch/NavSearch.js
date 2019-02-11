import PropTypes from 'prop-types';
import React from 'react';

export const NavSearch = () => {

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

