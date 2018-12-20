import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown/Dropdown';

export class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iStates: [],
      expandAllClicked: false,
      numberOfElements: 0
    };
    this.openAllList = this.openAllList.bind(this);
  }

  updateVisibility(selected) {
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
  }

  openAllList(treeData, e, numberOfElements = 0) {
    let modifiedStates = this.state.iStates;

    if (this.state.numberOfElements === 0) {
      treeData.map(row => {
        row.values.forEach(element => {
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
  }

  //Going to loop recursively through each key, until it hits the bottom(when there's no more children)
  createTreeList(treeData, isChild, depthLevel = 0) {
    const trees = treeData.map(row => {
      const parent = row.values.map((element, index) => {
        //Checks if it has children and is first element
        if (row.hasChildren & (row.values.indexOf(element) === 0)) {
          //Checks if the element is an object
          if (typeof element === 'object') {
            return (
                <div key={index} className='fd-tree__col fd-tree__col--control'>
                    <button
                        className='fd-tree__control'
                        aria-label='expand'
                        aria-controls='inYUX852'
                        onClick={this.updateVisibility(row.id)}
                        aria-pressed={this.state.iStates[row.id]} />
                    <a href={element.linkUrl} className='fd-has-font-weight-semi'>
                        {element.displayText ? element.displayText : element.linkUrl}
                    </a>
                </div>
            );
          }
          return (
              <div key={index} className='fd-tree__col fd-tree__col--control'>
                  <button
                      className='fd-tree__control'
                      aria-label='expand'
                      aria-controls='inYUX852'
                      onClick={this.updateVisibility(row.id)}
                      aria-pressed={this.state.iStates[row.id]} />
                  {element}
              </div>
          );
        }

        if (row.values.indexOf(element) === 0) {
          return (
              <div key={index} className='fd-tree__col fd-tree__col--control'>
                  {typeof element === 'object' ? (
                      <a href={element.linkUrl} className='fd-has-font-weight-semi'>
                          {element.displayText ? element.displayText : element.linkUrl}
                      </a>
              ) : (
                element
              )}
              </div>
          );
        }
        return (
            <div key={index} className='fd-tree__col'>
                {typeof element === 'object' ? (
                    <a href={element.linkUrl} className='fd-has-font-weight-semi'>
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
            <ul key={row.id} className={displayLevel}
                role='group'>
                <ul className='fd-tree-child'>
                    <li
                        className='fd-tree__item'
                        role='treeitem'
                        aria-expanded='true'
                        key={row.id}>
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
              className='fd-tree__item'
              role='treeitem'
              aria-expanded='true'
              key={row.id}>
              <div className='fd-tree__row'>
                  {parent}
                  {<Dropdown isContextual />}
              </div>
              {tree}
          </li>
      );
    });

    return trees;
  }

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
                        key={index}
                        className='fd-tree__col fd-tree__col--control'>
                        <button
                            className='fd-tree__control '
                            aria-label='expand'
                            aria-pressed={this.state.expandAllClicked}
                            onClick={e => this.openAllList(treeData, e)} />
                        {header}
                    </div>
                );
              }
              return (
                  <div key={index} className='fd-tree__col'>
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
