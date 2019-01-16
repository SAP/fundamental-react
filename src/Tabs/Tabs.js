import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';

export const Tabs = props => {
    const { children, className, ...rest } = props;
    return (
        <ul
            className={`fd-tabs-container${className ? ' ' + className : ''}`}
            {...rest}>
            {children}
        </ul>
    );
};

export class TabComponent extends Component {
    constructor(props) {
        super(props);
        let initialStates = [];

        initialStates = props.ids.forEach(ids => {
            let obj = {};
            let id = ids.id;
            obj[id] = false;
            return obj;
        });
        this.state = {
            selectedTab: '1',
            tabStates: initialStates
        };
    }

  handleTabSelection = (e, id) => {
      let iStates = Object.assign({}, this.state.tabStates);
      iStates[id.id] = !iStates[id.id];
      this.setState({ tabStates: iStates });
      this.setState({ selectedTab: id.id });
  };

  render() {
      const { ids, className, ...rest } = this.props;
      return (
          <BrowserRouter>
              <ul className={`fd-tabs${className ? ' ' + className : ''}`} {...rest}>
                  {ids.map(id => {
                      return (
                          <li className='fd-tabs__item' key={id.id}>
                              <Link
                                  aria-disabled={id.disabled}
                                  className={`fd-tabs__link${
                                      this.state.selectedTab === id.id ? ' is-selected' : ''
                                  }`}
                                  onClick={e => {
                                      !id.disabled && this.handleTabSelection(e, id, id.disabled);
                                  }}
                                  to={{ pathname: id.url }}>
                                  {id.name}
                              </Link>
                              {this.state.selectedTab === id.id ? (
                                  <p className='fd-tabs__content'>{id.content}</p>
                              ) : null}
                          </li>
                      );
                  })}
              </ul>
          </BrowserRouter>
      );
  }
}

TabComponent.propTypes = {
    ids: PropTypes.array.isRequired,
    className: PropTypes.string
};
