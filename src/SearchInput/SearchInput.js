import Button from '../Button/Button';
import FormInput from '../Forms/FormInput';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import withStyles from '../utils/WithStyles/WithStyles';
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

    listItemClickHandler = (event, item) => {
        item.callback ? item.callback() : null;
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
            this.props.onChange(event, filteredResult);
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
            disableStyles,
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
                        (<Menu disableStyles={disableStyles}>
                            <Menu.List {...listProps}>
                                {this.state.filteredResult && this.state.filteredResult.length > 0 ? (
                                    this.state.filteredResult.map((item, index) => {
                                        return (
                                            <li
                                                className='fd-menu__item'
                                                key={index}
                                                onClick={(e) => this.listItemClickHandler(e, item)}>
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
                        </Menu>)
                    }
                    control={
                        <div className='fd-input-group fd-input-group--after'>
                            <FormInput
                                {...inputProps}
                                className='fd-input-group__input'
                                compact={compact}
                                disableStyles={disableStyles}
                                onChange={this.onChangeHandler}
                                onClick={() => this.onClickHandler()}
                                onKeyPress={this.onKeyPressHandler}
                                placeholder={placeholder}
                                value={this.state.value} />

                            {!noSearchBtn && (
                                <span className='fd-input-group__addon fd-input-group__addon--button'>
                                    <Button {...searchBtnProps}
                                        className='fd-input-group__button'
                                        compact={compact}
                                        disableStyles={disableStyles}
                                        glyph='search'
                                        onClick={() => this.onClickHandler()}
                                        option='light' />
                                </span>
                            )}
                        </div>
                    }
                    disableStyles={disableStyles} />
            </div>
        );
    }
}

SearchInput.displayName = 'SearchInput';

SearchInput.propTypes = {
    className: PropTypes.string,
    compact: PropTypes.bool,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    inputProps: PropTypes.object,
    inShellbar: PropTypes.bool,
    listProps: PropTypes.object,
    noSearchBtn: PropTypes.bool,
    placeholder: PropTypes.string,
    popoverProps: PropTypes.object,
    searchBtnProps: PropTypes.object,
    searchList: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            callback: PropTypes.func
        })
    ),
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

export { SearchInput as __SearchInput };

export default withStyles(SearchInput, { cssFile: 'input-group' });
