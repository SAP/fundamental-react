import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class NavSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            searchItems: props.searchItems
        };
    }

    onChangeHandler = (event) => {
        this.setState({
            query: event.target.value
        });
        // eslint-disable-next-line no-console
        console.log(this.state.searchItems);
        this.onSearchChange(event.target.value);
    }

    onSearchChange = (value) => {
        // eslint-disable-next-line no-console
        console.log(value);
        const searchValue = new RegExp(`${value}`);
        const searchResults = this.state.searchItems.filter((searchItem) => {
            return searchValue.test(`${searchItem.name}`);
        });
        this.setState({
            searchItems: searchResults
        });
        // eslint-disable-next-line no-console
        console.log(this.state.searchItems);
        return this.state.searchItems;
    };

    render() {
        return (
            <input
                className='nav-search'
                name='search'
                onChange={this.onChangeHandler}
                placeholder='Search'
                value={this.state.query} />
        );
    }
}

NavSearch.propTypes = {
    searchItems: PropTypes.array,
    onChangeHandler: PropTypes.func
};

