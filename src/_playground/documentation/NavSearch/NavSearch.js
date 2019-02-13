import PropTypes from 'prop-types';
import React from 'react';

export const NavSearch = (props) => {

    return (
        <input
            autoComplete='off'
            className='frDocs-nav__search'
            name='search'
            onChange={props.onChange}
            placeholder='Search'
            type='text'
            value={props.query} />
    );
};

NavSearch.propTypes = {
    query: PropTypes.string,
    onChange: PropTypes.func
};
