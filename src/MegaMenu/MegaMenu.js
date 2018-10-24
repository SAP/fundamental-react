import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Link } from "react-router-dom";

export const MegaMenu = props => {
  const { id, children } = props;
  return (
    <nav className="fd-mega-menu" id={id}>
      {children}
    </nav>
  );
};
MegaMenu.propTypes = {
  id: PropTypes.string
};

export class MegaMenuList extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectChild = this.handleSelectChild.bind(this);

    let initialState = [];

    props.links.map(link => {
      if (link.hasChild) {
        let id = link.id;
        let obj = {};

        obj[id] = false;
        initialState = obj;
      }
    });

    this.state = {
      selectedItem: "item_2",
      itemStates: initialState
    };
  }

  handleSelectChild(e, id) {
    this.setState({
      selectedItem: id
    });
  }

  handleSelect(e, id) {
    const { itemStates } = this.state;
    let iStates = itemStates;
    iStates[id] = !iStates[id];
    Object.keys(iStates).map((key, item) => {
      if (key == id) {
        iStates[key] = true;
      } else {
        iStates[key] = false;
      }
    });
    this.setState({ itemStates: iStates });
    this.setState({ selectedItem: id });
  }

  render() {
    const { links } = this.props;
    return (
      <BrowserRouter>
        <ul className="fd-mega-menu__list">
          {links.map(link => {
            return (
              <li className="fd-mega-menu__item" key={link.id}>
                <Link
                  className={`fd-mega-menu__link${
                    this.state.selectedItem === link.id ? " is-selected" : ""
                  }${link.hasChild ? " has-child" : ""}${
                    this.state.itemStates[link.id] && link.hasChild
                      ? " is-expanded"
                      : ""
                  }`}
                  to={{ pathname: link.url }}
                  key={link.id}
                  onClick={e => this.handleSelect(e, link.id)}
                >
                  {link.name}
                </Link>
                {link.hasChild ? (
                  <ul
                    className="fd-mega-menu__sublist"
                    id={link.id}
                    aria-hidden={!this.state.itemStates[link.id]}
                    aria-expanded={this.state.itemStates[link.id]}
                  >
                    {link.child.map(ch => {
                      return (
                        <li className="fd-mega-menu__subitem" key={ch.id}>
                          <Link
                            className={`fd-mega-menu__sublink${
                              this.state.selectedItem === ch.id
                                ? " is-selected"
                                : ""
                            }`}
                            to={{ pathname: ch.url }}
                            key={ch.id}
                            onClick={e => this.handleSelectChild(e, ch.id)}
                          >
                            {ch.name}
                          </Link>
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
  links: PropTypes.array.isRequired
};

export const MegaMenuGroup = props => {
  const { title, children } = props;
  return (
    <div className="fd-mega-menu__group">
      <h1 className="fd-mega-menu__title">{title}</h1>
      {children}
    </div>
  );
};

MegaMenuGroup.propTypes = {
  title: PropTypes.string
};
