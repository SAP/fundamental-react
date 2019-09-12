import 'fundamental-styles/dist/input-group.css'; //remove when replaced with InputGroup component
import Button from '../Button/Button';
import FormInput from '../Forms/FormInput';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
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
            popoverProps,
            ...rest
        } = this.props;

        return (
            <div {...rest} className={className}>
                <Popover
                    {...popoverProps}
                    body={
                        {/*<Menu>
                            <Menu.List {...listProps}>
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
                            </Menu.List>
                                </Menu>*/}
                    }
                    control={
                        <div className='fd-input-group fd-input-group--after'>
                            <FormInput
                                {...inputProps}
                                compact={compact}
                                onChange={this.onChangeHandler}
                                onClick={() => this.onClickHandler()}
                                onKeyPress={this.onKeyPressHandler}
                                placeholder={placeholder}
                                value={this.state.value} />

                            {!noSearchBtn && (
                                <span className='fd-input-group__addon fd-input-group__addon--button'>
                                    <Button {...searchBtnProps}
                                        compact={compact}
                                        glyph='search'
                                        onClick={() => this.onClickHandler()}
                                        option='light' />
                                </span>
                            )}
                        </div>
                    } />
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
    popoverProps: PropTypes.object,
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
