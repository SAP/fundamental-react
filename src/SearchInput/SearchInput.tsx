import React, { Component } from 'react';

interface IProps {
  placeHolder?: string;
  data?: string[];
  onSearch: (searchTerm: string) => void;
  onAutoComplete?: (searchTerm: string) => void;
}

interface IState {
  searchTerm: string;
  bShowList: boolean;
}

export class SearchInput extends Component<IProps, IState> {
  state: IState = { searchTerm: '', bShowList: false };

  handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const { value }: any = event.target;
    const searchTerm: string = value;

    // check if control auto complete
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

  // check for enter key
  checkKey = (event: React.KeyboardEvent) => {
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
  createSearchInput = (onAutoComplete: any) => {
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
  createAutoCompleteItems = (data: string[]) => {
    return data && data.length > 0 ? (
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

  selectTerm = (event: React.FormEvent<HTMLAnchorElement>) => {
    const { innerText }: any = event.target;
    const searchTerm = innerText;
    this.setState({ searchTerm: searchTerm, bShowList: false });

    this.props.onSearch(searchTerm);
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
                    className="fd-button--light sap-icon--search"
                    onClick={() => onSearch(this.state.searchTerm)}
                  />
                </span>
              </div>
            </div>
          </div>
          {data && onAutoComplete ? (
            <div
              className="fd-popover__body fd-popover__body--no-arrow"
              aria-hidden={!this.state.bShowList}
            >
              <nav className="fd-menu">
                <ul className="fd-menu__list">
                  {this.createAutoCompleteItems(data)}
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
