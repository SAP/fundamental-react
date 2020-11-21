import Button from '../Button/Button';
import Checkbox from '../Forms/Checkbox';
import classnamesBind from 'classnames/bind';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import keycode from 'keycode';
import List from '../List/List';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';
import shortid from '../utils/shortId';
import Token from '../Token/Token';
import withStyles from '../utils/withStyles';
import React, { Component } from 'react';
import checkboxStyles from 'fundamental-styles/dist/checkbox.css';
import inputGroupStyles from 'fundamental-styles/dist/input-group.css';
import listStyles from 'fundamental-styles/dist/list.css';
import tokenizerStyles from 'fundamental-styles/dist/tokenizer.css';

const classnames = classnamesBind.bind({
    ...checkboxStyles,
    ...inputGroupStyles,
    ...listStyles,
    ...tokenizerStyles
});
const isUsingCssModules = tokenizerStyles && Object.keys(tokenizerStyles).length > 0;

/** A **MultiInput** allows users to enter multiple values which are displayed as a tokens. It provides an editable input field for filtering the list,
 * and a dropdown menu with a list of the available options.
 * If the entries are not validated by the application, users can also enter custom values. */

class MultiInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bShowList: false,
            tags: []
        };

        this.multiInputId = shortid.generate();
    }

    // create tags to display in dropdown list
    createTagList = data => {
        const {
            cssNamespace
        } = this.props;

        return data.map((item, index) => (
            <List.Item key={index}>
                <Checkbox
                    checked={this.isChecked(item)}
                    className={classnames(`${cssNamespace}-list__input`)}
                    compact={this.props.compact}
                    id={index + `_${this.multiInputId}`}
                    labelClassName={classnames(`${cssNamespace}-list__label`)}
                    onChange={() => this.updateSelectedTags(item)}
                    value={item}>
                    <List.Text className={classnames(`${cssNamespace}-checkbox__text`)}>{item}</List.Text>
                </Checkbox>
            </List.Item>
        ));
    };

    handleTagKeyDown = (event, tag) => {
        if (keycode(event) === 'backspace' || keycode(event) === 'delete') {
            this.removeTag(tag);
        }
    };

    // create tag elements to display below input box
    createTags = () => {
        const {
            cssNamespace
        } = this.props;

        return this.state.tags.map((tag, index) => {
            if (index < 3) {
                return (
                    <Token
                        className={isUsingCssModules && classnames(`${cssNamespace}-token`)}
                        key={index}
                        onClick={() => this.removeTag(tag)}
                        onKeyDown={(event) => this.handleTagKeyDown(event, tag)}>
                        {tag}
                    </Token>
                );
            } else if (index >= this.state.tags.length - 1) {
                return (
                    <span className={classnames(`${cssNamespace}-tokenizer__indicator`)}>{this.state.tags.length - 3} more</span>
                );
            } else {
                return null;
            }
        });
    };

    // add/remove tag to tag collection
    updateSelectedTags = (tag) => {

        if (this.state.tags.indexOf(tag) === -1) {
            this.setState(
                prevState => {
                    const tags = prevState.tags;
                    tags.push(tag);

                    return { tags: tags };
                },
                () => this.props.onTagsUpdate(this.state.tags)
            );
        } else {
            this.setState(
                prevState => {
                    let tags = prevState.tags.filter(item => {
                        return item.toLowerCase() !== tag.toLowerCase();
                    });

                    return { tags: tags };
                },
                () => this.props.onTagsUpdate(this.state.tags)
            );
        }
    };

    // check to see if tag is should be checked in list
    isChecked = tag => {
        if (this.state.tags.indexOf(tag) === -1) {
            return false;
        } else {
            return true;
        }
    };

    // remove/close tag
    removeTag = (tag) => {
        this.setState(
            prevState => {
                const tags = prevState.tags.filter(item => {
                    return item.toLowerCase() !== tag.toLowerCase();
                });

                return { tags: tags };
            },
            () => this.props.onTagsUpdate(this.state.tags)
        );
    };

    // show/hide tag list drop down
    showHideTagList = () => {
        this.setState(prevState => {
            return { bShowList: !prevState.bShowList };
        });
    };

    handleClickOutside = () => {
        this.setState({ bShowList: false });
    }

    render() {
        const {
            popoverProps,
            buttonLabel,
            buttonProps,
            compact,
            className,
            cssNamespace,
            disabled,
            data,
            listProps,
            inputProps,
            onTagsUpdate,
            placeholder,
            tagProps,
            validationOverlayProps,
            validationState,
            ...rest
        } = this.props;


        const tokenizerClassName = classnames(
            `${cssNamespace}-tokenizer`,
            {
                [`${cssNamespace}-tokenizer--compact`]: compact
            }
        );

        const listClassName = classnames(
            `${cssNamespace}-list--dropdown`,
            `${cssNamespace}-list--multi-input`,
            {
                [`${cssNamespace}-list--has-message`]: validationState?.state
            }
        );

        const inputGroupClasses = classnames(
            `${cssNamespace}-input-group--control`,
            {
                'is-disabled': disabled,
                [`is-${validationState?.state}`]: validationState?.state
            }
        );

        const popoverBody = (
            <List
                className={listClassName}
                compact={compact}
                {...listProps}>
                {this.createTagList(data)}
            </List>
        );

        const inputGroup = (
            <InputGroup
                {...rest}
                aria-expanded={this.state.bShowList}
                aria-haspopup='true'
                className={inputGroupClasses}
                compact={compact}
                disabled={disabled}
                onClick={this.showHideTagList}
                validationOverlayProps={validationOverlayProps}
                validationState={this.state.bShowList ? null : validationState}>
                <div {...tagProps} className={tokenizerClassName}>
                    <div className={classnames(`${cssNamespace}-tokenizer__inner`)}>
                        {this.state.tags.length > 0 && this.createTags()}
                        <FormInput
                            {...inputProps}
                            className={classnames(`${cssNamespace}-input-group__input`, `${cssNamespace}-tokenizer__input`, { [`${cssNamespace}-input`]: isUsingCssModules })}
                            compact={compact}
                            disabled={disabled}
                            placeholder={placeholder} />
                    </div>
                </div>
                <InputGroup.Addon isButton>
                    <Button
                        aria-label={buttonLabel}
                        {...buttonProps}
                        disabled={disabled}
                        glyph='value-help'
                        option='transparent' />
                </InputGroup.Addon>
            </InputGroup>
        );

        return (
            <Popover
                {...popoverProps}
                body={
                    (<>
                        {validationState &&
                        <FormMessage
                            {...validationOverlayProps?.formMessageProps}
                            forPopoverList
                            type={validationState.state}>
                            {validationState.text}
                        </FormMessage>
                        }
                        {popoverBody}
                    </>)}
                control={inputGroup}
                disableKeyPressHandler
                disabled={disabled}
                noArrow
                onClickOutside={this.handleClickOutside}
                useArrowKeyNavigation
                widthSizingType='matchTarget' />
        );
    }
}

