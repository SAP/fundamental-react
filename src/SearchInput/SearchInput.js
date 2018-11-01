import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      bShowList: false
    };
  }

  // fired on change of text input
  handleSearch = event => {
    const searchTerm = event.target.value;

    // check if control is onAutoComplete
    if (this.props.onAutoComplete) {
      if (searchTerm) {
        this.setState({ searchTerm: searchTerm, bShowList: true });
      } else {
        // no search term, remove text from search box and hide list
        this.setState({ searchTerm: searchTerm, bShowList: false });
      }
      this.props.onAutoComplete(searchTerm);
    } else {
      this.setState({ searchTerm: searchTerm });
    }
  };

  // fired on list item selection
  selectTerm = event => {
    const searchTerm = event.target.innerText;
    this.setState({ searchTerm: searchTerm, bShowList: false });

    this.props.onSearch(searchTerm);
  };

  // check for enter key
  checkKey = event => {
    const key = event.key;

    if (key === 'Enter') {
      if (this.props.data && this.props.data.length > 0) {
        this.setState(
          { searchTerm: this.props.data[0], bShowList: false },
          () => this.props.onSearch(this.state.searchTerm)
        );
      } else {
        this.props.onSearch(this.state.searchTerm);
      }
    }
  };

  // create search box
  createSearchInput = onAutoComplete => {
    let searchInput = (
      <input
        type="text"
        className="fd-input"
        onChange={this.handleSearch}
        placeholder={this.props.placeHolder}
        onKeyPress={this.checkKey}
      />
    );

    // include auto complete functionality if onAutoComplete method is passed to component
    if (onAutoComplete) {
      searchInput = (
        <input
          type="text"
          className="fd-input"
          value={this.state.searchTerm}
          placeholder={this.props.placeHolder}
          onChange={this.handleSearch}
          onFocus={this.handleSearch}
          onKeyPress={this.checkKey}
          onBlur={() => {
            this.setState({ bShowList: false });
          }}
        />
      );
    }

    return searchInput;
  };

  // create auto complete search items
  createSearchItems = data => {
    return data.length > 0 ? (
      data.map((item, index) => {
        let classNames = 'fd-menu__item';
        if (index === 0) {
          classNames += ' is-selected';
        }
        return (
          <li key={index}>
            <a href="#" className={classNames} onClick={this.selectTerm}>
              {item}
            </a>
          </li>
        );
      })
    ) : (
      <li>
        <a href="#" className="fd-menu__item">
          No results found
        </a>
      </li>
    );
  };

  render() {
    const { data, onSearch, onAutoComplete } = this.props;

    return (
      <div className="fd-search-input">
        <div className="fd-popover">
          <div className="fd-popover__control">
            <div
              className="fd-combobox-control"
              aria-label="Image label"
              aria-expanded={this.state.bShowList}
              aria-haspopup="true"
            >
              <div className="fd-input-group fd-input-group--after">
                {this.createSearchInput(onAutoComplete)}
                <span className="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                  <button
                    className=" fd-button--light sap-icon--search"
                    onClick={() => onSearch(this.state.searchTerm)}
                  />
                </span>
              </div>
            </div>
          </div>
          {onAutoComplete ? (
            <div
              className="fd-popover__body fd-popover__body--no-arrow"
              aria-hidden={!this.state.bShowList}
            >
              <nav className="fd-menu">
                <ul className="fd-menu__list">
                  {this.createSearchItems(data)}
                </ul>
              </nav>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  placeHolder: PropTypes.string,
  data: PropTypes.array,
  onSearch: PropTypes.func.isRequired,
  onAutoComplete: PropTypes.func
};
