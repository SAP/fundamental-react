import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import keycode from 'keycode';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import React, { useEffect, useState } from 'react';
import styles from 'fundamental-styles/dist/input-group.css';

const classnames = classnamesBind.bind(styles);

const SearchInput = React.forwardRef( ({
    className,
    compact,
    cssNamespace,
    disabled,
    formMessageProps,
    inputProps,
    inputGroupAddonProps,
    inputGroupProps,
    inShellbar,
    listProps,
    localizedText,
    noSearchBtn,
    onChange,
    onEnter,
    onSelect,
    placeholder,
    popoverProps,
    readOnly,
    searchList,
    subStringSearch,
    searchBtnProps,
    validationState,
    ...rest
}, ref) => {
    const [isExpanded, setIsExpanded ] = useState(false);
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [value, setValue] = useState(inputProps?.value || '');

    const filterList = (list, query) => {
        return subStringSearch ? list.filter((item) => {
            return item.text.toLowerCase().includes(query.toLowerCase());
        }) : list.filter((item) => item.text.toLowerCase().startsWith(query.toLowerCase()));
    };

    const handleKeyPress = event => {
        if (keycode(event) === 'enter') {
            onEnter(value);
        }
    };

    const handleListItemClick = (event, item) => {
        setValue(item.text);
        setIsExpanded(false);
        setSearchExpanded(false);
        item?.callback();
        onSelect(event, item);
    };

    const handleChange = event => {
        let filteredResult;
        if (searchList) {
            filteredResult = filterList(searchList, event.target.value);
        }
        setValue(event.target.value);
        setIsExpanded(true);
        onChange(event, filteredResult);
    };

    const handleClick = () => {
        if (!readOnly) {
            setIsExpanded(!isExpanded);
        }
    };

    const handleClickOutside = () => {
        setIsExpanded(false);
        setSearchExpanded(false);
    };

    const handleEsc = event => {
        if (
            (event.keyCode === 27 && isExpanded === true) ||
            (event.keyCode === 27 && searchExpanded === true)
        ) {
            setIsExpanded(false);
            setSearchExpanded(false);
            setValue('');
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEsc, false);

        return () => {
            document.removeEventListener('keydown', handleEsc, false);
        };
    });


    let inputGroupClasses = inputGroupProps && inputGroupProps.className;

    inputGroupClasses = !inShellbar ? classnames(
        inputGroupClasses,
        `${cssNamespace}-input-group--control`,
        {
            [`is-${validationState?.state}`]: validationState?.state
        }
    ) : inputGroupClasses;
    let filteredResult = value && searchList ? filterList(searchList, value) : searchList;
    const popoverBody = (
        <Menu>
            <Menu.List {...listProps}>
                {filteredResult && filteredResult.length > 0 ? (
                    filteredResult.map((item, index) => {
                        return (
                            subStringSearch ? (<Menu.Item
                                key={index}
                                onClick={(e) => handleListItemClick(e, item)}>
                                {item.text}
                            </Menu.Item>) :
                                (
                                    <Menu.Item
                                        key={index}
                                        onClick={(e) => handleListItemClick(e, item)}>
                                        <strong>{value}</strong>
                                        {value && value.length
                                            ? item.text.substring(value.length)
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
            // need to get the styling into the input group, but without creating a duplicate popover
            validationState={{ state: validationState?.state, text: '' }}>
            <FormInput
                {...inputProps}
                disabled={disabled}
                onChange={handleChange}
                onClick={handleClick}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value} />

            { !(noSearchBtn || readOnly) && (
                <InputGroup.Addon {...inputGroupAddonProps} isButton>
                    <Button {...searchBtnProps}
                        aria-label={localizedText.searchBtnLabel}
                        disabled={disabled}
                        glyph='search'
                        onClick={handleClick}
                        option='transparent' />
                </InputGroup.Addon>
            )}
        </InputGroup>
    );

    return (
        <div
            {...rest}
            className={className}
            ref={ref}>
            <Popover
                {...popoverProps}
                body={
                    (<>
                        {validationState &&
                            <FormMessage
                                {...formMessageProps}
                                type={validationState.state}>
                                {validationState.text}
                            </FormMessage>
                        }
                        {popoverBody}
                    </>)}
                control={inputGroup}
                disableKeyPressHandler
                disabled={readOnly}
                noArrow
                onClickOutside={handleClickOutside}
                widthSizingType='minTarget' />
        </div>
    );
});

SearchInput.displayName = 'SearchInput';

SearchInput.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Additional props to be spread to the FormMessage component */
    formMessageProps: PropTypes.object,
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
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /**
     * Callback function; triggered when a change event is fired on the underlying `<input>`.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @param {Object[]} matches - array of objects from searchList that match the search string.
     * @returns {void}
    */
    onChange: PropTypes.func,
    /**
     * Callback function; triggered when the user hits the `enter` key in the text `<input>`.
     *
     * @param {string} text - current string value of input field.
     * @returns {void}
     * */
    onEnter: PropTypes.func,
    /**
     * Callback function; triggered when user clicks on an option.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @param {Object} data - selected object from searchList
     * @returns {void}
     * */
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

export default withStyles(SearchInput);
