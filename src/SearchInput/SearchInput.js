import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            searchExpanded: false,
            value: '',
            searchList: this.props.searchList,
            filteredResult: this.props.searchList
        };
    }

    style = {
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px'
    };

    onKeyPressHandler = event => {
        if (event.key === 'Enter') {
            this.props.onEnter(this.state.value);
        }
    };

    listItemClickHandler = item => {
        item.callback();
    };

    onChangeHandler = event => {
        let filteredResult;
        if (this.state.searchList) {
            filteredResult = this.state.searchList.filter(item =>
                item.text.toLowerCase().startsWith(event.target.value.toLowerCase())
            );
        }
        this.setState({
            value: event.target.value,
            isExpanded: true,
            filteredResult: filteredResult
        }, () => {
            this.props.onChange(event);
        });
    };

    onClickHandler = () => {
        if (!this.state.isExpanded) {
            document.addEventListener('click', this.onOutsideClickHandler, false);
        } else {
            document.removeEventListener('click', this.onOutsideClickHandler, false);
        }
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
    };

    onSearchBtnHandler = () => {
        this.setState(prevState => ({
            searchExpanded: !prevState.searchExpanded
        }));

        if (this.state.searchExpanded && this.state.isExpanded) {
            this.setState({
                isExpanded: false
            });
        }
    };

    onEscHandler = event => {
        if (
            (event.keyCode === 27 && this.state.isExpanded === true) ||
            (event.keyCode === 27 && this.state.searchExpanded === true)
        ) {
            this.setState({
                isExpanded: false,
                searchExpanded: false,
                value: '',
                searchList: this.props.searchList,
                filteredResult: this.props.searchList
            });
        }
    };

    onOutsideClickHandler = e => {
        e.stopPropagation();
        if (this.node && !this.node.contains(e.target)) {
            if (this.state.isExpanded) {
                this.setState({
                    isExpanded: false
                });

                if (
                    this.props.inShellbar &&
                    this.state.searchExpanded &&
                    !this.state.value
                ) {
                    this.setState({
                        searchExpanded: false
                    });
                }
            } else {
                return;
            }
        }
    };
    componentDidMount() {
        document.addEventListener('keydown', this.onEscHandler, false);
        document.addEventListener('click', this.onOutsideClickHandler, false);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onEscHandler, false);
        document.removeEventListener('click', this.onOutsideClickHandler, false);
    }

    render() {
        const {
            placeholder,
            inShellbar,
            onEnter,
            searchList,
            onChange,
            noSearchBtn,
            compact,
            className,
            inputProps,
            listProps,
            searchBtnProps,
            ...rest
        } = this.props;

        const searchInputClasses = classnames(
            'fd-search-input',
            {
                'fd-search-input--closed': inShellbar
            },
            className
        );

        const inputGroupClasses = classnames(
            'fd-input-group',
            'fd-input-group--after',
            {
                'fd-input-group--compact': compact
            }
        );

        const inputClasses = classnames(
            'fd-input',
            {
                'fd-input--compact': compact
            }
        );

        const bodyClasses = classnames(
            {
                'fd-search-input__body': inShellbar
            }
        );

        return (
            <div
                {...rest}
                className={searchInputClasses}>
                <div className='fd-popover'>
                    {inShellbar ? (
                        <div className='fd-popover__control fd-search-input__control'>
                            <button
                                {...searchBtnProps}
                                aria-expanded={this.state.searchExpanded}
                                aria-haspopup='true'
                                className='sap-icon--search fd-button--shell'
                                onClick={this.onSearchBtnHandler} />
                            <div
                                aria-hidden={!this.state.searchExpanded}
                                className='fd-search-input__closedcontrol'>
                                <div
                                    aria-expanded={this.state.searchExpanded}
                                    aria-haspopup='true'
                                    className='fd-search-input__controlinput'>
                                    <input
                                        {...inputProps}
                                        className='fd-input'
                                        onChange={this.onChangeHandler}
                                        onClick={() => this.onClickHandler()}
                                        onKeyPress={this.onKeyPressHandler}
                                        placeholder={placeholder}
                                        ref={node => (this.node = node)}
                                        type='text'
                                        value={this.state.value} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={'fd-popover__control'}>
                            <div
                                aria-expanded={this.state.isExpanded}
                                aria-haspopup='true'
                                className='fd-combobox-control'>
                                <div
                                    className={inputGroupClasses}
                                    ref={node => (this.node = node)}>
                                    <input
                                        {...inputProps}
                                        className={inputClasses}
                                        onChange={this.onChangeHandler}
                                        onClick={() => this.onClickHandler()}
                                        onKeyPress={this.onKeyPressHandler}
                                        placeholder={placeholder}
                                        style={noSearchBtn ? this.style : {}}
                                        type='text'
                                        value={this.state.value} />

                                    {!noSearchBtn && (
                                        <span className='fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button'>
                                            <button {...searchBtnProps}
                                                className='fd-button--light sap-icon--search'
                                                onClick={() => this.onClickHandler()} />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {this.state.filteredResult && (
                        <div
                            aria-hidden={!this.state.isExpanded}
                            className='fd-popover__body fd-popover__body--no-arrow'>
                            <div className={bodyClasses}>
                                <nav className='fd-menu'>
                                    <ul {...listProps} className='fd-menu__list'>
                                        {this.state.filteredResult.length > 0 ? (
                                            this.state.filteredResult.map((item, index) => {
                                                return (
                                                    <li
                                                        className='fd-menu__item'
                                                        key={index}
                                                        onClick={() => this.listItemClickHandler(item)}>
                                                        <strong>{this.state.value}</strong>
                                                        {this.state.value && this.state.value.length
                                                            ? item.text.substring(this.state.value.length)
                                                            : item.text}
                                                    </li>
                                                );
                                            })
                                        ) : (
                                            <li className='fd-menu__item'>No result</li>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

SearchInput.displayName = 'SearchInput';

SearchInput.propTypes = {
    className: PropTypes.string,
    compact: PropTypes.bool,
    inputProps: PropTypes.object,
    inShellbar: PropTypes.bool,
    listProps: PropTypes.object,
    noSearchBtn: PropTypes.bool,
    placeholder: PropTypes.string,
    searchBtnProps: PropTypes.object,
    searchList: PropTypes.array,
    onChange: PropTypes.func,
    onEnter: PropTypes.func
};

SearchInput.defaultProps = {
    onChange: () => { },
    onEnter: () => { }
};

SearchInput.propDescriptions = {
    noSearchBtn: 'Set to **true** to render without a search button.',
    onEnter: 'Callback function when the user hits the <Enter> key.',
    searchBtnProps: 'Additional props to be spread to the search `<button>` element.',
    searchList: 'Collection of items to display in the dropdown list.'
};

export default SearchInput;
