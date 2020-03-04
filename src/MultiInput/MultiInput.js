import Button from '../Button/Button';
import Checkbox from '../Forms/Checkbox';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import List from '../List/List';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import shortid from '../utils/shortId';
import Token from '../Token/Token';
import React, { Component } from 'react';

class MultiInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bShowList: false,
            tags: []
        };
    }

    componentDidMount() {
        if (!this.props.disableStyles) {
            require('fundamental-styles/dist/tokenizer.css');
        }
    }

    // create tags to display in dropdown list
    createTagList = data => {
        return data.map((item, index) => (
            <List.Item key={index}>
                <Checkbox
                    checked={this.isChecked(item)}
                    className='fd-list__input'
                    compact={this.props.compact}
                    id={index + `_${shortid.generate()}`}
                    labelClasses='fd-list__label'
                    onChange={() => this.updateSelectedTags(item)}
                    value={item}>
                    <List.Text>{item}</List.Text>
                </Checkbox>
            </List.Item>
        ));
    };

    // create tag elements to display below input box
    createTags = () => {
        return this.state.tags.map((tag, index) => (
            <Token
                key={index}
                onClick={() => this.removeTag(tag)}>
                {tag}
            </Token>
        ));
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
            buttonProps,
            compact,
            className,
            disabled,
            disableStyles,
            data,
            listProps,
            inputProps,
            onTagsUpdate,
            placeholder,
            tagProps,
            validationState,
            ...rest
        } = this.props;


        const tokenizerClassNames = classnames(
            'fd-tokenizer',
            {
                'fd-tokenizer--compact': compact
            }
        );

        const listClassNames = classnames(
            'fd-list--dropdown',
            'fd-list--multi-input',
            {
                'fd-list--has-message': validationState?.state
            }
        );

        const inputGroupClasses = classnames(
            'fd-input-group--control',
            {
                'is-disabled': disabled,
                [`is-${validationState?.state}`]: validationState?.state
            }
        );

        const popoverBody = (
            <List
                className={listClassNames}
                compact={compact}
                disableStyles={disableStyles}
                {...listProps}>
                {this.createTagList(data)}
            </List>
        );

        return (
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
                        {...rest}
                        aria-expanded={this.state.bShowList}
                        aria-haspopup='true'
                        className={inputGroupClasses}
                        compact={compact}
                        disableStyles={disableStyles}
                        disabled={disabled}
                        onClick={this.showHideTagList}
                        validationState={!this.state.bShowList ? validationState : null}>
                        <div {...tagProps} className={tokenizerClassNames}>
                            <div className='fd-tokenizer__inner'>
                                {this.state.tags.length > 0 && this.createTags()}
                                <FormInput
                                    {...inputProps}
                                    className='fd-tokenizer__input'
                                    compact={compact}
                                    disableStyles={disableStyles}
                                    placeholder={placeholder} />
                            </div>
                        </div>
                        <InputGroup.Addon isButton>
                            <Button
                                {...buttonProps}
                                disableStyles={disableStyles}
                                glyph='value-help'
                                option='transparent' />
                        </InputGroup.Addon>
                    </InputGroup>
                }
                disableStyles={disableStyles}
                disabled={disabled}
                noArrow
                onClickOutside={this.handleClickOutside}
                widthSizingType='matchTarget' />
        );
    }
}

MultiInput.displayName = 'MultiInput';

MultiInput.propTypes = {
    data: PropTypes.array.isRequired,
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    inputProps: PropTypes.object,
    listProps: PropTypes.object,
    placeholder: PropTypes.string,
    popoverProps: PropTypes.object,
    tagProps: PropTypes.object,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
    onTagsUpdate: PropTypes.func
};

MultiInput.defaultProps = {
    onTagsUpdate: () => {}
};

MultiInput.propDescriptions = {
    data: 'Collection of items to display in the list.',
    onTagsUpdate: 'Callback function when a tag is added or removed. Returns array of tags selected.',
    placeholder: 'Localized placeholder text of the input.',
    tagProps: 'Additional props to be spread to the tags `<div>` element.'
};

export default MultiInput;
