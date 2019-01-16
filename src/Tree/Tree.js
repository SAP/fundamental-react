import { Dropdown } from '../Dropdown/Dropdown';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iStates: [],
            expandAllClicked: false,
            numberOfElements: 0
        };
    }

  updateVisibility = selected => {
      return () => {
          let modifiedStates = this.state.iStates;
          if (modifiedStates[selected]) {
              modifiedStates[selected] = false;
          } else {
              modifiedStates[selected] = true;
          }

          this.setState({
              iStates: modifiedStates
          });
      };
  };

  openAllList = (treeData, e, numberOfElements = 0) => {
      let modifiedStates = this.state.iStates;

      if (this.state.numberOfElements === 0) {
          treeData.map(row => {
              row.values.forEach(() => {
                  ++numberOfElements;
              });
              if (row.hasChildren) {
                  this.openAllList(row.children, numberOfElements);
              }
              return;
          });

          for (let i = 0; i <= numberOfElements; i++) {
              if (!this.state.expandAllClicked) {
                  modifiedStates[i] = true;
              } else {
                  modifiedStates[i] = false;
              }
          }
      } else {
          for (let i = 0; i <= this.state.numberOfElements; i++) {
              if (!this.state.expandAllClicked) {
                  modifiedStates[i] = true;
              } else {
                  modifiedStates[i] = false;
              }
          }
      }

      this.setState({
          iStates: modifiedStates,
          expandAllClicked: !this.state.expandAllClicked,
          numberOfElements: numberOfElements
      });
  };

  //Going to loop recursively through each key, until it hits the bottom(when there's no more children)
  createTreeList = (treeData, isChild, depthLevel = 0) => {
      const trees = treeData.map(row => {
          const parent = row.values.map((element, index) => {
              //Checks if it has children and is first element
              if (row.hasChildren & (row.values.indexOf(element) === 0)) {
                  //Checks if the element is an object
                  if (typeof element === 'object') {
                      return (
                          <div className='fd-tree__col fd-tree__col--control' key={index}>
                              <button
                                  aria-controls='inYUX852'
                                  aria-label='expand'
                                  aria-pressed={this.state.iStates[row.id]}
                                  className='fd-tree__control'
                                  onClick={this.updateVisibility(row.id)} />
                              <a className='fd-has-font-weight-semi' href={element.linkUrl}>
                                  {element.displayText ? element.displayText : element.linkUrl}
                              </a>
                          </div>
                      );
                  }
                  return (
                      <div className='fd-tree__col fd-tree__col--control' key={index}>
                          <button
                              aria-controls='inYUX852'
                              aria-label='expand'
                              aria-pressed={this.state.iStates[row.id]}
                              className='fd-tree__control'
                              onClick={this.updateVisibility(row.id)} />
                          {element}
                      </div>
                  );
              }

              if (row.values.indexOf(element) === 0) {
                  return (
                      <div className='fd-tree__col fd-tree__col--control' key={index}>
                          {typeof element === 'object' ? (
                              <a className='fd-has-font-weight-semi' href={element.linkUrl}>
                                  {element.displayText ? element.displayText : element.linkUrl}
                              </a>
                          ) : (
                              element
                          )}
                      </div>
                  );
              }
              return (
                  <div className='fd-tree__col' key={index}>
                      {typeof element === 'object' ? (
                          <a className='fd-has-font-weight-semi' href={element.linkUrl}>
                              {element.displayText ? element.displayText : element.linkUrl}
                          </a>
                      ) : (
                          element
                      )}
                  </div>
              );
          });

          let tree;

          let displayLevel =
        'fd-tree__group fd-tree__group--sublevel-' + depthLevel;

          if (row.hasChildren && this.state.iStates[row.id]) {
              tree = this.createTreeList(row.children, true, depthLevel + 1);
          }
          if (isChild) {
              return (
                  <ul className={displayLevel} key={row.id}
                      role='group'>
                      <ul className='fd-tree-child'>
                          <li
                              aria-expanded='true'
                              className='fd-tree__item'
                              key={row.id}
                              role='treeitem'>
                              <div className='fd-tree__row'>
                                  {parent}
                                  {<Dropdown isContextual />}
                              </div>
                              {tree}
                          </li>
                      </ul>
                  </ul>
              );
          }
          depthLevel = 0;
          return (
              <li
                  aria-expanded='true'
                  className='fd-tree__item'
                  key={row.id}
                  role='treeitem'>
                  <div className='fd-tree__row'>
                      {parent}
                      {<Dropdown isContextual />}
                  </div>
                  {tree}
              </li>
          );
      });

      return trees;
  };

  render() {
      const { headers, treeData } = this.props;
      return (
          <div>
              <div className='fd-tree fd-tree--header'>
                  <div className='fd-tree__row fd-tree__row--header'>
                      {headers.map((header, index) => {
                          if (headers.indexOf(header) === 0) {
                              return (
                                  <div
                                      className='fd-tree__col fd-tree__col--control'
                                      key={index}>
                                      <button
                                          aria-label='expand'
                                          aria-pressed={this.state.expandAllClicked}
                                          className='fd-tree__control '
                                          onClick={e => this.openAllList(treeData, e)} />
                                      {header}
                                  </div>
                              );
                          }
                          return (
                              <div className='fd-tree__col' key={index}>
                                  {header}
                              </div>
                          );
                      })}
                  </div>
              </div>

              <ul className='fd-tree' id=''
                  role='tree'>
                  {this.createTreeList(treeData)}
              </ul>
          </div>
      );
  }
}
Tree.propTypes = {
    treeData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            hasChildren: PropTypes.bool,
            values: PropTypes.array.isRequired,
            children: PropTypes.array
        }).isRequired
    ).isRequired,
    headers: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string
};
