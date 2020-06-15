import Button from '../Button/Button';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class SearchInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            searchExpanded: false,
            value: props.inputProps?.value ? props.inputProps.value : ''
        };
    }

    filterList = (list, query) => {
        return list.filter((item) => item.text.toLowerCase().startsWith(query.toLowerCase()));
    }

    handleKeyPress = event => {
        if (event.key === 'enter') {
            this.props.onEnter(this.state.value);
        }
    };

    handleListItemClick = (event, item) => {
        this.setState({
            value: item.text,
            isExpanded: false,
            searchExpanded: false
        }, () => {
            item?.callback();
            this.props.onSelect(event, item);
        });
    };

    handleChange = event => {
        let filteredResult;
        if (this.props.searchList) {
            filteredResult = this.filterList(this.props.searchList, event.target.value);
        }
        this.setState({
            value: event.target.value,
            isExpanded: true
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
                value: ''
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
        let filteredResult = this.state.value && this.props.searchList ? this.filterList(this.props.searchList, this.state.value) : this.props.searchList;
        const popoverBody = (
            <Menu disableStyles={disableStyles}>
                <Menu.List {...listProps}>
                    {filteredResult && filteredResult.length > 0 ? (
                        filteredResult.map((item, index) => {
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
                    widthSizingType='minTarget' />
            </div>
        );
    }
}

SearchInput.displayName = 'SearchInput';

SearchInput.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Props to be spread to the InputGroupAddon component */
    inputGroupAddonProps: PropTypes.object,
    /** Props to be spread to the InputGroup component */
    inputGroupProps: PropTypes.object,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    inShellbar: PropTypes.bool,
    /** Additional props to be spread to the `<ul>` element */
    listProps: PropTypes.object,
    /** Set to **true** to render without a search button */
    noSearchBtn: PropTypes.bool,
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    /** Additional props to be spread to the Popover component */
    popoverProps: PropTypes.object,
    /** Additional props to be spread to the search `<button>` element */
    searchBtnProps: PropTypes.object,
    /** Collection of items to display in the dropdown list */
    searchList: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            callback: PropTypes.func
        })
    ),
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /** Callback function when the change event fires on the component */
    onChange: PropTypes.func,
    /** Callback function when the user hits the <enter> key */
    onEnter: PropTypes.func,
    /** Callback function when user clicks on an option */
    onSelect: PropTypes.func
};

SearchInput.defaultProps = {
    onChange: () => { },
    onEnter: () => { },
    onSelect: () => { }
};

export default SearchInput;
