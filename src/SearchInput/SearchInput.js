import React, { Component } from 'react';

export class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            searchExpanded: false,
            value: '',
            searchList: this.props.searchList,
            filteredResult: this.props.searchList
        };
    }

  style = {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px'
  };

  onKeyPressHandler = event => {
      if (event.key === 'Enter') {
          this.props.onEnter(this.state.value);
      }
  };

  listItemClickHandler = item => {
      item.callback();
  };

  onChangeHandler = event => {
      this.setState({
          value: event.target.value
      });
      if (this.props.onChange) {
          this.props.onChange();
      } else {
          if (this.state.searchList) {
              let filteredResult = this.state.searchList.filter(item =>
                  item.text.toLowerCase().startsWith(event.target.value.toLowerCase())
              );
              this.setState({
                  filteredResult: filteredResult
              });
          }
          if (!this.state.isExpanded) {
              this.setState({
                  isExpanded: true
              });
          }
      }
  };

  onClickHandler = () => {
      if (!this.state.isExpanded) {
          document.addEventListener('click', this.onOutsideClickHandler, false);
      } else {
          document.removeEventListener('click', this.onOutsideClickHandler, false);
      }
      this.setState(prevState => ({
          isExpanded: !prevState.isExpanded
      }));
  };

  onSearchBtnHandler = () => {
      this.setState(prevState => ({
          searchExpanded: !prevState.searchExpanded
      }));

      if (this.state.searchExpanded && this.state.isExpanded) {
          this.setState({
              isExpanded: false
          });
      }
  };

  onEscHandler = event => {
      if (
          (event.keyCode === 27 && this.state.isExpanded === true) ||
      (event.keyCode === 27 && this.state.searchExpanded === true)
      ) {
          this.setState({
              isExpanded: false,
              searchExpanded: false,
              value: '',
              searchList: this.props.searchList,
              filteredResult: this.props.searchList
          });
      }
  };

  onOutsideClickHandler = e => {
      e.stopPropagation();
      if (this.node && !this.node.contains(e.target)) {
          if (this.state.isExpanded) {
              this.setState({
                  isExpanded: false
              });

              if (
                  this.props.inShellbar &&
          this.state.searchExpanded &&
          !this.state.value
              ) {
                  this.setState({
                      searchExpanded: false
                  });
              }
          } else {
              return;
          }
      }
  };
  componentDidMount() {
      document.addEventListener('keydown', this.onEscHandler, false);
      document.addEventListener('click', this.onOutsideClickHandler, false);
  }
  componentWillUnmount() {
      document.removeEventListener('keydown', this.onEscHandler, false);
      document.removeEventListener('click', this.onOutsideClickHandler, false);
  }

  render() {
      const {
          placeholder,
          inShellbar,
          onSearch,
          onEnter,
          searchList,
          onChange,
          noSearchBtn,
          compact,
          className,
          ...rest
      } = this.props;

      return (
          <div
              className={`fd-search-input${
                  inShellbar ? ' fd-search-input--closed' : ''
              }${className ? ' ' + className : ''}`}
              {...rest}>
              <div className='fd-popover'>
                  {inShellbar ? (
                      <div className='fd-popover__control fd-search-input__control'>
                          <button
                              aria-expanded={this.state.searchExpanded}
                              aria-haspopup='true'
                              className='sap-icon--search fd-button--shell'
                              onClick={this.onSearchBtnHandler} />
                          <div
                              aria-hidden={!this.state.searchExpanded}
                              className='fd-search-input__closedcontrol'>
                              <div
                                  aria-expanded={this.state.searchExpanded}
                                  aria-haspopup='true'
                                  className='fd-search-input__controlinput'>
                                  <input
                                      className='fd-input'
                                      onChange={this.onChangeHandler}
                                      onClick={() => this.onClickHandler()}
                                      onKeyPress={this.onKeyPressHandler}
                                      placeholder={placeholder}
                                      ref={node => (this.node = node)}
                                      type='text'
                                      value={this.state.value} />
                              </div>
                          </div>
                      </div>
                  ) : (
                      <div className={'fd-popover__control'}>
                          <div
                              aria-expanded={this.state.isExpanded}
                              aria-haspopup='true'
                              className='fd-combobox-control'>
                              <div
                                  className={`fd-input-group fd-input-group--after${
                                      compact ? ' fd-input-group--compact' : ''
                                  }`}
                                  ref={node => (this.node = node)}>
                                  <input
                                      className={`fd-input${compact ? ' fd-input--compact' : ''}`}
                                      onChange={this.onChangeHandler}
                                      onClick={() => this.onClickHandler()}
                                      onKeyPress={this.onKeyPressHandler}
                                      placeholder={placeholder}
                                      style={noSearchBtn ? this.style : {}}
                                      type='text'
                                      value={this.state.value} />

                                  {!noSearchBtn && (
                                      <span className='fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button'>
                                          <button
                                              className=' fd-button--light sap-icon--search'
                                              onClick={() => this.onClickHandler()} />
                                      </span>
                                  )}
                              </div>
                          </div>
                      </div>
                  )}
                  {this.state.filteredResult && (
                      <div
                          aria-hidden={!this.state.isExpanded}
                          className='fd-popover__body fd-popover__body--no-arrow'>
                          <div className={inShellbar ? 'fd-search-input__body' : ''}>
                              <nav className='fd-menu'>
                                  <ul className='fd-menu__list'>
                                      {this.state.filteredResult.length > 0 ? (
                                          this.state.filteredResult.map((item, index) => {
                                              return (
                                                  <li
                                                      className='fd-menu__item'
                                                      key={index}
                                                      onClick={() => this.listItemClickHandler(item)}>
                                                      <strong>{this.state.value}</strong>
                                                      {this.state.value && this.state.value.length
                                                          ? item.text.substring(this.state.value.length)
                                                          : item.text}
                                                  </li>
                                              );
                                          })
                                      ) : (
                                          <li className='fd-menu__item'>No result</li>
                                      )}
                                  </ul>
                              </nav>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      );
  }
}
