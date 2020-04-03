import Button from '../Button/Button';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
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
            value: props.inputProps?.value ? props.inputProps.value : '',
            searchList: props.searchList,
            filteredResult: props.inputProps?.value ? this.filterList(props.searchList, props.inputProps.value) : props.searchList
        };
    }

    filterList = (list, query) => {
        return list.filter((item) => item.text.toLowerCase().startsWith(query.toLowerCase()));
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.props.onEnter(this.state.value);
        }
    };

    handleListItemClick = (event, item) => {
        this.setState((prevState) => ({
            value: item.text,
            isExpanded: false,
            searchExpanded: false,
            filteredResult: this.filterList(prevState.searchList, item.text)
        }), () => {
            item?.callback();
            this.props.onSelect(event, item);
        });
    };

    handleChange = event => {
        let filteredResult;
        if (this.state.searchList) {
            filteredResult = this.filterList(this.state.searchList, event.target.value);
        }
        this.setState({
            value: event.target.value,
            isExpanded: true,
            filteredResult: filteredResult
        }, () => {
            this.props.onChange(event, filteredResult);
        });
    };

    handleClick = () => {
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
    };

    handleClickOutside = () => {
        this.setState({
            isExpanded: false,
            searchExpanded: false
        });
    };

    handleSearchBtn = () => {
        this.setState(prevState => ({
            searchExpanded: !prevState.searchExpanded
        }));

        if (this.state.searchExpanded && this.state.isExpanded) {
            this.setState({
                isExpanded: false
            });
        }
    };

    handleEsc = event => {
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

    componentDidMount() {
        document.addEventListener('keydown', this.handleEsc, false);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEsc, false);
    }

    render() {
        const {
            disableStyles,
            placeholder,
            inShellbar,
            onEnter,
            searchList,
            onChange,
            onSelect,
            noSearchBtn,
            compact,
            className,
            inputProps,
            inputGroupAddonProps,
            inputGroupProps,
            listProps,
            searchBtnProps,
            popoverProps,
            validationState,
            ...rest
        } = this.props;

        let inputGroupClasses = inputGroupProps && inputGroupProps.className;

        inputGroupClasses = !inShellbar ? classnames(
            inputGroupClasses,
            'fd-input-group--control',
            {
                [`is-${validationState?.state}`]: validationState?.state
            }
        ) : inputGroupClasses;

        const popoverBody = (
            <Menu disableStyles={disableStyles}>
                <Menu.List {...listProps}>
                    {this.state.filteredResult && this.state.filteredResult.length > 0 ? (
                        this.state.filteredResult.map((item, index) => {
                            return (
                                <Menu.Item
                                    key={index}
                                    onClick={(e) => this.handleListItemClick(e, item)}>
                                    <strong>{this.state.value}</strong>
                                    {this.state.value && this.state.value.length
                                        ? item.text.substring(this.state.value.length)
                                        : item.text}
                                </Menu.Item>
                            );
                        })
                    ) : (
                        <Menu.Item>No result</Menu.Item>
                    )}
                </Menu.List>
            </Menu>
        );

        return (
            <div {...rest} className={className}>
                <Popover
                    {...popoverProps}
                    body={
                        (<>
                            {validationState &&
                            <FormMessage
                                disableStyles={disableStyles}
                                type={validationState.state}>
                                {validationState.text}
                            </FormMessage>
                            }
                            {popoverBody}
                        </>)}
                    control={
                        <InputGroup
                            {...inputGroupProps}
                            className={inputGroupClasses}
                            compact={compact}
                            disableStyles={disableStyles}
                            validationState={!this.state.isExpanded ? validationState : null}>
                            <FormInput
                                {...inputProps}
                                disableStyles={disableStyles}
                                onChange={this.handleChange}
                                onClick={this.handleClick}
                                onKeyPress={this.handleKeyPress}
                                placeholder={placeholder}
                                value={this.state.value} />

                            {!noSearchBtn && (
                                <InputGroup.Addon {...inputGroupAddonProps} isButton>
                                    <Button {...searchBtnProps}
                                        disableStyles={disableStyles}
                                        glyph='search'
                                        onClick={this.handleClick}
                                        option='transparent' />
                                </InputGroup.Addon>
                            )}
                        </InputGroup>
                    }
                    disableKeyPressHandler
                    disableStyles={disableStyles}
                    noArrow
                    onClickOutside={this.handleClickOutside}
                    show={this.state.isExpanded}
                    widthSizingType='matchTarget' />
            </div>
        );
    }
}

SearchInput.displayName = 'SearchInput';

SearchInput.propTypes = {
    className: PropTypes.string,
    compact: PropTypes.bool,
    disableStyles: PropTypes.bool,
    inputGroupAddonProps: PropTypes.object,
    inputGroupProps: PropTypes.object,
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
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    onSelect: PropTypes.func
};

SearchInput.defaultProps = {
    onChange: () => { },
    onEnter: () => { },
    onSelect: () => { }
};

SearchInput.propDescriptions = {
    inputGroupAddonProps: 'Props to be spread to the InputGroupAddon component.',
    inputGroupProps: 'Props to be spread to the InputGroup component.',
    noSearchBtn: 'Set to **true** to render without a search button.',
    onEnter: 'Callback function when the user hits the <Enter> key.',
    searchBtnProps: 'Additional props to be spread to the search `<button>` element.',
    searchList: 'Collection of items to display in the dropdown list.'
};

export default SearchInput;