MultiInput.displayName = 'MultiInput';

MultiInput.propTypes = {
    /** Collection of items to display in the list */
    data: PropTypes.array.isRequired,
    /** Localized string label for dropdown button's aria-label. This is required if `buttonProps` doesn't have a valid `aria-label`. */
    buttonLabel: requiredIf(PropTypes.string, props => !props?.buttonProps || !props.buttonProps['aria-label']?.trim()),
    /** Additional props to be spread to the `<button>` element */
    buttonProps: PropTypes.object,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Additional props to be spread to the `<ul>` element */
    listProps: PropTypes.object,
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    /** Additional props to be spread to the Popover component */
    popoverProps: PropTypes.object,
    /** Additional props to be spread to the tags `<div>` element */
    tagProps: PropTypes.object,
    /** Additional props to be spread to the ValidationOverlay */
    validationOverlayProps: PropTypes.shape({
        /** Additional classes to apply to validation popover's outermost `<div>` element  */
        className: PropTypes.string,
        /** Additional props to be spread to the ValdiationOverlay's FormMessage component */
        formMessageProps: PropTypes.object,
        /** Additional classes to apply to validation popover's popper child `<div>` wrapping the provided children  */
        innerRefClassName: PropTypes.string,
        /** Additional classes to apply to validation popover's popper `<div>` element  */
        popperClassName: PropTypes.string,
        /** CSS class(es) to add to the ValidationOverlay's reference `<div>` element */
        referenceClassName: PropTypes.string,
        /** Additional props to be spread to the popover's outermost `<div>` element */
        wrapperProps: PropTypes.object
    }),
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /**
     * Callback function; triggered when a tag is added or removed.
     *
     * @param {string[]} selectedTags array of selected tags as strings
     * @returns {void}
     * */
    onTagsUpdate: PropTypes.func
};

MultiInput.defaultProps = {
    onTagsUpdate: () => {}
};

export default withStyles(MultiInput);
