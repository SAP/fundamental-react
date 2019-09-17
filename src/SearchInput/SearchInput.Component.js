import path from 'path';
import { SearchInput } from '../';
import { ComponentPage, Example } from '../_playground';
import React, { Component } from 'react';

export class SearchInputComponent extends Component {
    searchData = [
        { text: 'apple', callback: () => alert('apple') },
        { text: 'apricot', callback: () => alert('apricot') },
        { text: 'banana', callback: () => alert('banana') },
        { text: 'blueberry', callback: () => alert('blueberry') },
        { text: 'blackberry', callback: () => alert('blackberry') },
        { text: 'calabash', callback: () => alert('calabash') },
        { text: 'clementines', callback: () => alert('clementines') },
        { text: 'kiwi', callback: () => alert('kiwi') },
        { text: 'orange', callback: () => alert('orange') }
    ];

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    getInputValue(value) {
        this.setState({
            inputValue: value
        });

        setTimeout(
            function() {
                alert('You just set the inputValue of the state to ' + this.state.inputValue);
            }.bind(this),
            100
        );
    }

    onChangeCallback() {
        alert('Your custom onChange function is fired!');
    }

    render() {
        return (
            <ComponentPage
                sourceModulePath={path.join(__dirname, './SearchInput')}
                title='Search Input'>

                <Example
                    centered
                    title='Search Inputs'>
                    <SearchInput
                        onEnter={term => this.getInputValue(term)}
                        placeholder='Enter a fruit'
                        searchList={this.searchData} />
                    <SearchInput
                        noSearchBtn
                        onChange={this.onChangeCallback}
                        placeholder='Enter a fruit' />
                    <SearchInput
                        compact
                        onEnter={term => this.getInputValue(term)}
                        placeholder='Enter a fruit'
                        searchList={this.searchData} />
                </Example>

            </ComponentPage>
        );
    }
}
