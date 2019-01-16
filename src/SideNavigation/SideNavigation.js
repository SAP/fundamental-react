import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';

export const SideNav = props => {
    const { icons, children } = props;
    return (
        <nav className={`fd-side-nav${icons ? ' fd-side-nav--icons' : ''}`}>
            {children}
        </nav>
    );
};
SideNav.propTypes = {
    children: PropTypes.node,
    icons: PropTypes.bool
};

export class SideNavList extends Component {
    constructor(props) {
        super(props);

        let initialState = [];

        props.items.forEach(item => {
            if (item.hasChild) {
                let id = item.id;
                let obj = {};

                obj[id] = false;
                initialState.push(obj);
            }
        });

        this.state = {
            selectedItem: 'item_2',
            itemStates: initialState
        };
    }

  handleSelectChild = (e, id) => {
      this.setState({
          selectedItem: id
      });
  };

  handleSelect = (e, id) => {
      let iStates = Object.assign({}, this.state.itemStates);
      iStates[id] = !iStates[id];
      this.setState({ itemStates: iStates });
      this.setState({ selectedItem: id });
  };

  render() {
      const { items, className, ...rest } = this.props;
      return (
          <BrowserRouter>
              <ul
                  className={`fd-side-nav__list${className ? ' ' + className : ''}`}
                  {...rest}>
                  {items.map(item => {
                      return (
                          <li className='fd-side-nav__item' key={item.id}>
                              {item.link ? (
                                  <Link
                                      className={`fd-side-nav__link${
                                          this.state.selectedItem === item.id ? ' is-selected' : ''
                                      }${item.hasChild ? ' has-child' : ''}${
                                          this.state.itemStates[item.id] && item.hasChild
                                              ? ' is-expanded'
                                              : ''
                                      }`}
                                      key={item.id}
                                      onClick={e => this.handleSelect(e, item.id)}
                                      to={{ pathname: item.link }}>
                                      {item.glyph ? (
                                          <span
                                              className={`fd-side-nav__icon${' sap-icon--' +
                          item.glyph} sap-icon--l`}
                                              role='presentation' />
                                      ) : null}
                                      {item.name}
                                  </Link>
                              ) : null}

                              {item.url ? (
                                  <a
                                      className={`fd-side-nav__link${
                                          this.state.selectedItem === item.id ? ' is-selected' : ''
                                      }${item.hasChild ? ' has-child' : ''}${
                                          this.state.itemStates[item.id] && item.hasChild
                                              ? ' is-expanded'
                                              : ''
                                      }`}
                                      href={item.url}
                                      key={item.id}
                                      onClick={e => this.handleSelect(e, item.id)}>
                                      {item.glyph ? (
                                          <span
                                              className={`fd-side-nav__icon${' sap-icon--' +
                          item.glyph} sap-icon--l`}
                                              role='presentation' />
                                      ) : null}
                                      {item.name}
                                  </a>
                              ) : null}

                              {item.hasChild ? (
                                  <ul
                                      aria-expanded={this.state.itemStates[item.id]}
                                      aria-hidden={!this.state.itemStates[item.id]}
                                      className='fd-side-nav__sublist'
                                      id={item.id}>
                                      {item.child.map(ch => {
                                          return (
                                              <React.Fragment key={ch.id}>
                                                  {ch.link ? (
                                                      <Link
                                                          className={`fd-side-nav__sublink${
                                                              this.state.selectedItem === ch.id
                                                                  ? ' is-selected'
                                                                  : ''
                                                          }`}
                                                          key={ch.id}
                                                          onClick={e => this.handleSelectChild(e, ch.id)}
                                                          to={{ pathname: ch.link }}>
                                                          {ch.name}
                                                      </Link>
                                                  ) : null}

                                                  {ch.url ? (
                                                      <a
                                                          className={`fd-side-nav__sublink${
                                                              this.state.selectedItem === ch.id
                                                                  ? ' is-selected'
                                                                  : ''
                                                          }`}
                                                          href={ch.url}
                                                          key={ch.id}
                                                          onClick={e => this.handleSelectChild(e, ch.id)}>
                                                          {ch.name}
                                                      </a>
                                                  ) : null}
                                              </React.Fragment>
                                          );
                                      })}
                                  </ul>
                              ) : null}
                          </li>
                      );
                  })}
              </ul>
          </BrowserRouter>
      );
  }
}
SideNavList.propTypes = {
    items: PropTypes.array.isRequired,
    className: PropTypes.string
};

export const SideNavGroup = props => {
    const { title, children, className, ...rest } = props;
    return (
        <div
            className={`fd-side-nav__group${className ? ' ' + className : ''}`}
            {...rest}>
            <h1 className='fd-side-nav__title'>{title}</h1>
            {children}
        </div>
    );
};

SideNavGroup.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};
