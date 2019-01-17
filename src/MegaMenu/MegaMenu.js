import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';

export const MegaMenu = ({ children, className, ...props }) => {
    return (
        <nav
            className={`fd-mega-menu${className ? ' ' + className : ''}`}
            {...props}>
            {children}
        </nav>
    );
};
MegaMenu.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export class MegaMenuList extends Component {
    constructor(props) {
        super(props);

        let initialState = [];

        props.items.forEach(item => {
            if (item.hasChild) {
                let id = item.id;
                let obj = {};

                obj[id] = false;
                initialState = obj;
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
      const { itemStates } = this.state;
      let iStates = itemStates;
      iStates[id] = !iStates[id];
      Object.keys(iStates).map((key) => {
          if (key === id) {
              iStates[key] = true;
          } else {
              iStates[key] = false;
          }
      });
      this.setState({ itemStates: iStates });
      this.setState({ selectedItem: id });
  };

  render() {
      const { items, className } = this.props;
      return (
          <BrowserRouter>
              <ul className={`fd-mega-menu__list${className ? ' ' + className : ''}`}>
                  {items.map(item => {
                      return (
                          <li className='fd-mega-menu__item' key={item.id}>
                              {item.link ? (
                                  <Link
                                      className={`fd-mega-menu__link${
                                          this.state.selectedItem === item.id ? ' is-selected' : ''
                                      }${item.hasChild ? ' has-child' : ''}${
                                          this.state.itemStates[item.id] && item.hasChild
                                              ? ' is-expanded'
                                              : ''
                                      }`}
                                      key={item.id}
                                      onClick={e => this.handleSelect(e, item.id)}
                                      to={{ pathname: item.link }}>
                                      {item.name}
                                  </Link>
                              ) : null}

                              {item.url ? (
                                  <a
                                      className={`fd-mega-menu__link${
                                          this.state.selectedItem === item.id ? ' is-selected' : ''
                                      }${item.hasChild ? ' has-child' : ''}${
                                          this.state.itemStates[item.id] && item.hasChild
                                              ? ' is-expanded'
                                              : ''
                                      }`}
                                      href={item.url}
                                      key={item.id}
                                      onClick={e => this.handleSelect(e, item.id)}>
                                      {item.name}
                                  </a>
                              ) : null}

                              {item.hasChild ? (
                                  <ul
                                      aria-expanded={this.state.itemStates[item.id]}
                                      aria-hidden={!this.state.itemStates[item.id]}
                                      className='fd-mega-menu__sublist'
                                      id={item.id}>
                                      {item.child.map(ch => {
                                          return (
                                              <li className='fd-mega-menu__subitem' key={ch.id}>
                                                  {ch.link ? (
                                                      <Link
                                                          className={`fd-mega-menu__sublink${
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
                                                          className={`fd-mega-menu__sublink${
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
                                              </li>
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
MegaMenuList.propTypes = {
    items: PropTypes.array.isRequired,
    className: PropTypes.string
};

export const MegaMenuGroup = ({ title, children, className }) => {
    return (
        <div className={`fd-mega-menu__group${className ? ' ' + className : ''}`}>
            <h1 className='fd-mega-menu__title'>{title}</h1>
            {children}
        </div>
    );
};

MegaMenuGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string
};
