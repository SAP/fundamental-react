import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
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
        const randNum = Math.floor(Math.random() * 1000000 + 1);
        return data.map((item, index) => (
            <li key={index}>
                <label className='fd-menu__item' htmlFor={index + `_${randNum}`}>
                    <input
                        checked={this.isChecked(item)}
                        className='fd-checkbox'
                        id={index + `_${randNum}`}
                        onChange={this.updateSelectedTags}
                        type='checkbox'
                        value={item} />
                    {item}
                </label>
            </li>
        ));
    };

    // create tag elements to display below input box
    createTags = () => {
        return this.state.tags.map((tag, index) => (
            <span
                className='fd-token'
                key={index}
                onClick={this.removeTag}
                role='button'>
                {tag}
            </span>
        ));
    };

    // add/remove tag to tag collection
    updateSelectedTags = event => {
        const tag = event.target.value;

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
    removeTag = event => {
        const tag = event.target.innerText;

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

        const inputGroupClassNames = classnames(
            'fd-input-group',
            'fd-input-group--after',
            {
                'fd-input-group--compact': compact
            }
        );

        const inputClassNames = classnames(
            'fd-input',
            {
                'fd-input--compact': compact
            }
        );

        return (
            <div
                {...rest}
                className={multiInputClasses}>
                <div className='fd-multi-input-field'>
                    <Popover
                        {...popoverProps}
                        body={
                            <nav className='fd-menu'>
                                <ul {...listProps} className='fd-menu__list'>{this.createTagList(data)}</ul>
                            </nav>
                        }
                        control={
                            <div
                                aria-expanded={this.state.bShowList}
                                aria-haspopup='true'
                                aria-label={localizedText.imageLabel}
                                className='fd-combobox-control'>
                                <div className={inputGroupClassNames}>
                                    <input
                                        {...inputProps}
                                        className={inputClassNames}
                                        onClick={this.showHideTagList}
                                        placeholder={placeHolder}
                                        type='text' />
                                    <span
                                        className='fd-input-group__addon fd-input-group__addon--after
                                fd-input-group__addon--button'>
                                        <button
                                            {...buttonProps}
                                            className='fd-button--light sap-icon--navigation-down-arrow'
                                            onClick={this.showHideTagList} />
                                    </span>
                                </div>
                            </div>
                        }
                        noArrow />
                </div>
                {this.state.tags.length > 0 ? (
                    <div {...tagProps} className='fd-multi-input-tags'>{this.createTags()}</div>
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
        imageLabel: 'Aria-label in <div> element for image.'
    },
    onTagsUpdate: 'Callback function when a tag is added or removed. Returns array of tags selected.',
    placeHolder: 'Localized placeholder text of the input.',
    tagProps: 'Additional props to be spread to the tags `<div>` element.'
};

export default MultiInput;
