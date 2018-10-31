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

  handleSearch = event => {
    const searchTerm = event.target.value;

    if (searchTerm) {
      this.setState({ searchTerm: searchTerm, bShowList: true });
    } else {
      // no search term, remove text from search box and hide list
      this.setState({ searchTerm: searchTerm, bShowList: false });
    }

    this.props.search(searchTerm);
  };

  selectTerm = event => {
    const searchTerm = event.target.innerText;
    this.setState({ searchTerm: searchTerm, bShowList: false });
  };

  render() {
    const { placeHolder, data, performSearch } = this.props;

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
                <input
                  type="text"
                  className="fd-input"
                  value={this.state.searchTerm}
                  placeholder={placeHolder}
                  onChange={this.handleSearch}
                  onFocus={this.handleSearch}
                  onBlur={() => {
                    this.setState({ bShowList: false });
                  }}
                />
                <span className="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                  <button
                    className=" fd-button--light sap-icon--search"
                    onClick={performSearch}
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            className="fd-popover__body fd-popover__body--no-arrow"
            aria-hidden={!this.state.bShowList}
          >
            <nav className="fd-menu">
              <ul className="fd-menu__list">
                {data.length > 0
                  ? data.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="fd-menu__item"
                          onClick={this.selectTerm}
                        >
                          {item}
                        </a>
                      </li>
                    ))
                  : ''}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  placeHolder: PropTypes.string,
  data: PropTypes.array.isRequired,
  performSearch: PropTypes.func.isRequired
};
