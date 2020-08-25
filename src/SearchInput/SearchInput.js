import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import FormValidationOverlay from '../Forms/_FormValidationOverlay';
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
        return this.props.subStringSearch ? list.filter((item) => {
            return item.text.toLowerCase().includes(query.toLowerCase());
        }) : list.filter((item) => item.text.toLowerCase().startsWith(query.toLowerCase()));
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
        });
        item?.callback();
        this.props.onSelect(event, item);
    };

    handleChange = event => {
        let filteredResult;
        if (this.props.searchList) {
            filteredResult = this.filterList(this.props.searchList, event.target.value);
        }
        this.setState({
            value: event.target.value,
            isExpanded: true
        });
        this.props.onChange(event, filteredResult);
    };

    handleClick = () => {
        if (!this.props.readOnly) {
            this.setState(prevState => ({
                isExpanded: !prevState.isExpanded
            }));
        }
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
            placeholder,
            inShellbar,
            onEnter,
            searchList,
            subStringSearch,
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
            validationOverlayProps,
            validationState,
            disabled,
            readOnly,
            localizedText,
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
            <Menu>
                <Menu.List {...listProps}>
                    {filteredResult && filteredResult.length > 0 ? (
                        filteredResult.map((item, index) => {
                            return (
                                subStringSearch ? (<Menu.Item
                                    key={index}
                                    onClick={(e) => this.handleListItemClick(e, item)}>
                                    {item.text}
                                </Menu.Item>) :
                                    (
                                        <Menu.Item
                                            key={index}
                                            onClick={(e) => this.handleListItemClick(e, item)}>
                                            <strong>{this.state.value}</strong>
                                            {this.state.value && this.state.value.length
                                                ? item.text.substring(this.state.value.length)
                                                : item.text}
                                        </Menu.Item>
                                    )
                            );
                        })
                    ) : (
                        <Menu.Item>No result</Menu.Item>
                    )}
                </Menu.List>
            </Menu>
        );

        const inputGroup = (
            <InputGroup
                {...inputGroupProps}
                className={inputGroupClasses}
                compact={compact}
                disabled={disabled}
                readOnly={readOnly}
                validationState={validationState}>
                <FormInput
                    {...inputProps}
                    disabled={disabled}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    onKeyPress={this.handleKeyPress}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    value={this.state.value} />

                { !(noSearchBtn || readOnly) && (
                    <InputGroup.Addon {...inputGroupAddonProps} isButton>
                        <Button {...searchBtnProps}
                            aria-label={localizedText.searchBtnLabel}
                            disabled={disabled}
                            glyph='search'
                            onClick={this.handleClick}
                            option='transparent' />
                    </InputGroup.Addon>
                )}
            </InputGroup>
        );

        const wrappedInputGroup = (
            <FormValidationOverlay
                {...validationOverlayProps}
                control={inputGroup}
                validationState={validationState} />
        );

        return (
            <div {...rest} className={className}>
                <Popover
                    {...popoverProps}
                    body={
                        (<>
                            {validationState &&
                            <FormMessage
                                {...validationOverlayProps?.formMessageProps}
                                type={validationState.state}>
                                {validationState.text}
                            </FormMessage>
                            }
                            {popoverBody}
                        </>)}
                    control={wrappedInputGroup}
                    disableKeyPressHandler
                    disabled={readOnly}
                    noArrow
                    onClickOutside={this.handleClickOutside}
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
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Props to be spread to the InputGroupAddon component */
    inputGroupAddonProps: PropTypes.object,
    /** Props to be spread to the InputGroup component */
    inputGroupProps: PropTypes.object,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    inShellbar: PropTypes.bool,
    /** Additional props to be spread to the `<ul>` element */
    listProps: PropTypes.object,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        searchBtnLabel: PropTypes.string
    }),
    /** Set to **true** to render without a search button */
    noSearchBtn: PropTypes.bool,
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    /** Additional props to be spread to the Popover component */
    popoverProps: PropTypes.object,
    /** Set to **true** to mark component as readonly */
    readOnly: PropTypes.bool,
    /** Additional props to be spread to the search `<button>` element */
    searchBtnProps: PropTypes.object,
    /** Collection of items to display in the dropdown list */
    searchList: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            callback: PropTypes.func
        })
    ),
    /** enable substring search */
    subStringSearch: PropTypes.bool,
    /** Additional props to be spread to the ValidationOverlay */
    validationOverlayProps: PropTypes.shape({
        /** Additional classes to apply to validation popover's outermost `<div>` element  */
        className: PropTypes.string,
        /** Additional props to be spread to the ValdiationOverlay's FormMessage component */
        formMessageProps: PropTypes.object,
        /** CSS class(es) to add to the ValidationOverlay's reference `<div>` element */
        referenceClassName: PropTypes.string
    }),
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
    localizedText: {
        searchBtnLabel: 'Search'
    },
    onChange: () => { },
    onEnter: () => { },
    onSelect: () => { }
};

export default SearchInput;
