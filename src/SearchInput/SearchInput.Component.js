import { SearchInput } from './SearchInput';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
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

    searchInputCode = `<SearchInput
    placeholder='Enter a fruit'
    searchList={this.searchData}
    onEnter={term => this.getInputValue(term)} />

    
<SearchInput
    placeholder='Enter a fruit'
    noSearchBtn
    onChange={this.onChangeCallback} />

    
<SearchInput
    compact
    placeholder='Enter a fruit'
    searchList={this.searchData}
    onEnter={term => this.getInputValue(term)} />


************************************ Data ************************************

getInputValue(value) {
    this.setState({
        inputValue: value
    });

    setTimeout(
        function() {
            alert('You just set the inputValue of the state to ' + this.state.inputValue);
        }.bind(this),
        1000
    );
}

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
];`;

    render() {
        return (
            <div>
                <Header>Search Input</Header>
                <Description />
                <Import module='SearchInput' path='/fundamental-react/src/' />

                <Separator />

                <Properties
                    properties={[
                        {
                            name: 'placeholder',
                            description: 'string - The text to use as placeholder when no text is entered.'
                        },
                        {
                            name: 'searchList',
                            description: 'array - Collection of items to display in auto-complete list.'
                        },
                        {
                            name: 'onEnter',
                            description: 'func - Method to execute by pressing the Enter key.'
                        },
                        {
                            name: 'noSearhBtn',
                            description: 'bool - set to true to hide the Search button.'
                        },
                        {
                            name: 'onChange',
                            description:
                                'func - a custom implementation of onChange. If not specified, the default behavior will be applied.'
                        },
                        {
                            name: 'compact',
                            description: 'bool - Set to true to enable compact mode.'
                        }
                    ]}
                    type='Inputs' />

                <Separator />

                <DocsTile>
                    <div>
                        <SearchInput
                            onEnter={term => this.getInputValue(term)}
                            placeholder='Enter a fruit'
                            searchList={this.searchData} />
                        <br />
                        <SearchInput
                            noSearchBtn
                            onChange={this.onChangeCallback}
                            placeholder='Enter a fruit' />
                        <br />
                        <SearchInput
                            compact
                            onEnter={term => this.getInputValue(term)}
                            placeholder='Enter a fruit'
                            searchList={this.searchData} />
                    </div>
                </DocsTile>
                <DocsText>{this.searchInputCode}</DocsText>

                <Separator />
            </div>
        );
    }
}
