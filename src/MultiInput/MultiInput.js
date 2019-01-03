import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MultiInput extends Component {
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
            <label htmlFor={index + `_${randNum}`} className='fd-menu__item'>
                <input
                    type='checkbox'
                    className='fd-checkbox'
                    id={index + `_${randNum}`}
                    value={item}
                    onChange={this.updateSelectedTags}
                    checked={this.isChecked(item)} />
                {item}
            </label>
        </li>
    ));
  };

  // create tag elements to display below input box
  createTags = tags => {
    return this.state.tags.map((tag, index) => (
        <span
            key={index}
            className='fd-token'
            role='button'
            onClick={this.removeTag}>
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
    const { placeHolder, data, compact, className, ...rest} = this.props;

    const inputGroupClassNames = `fd-input-group fd-input-group--after${
      compact ? ' fd-input-group--compact' : ''
    }`;

    const inputClassNames = `fd-input${compact ? ' fd-input--compact' : ''}`;

    return (
        <div className={`fd-multi-input${className ? ' ' + className : ''}`} {...rest}>
            <div className='fd-multi-input-field'>
                <div className='fd-popover'>
                    <div className='fd-popover__control'>
                        <div
                            className='fd-combobox-control'
                            aria-label='Image label'
                            aria-expanded={this.state.bShowList}
                            aria-haspopup='true'>
                            <div className={inputGroupClassNames}>
                                <input
                                    type='text'
                                    className={inputClassNames}
                                    placeholder={placeHolder}
                                    onClick={this.showHideTagList} />
                                <span
                                    className='fd-input-group__addon fd-input-group__addon--after
                            fd-input-group__addon--button'>
                                    <button
                                        className='fd-button--light sap-icon--navigation-down-arrow'
                                        onClick={this.showHideTagList} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='fd-popover__body fd-popover__body--no-arrow'
                        aria-hidden={!this.state.bShowList}>
                        <nav className='fd-menu'>
                            <ul className='fd-menu__list'>{this.createTagList(data)}</ul>
                        </nav>
                    </div>
                </div>
            </div>
            {this.state.tags.length > 0 ? (
                <div className='fd-multi-input-tags'>{this.createTags()}</div>
        ) : (
          ''
        )}
        </div>
    );
  }
}

MultiInput.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
  compact: PropTypes.bool,
  placeHolder: PropTypes.string,
  onTagsUpdate: PropTypes.func
};
