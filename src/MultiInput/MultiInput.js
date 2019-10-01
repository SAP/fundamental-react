import Button from '../Button/Button';
import Checkbox from '../Forms/Checkbox';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import FormInput from '../Forms/FormInput';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import shortid from '../utils/shortId';
import Token from '../Token/Token';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';

class MultiInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bShowList: false,
            tags: []
        };
    }

    // create tags to display in dropdown list
    createTagList = data => {
        return data.map((item, index) => (
            <li className='fd-menu__item' key={index}>
                <Checkbox
                    checked={this.isChecked(item)}
                    id={index + `_${shortid.generate()}`}
                    onChange={() => this.updateSelectedTags(item)}
                    value={item} />
            </li>
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

    render() {
        const {
            popoverProps,
            buttonProps,
            compact,
            className,
            disableStyles,
            data,
            listProps,
            inputProps,
            localizedText,
            onTagsUpdate,
            placeHolder,
            tagProps,
            ...rest
        } = this.props;

        const multiInputClasses = classnames(
            'fd-multi-input',
            className
        );

        return (
            <div
                {...rest}
                className={multiInputClasses}>
                <div className='fd-multi-input-field'>
                    <Popover
                        {...popoverProps}
                        body={
                            <Menu disableStyles={disableStyles}>
                                <Menu.List {...listProps}>{this.createTagList(data)}</Menu.List>
                            </Menu>
                        }
                        control={
                            <div
                                aria-expanded={this.state.bShowList}
                                aria-haspopup='true'
                                aria-label={localizedText.imageLabel}
                                className='fd-input-group'>
                                <FormInput
                                    {...inputProps}
                                    className='fd-input-group__input'
                                    compact={compact}
                                    disableStyles={disableStyles}
                                    onClick={this.showHideTagList}
                                    placeholder={placeHolder} />
                                <span
                                    className='fd-input-group__addon fd-input-group__addon--button'>
                                    <Button
                                        {...buttonProps}
                                        className='fd-input-group__button'
                                        compact={compact}
                                        disableStyles={disableStyles}
                                        glyph='navigation-down-arrow'
                                        onClick={this.showHideTagList}
                                        option='light' />
                                </span>
                            </div>
                        }
                        disableStyles={disableStyles}
                        noArrow />
                </div>
                {this.state.tags.length > 0 ? (
                    <div {...tagProps} className='fd-multi-input-tokens'>{this.createTags()}</div>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

MultiInput.displayName = 'MultiInput';

MultiInput.propTypes = {
    data: PropTypes.array.isRequired,
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    compact: PropTypes.bool,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    inputProps: PropTypes.object,
    listProps: PropTypes.object,
    localizedText: CustomPropTypes.i18n({
        imageLabel: PropTypes.string
    }),
    placeHolder: PropTypes.string,
    popoverProps: PropTypes.object,
    tagProps: PropTypes.object,
    onTagsUpdate: PropTypes.func
};

MultiInput.defaultProps = {
    localizedText: {
        imageLabel: 'Image label'
    },
    onTagsUpdate: () => {}
};

MultiInput.propDescriptions = {
    data: 'Collection of items to display in the list.',
    localizedTextShape: {
        imageLabel: 'Aria-label in `<div>` element for image.'
    },
    onTagsUpdate: 'Callback function when a tag is added or removed. Returns array of tags selected.',
    placeHolder: 'Localized placeholder text of the input.',
    tagProps: 'Additional props to be spread to the tags `<div>` element.'
};

export { MultiInput as __MultiInput };

export default withStyles(MultiInput, { cssFile: ['multi-input', 'input-group'], fonts: true });
