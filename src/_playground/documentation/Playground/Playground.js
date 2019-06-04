import { Alert } from '../../../';
import { Button } from '../../../';
import { Dropdown } from '../../../';
import Heading from '../Heading/Heading';
import { Icon } from '../../../';
import { Identifier } from '../../../';
import { Image } from '../../../';
import { ListGroup } from '../../../';
import PropTypes from 'prop-types';
import { Badge, Label, Status } from '../../../';
import { FormGroup, FormItem, FormLabel, InputGroup } from '../../../';
import React, { Component } from 'react';

class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schema: this.props.schema,
            childs: this.props.children.props,
            currentValues: [],
            component: ''
        };
    }

  updateComponent = event => {
      //checks if the target name is in the childs and that the children of childs is not an array or object because that means it's nested.
      if (
          event.target.name in this.state.childs &&
      !(
          this.state.childs.children instanceof Array ||
        this.state.childs.children instanceof Object
      )
      ) {
          let childsProperties = Object.assign({}, this.state.childs);
          if (event.target.checked && !(event.target.type === 'text')) {
              childsProperties[event.target.name] = true;
          } else if (
              event.target.checked === false &&
        !(event.target.type === 'text')
          ) {
              childsProperties[event.target.name] = false;
          } else {
              childsProperties[event.target.name] = event.target.value;
          }

          this.setState({
              childs: childsProperties
          });
          //Used for badge and label.
      } else if (event.target.name === 'component') {
          let childsProperties = Object.assign({}, this.state.childs);
          childsProperties[event.target.name] = event.target.value;
          this.setState({
              childs: childsProperties
          });
      } else {
      //Here this is for components that have multiple nestings.
          let objAttrVal = {};
          let currentValuesArr = this.state.currentValues;
          let containsDuplicateAttribute = false;
          //This checks if the array contains values. If it does then it replaces the existing values of elements with new values.
          if (currentValuesArr.length > 0) {
              let newCurrentValuesArr = currentValuesArr.map(element => {
                  if (event.target.name in element) {
                      if (event.target.checked && !(event.target.type === 'text')) {
                          element[event.target.name] = true;
                      } else if (
                          event.target.checked === false &&
              !(event.target.type === 'text')
                      ) {
                          element[event.target.name] = false;
                      } else {
                          element[event.target.name] = event.target.value;
                      }
                      containsDuplicateAttribute = true;
                      return element;
                  } else {
                      return element;
                  }
              });

              if (!containsDuplicateAttribute) {
                  objAttrVal[event.target.name] = event.target.value;
                  currentValuesArr.push(objAttrVal);
                  this.setState({ currentValues: currentValuesArr });
              } else {
                  this.setState({ currentValues: newCurrentValuesArr });
              }
          } else {
              if (event.target.checked && !(event.target.type === 'text')) {
                  objAttrVal[event.target.name] = true;
              } else if (
                  event.target.checked === false &&
          !(event.target.type === 'text')
              ) {
                  objAttrVal[event.target.name] = false;
              } else {
                  objAttrVal[event.target.name] = event.target.value;
              }
              currentValuesArr.push(objAttrVal);
              this.setState({ currentValues: currentValuesArr });
          }
      }
  };

  //Updates the component type selected for tile.
  updateComponentType = event => {
      this.setState({ component: event.target.value });
  };

  retrieveValue = (attribute, defaultValue, lists) => {
      let value = defaultValue;
      if (lists.length > 0) {
          lists.map(element => {
              if (attribute in element) {
                  value = element[attribute];
              }
          });
      }
      return value;
  };

  updateListsName = event => {
      let childsProperties = Object.assign({}, this.state.childs);

      if ('ids' in childsProperties.children.props) {
          childsProperties.children.props.ids.map(element => {
              if (event.target.name === element.id) {
                  element.name = event.target.value;
              }
          });
      } else if ('links' in childsProperties.children.props) {
          childsProperties.children.props.links.map(element => {
              if (event.target.name === element.id) {
                  element.name = event.target.value;
              }
          });
      }

      this.setState({
          childs: childsProperties
      });
  };

  updateListsContent = event => {
      let childsProperties = Object.assign({}, this.state.childs);

      if ('ids' in childsProperties.children.props) {
          childsProperties.children.props.ids.map(element => {
              if (event.target.name === element.id) {
                  element.content = event.target.value;
              }
          });
      } else if ('links' in childsProperties.children.props) {
          childsProperties.children.props.links.map(element => {
              if (event.target.name === element.id) {
                  element.content = event.target.value;
              }
          });
      }

      this.setState({
          childs: childsProperties
      });
  };

  render() {
      const { schema } = this.props;
      const data = schema.map(item => {
          switch (item.typeOfAttribute) {
              case 'string':
                  return (
                      <div className='form-group-sublevel' key={item.attribute}>
                          <label>
                              {item.attribute === 'children' ? 'content' : item.attribute}
                          </label>
                          {item.enum ? (
                              <select
                                  className='form-control'
                                  name={item.attribute}
                                  onBlur={this.updateComponent}
                                  onChange={this.updateComponent}>
                                  {item.enum.map(enumItem => (
                                      <option key={enumItem} value={enumItem}>
                                          {enumItem}
                                      </option>
                                  ))}
                              </select>
                          ) : (
                              <input
                                  className='form-control'
                                  name={item.attribute}
                                  onChange={this.updateComponent}
                                  type='text'
                                  value={item.initialValue} />
                          )}
                      </div>
                  );

              case 'number':
                  return (
                      <div className='form-group-sublevel' key={item.attribute}>
                          <label>{item.attribute}</label>
                          {item.enum ? (
                              <select
                                  className='form-control'
                                  name={item.attribute}
                                  onBlur={this.updateComponent}
                                  onChange={this.updateComponent}>
                                  {item.enum.map(enumItem => (
                                      <option key={enumItem}>{enumItem}</option>
                                  ))}
                              </select>
                          ) : (
                              <input
                                  className='form-control'
                                  type='text'
                                  value={item.initialValue} />
                          )}
                      </div>
                  );

              case 'boolean':
                  return (
                      <div className='form-group-sublevel' key={item.attribute}>
                          <div>Properties</div>
                          <input
                              name={item.attribute}
                              onChange={this.updateComponent}
                              type='checkbox' />
                          <label className='tn-form__label'>{item.attribute}</label>
                      </div>
                  );
              case 'lists':
                  return (
                      <div className='form-group-sublevel' key={item.attribute}>
                          <p>Names</p>
                          {item.enum ? (
                              <div>
                                  {item.enum.map(enumItem => (
                                      <div>
                                          <label>{enumItem}</label>
                                          <input
                                              className='form-control'
                                              name={enumItem}
                                              onChange={this.updateListsName}
                                              type='text' />
                                      </div>
                                  ))}
                              </div>
                          ) : null}
                      </div>
                  );
              case 'listsContent':
                  return (
                      <div className='form-group-sublevel' key={item.attribute}>
                          <p>Content</p>
                          {item.enum ? (
                              <div>
                                  {item.enum.map(enumItem => (
                                      <div>
                                          <label>{enumItem}</label>
                                          <input
                                              className='form-control'
                                              name={enumItem}
                                              onChange={this.updateListsContent}
                                              type='text' />
                                      </div>
                                  ))}
                              </div>
                          ) : null}
                      </div>
                  );
                  //This is used to display different type of components that belong to the same component.
              case 'component':
                  return (
                      <div className='form-group-sublevel' key={item.attribute}>
                          <label>{item.attribute}</label>
                          {item.enum ? (
                              <select
                                  className='form-control'
                                  name={item.attribute}
                                  onBlur={this.updateComponentType}
                                  onChange={this.updateComponentType}>
                                  {item.enum.map(enumItem => (
                                      <option key={enumItem} value={enumItem}>
                                          {enumItem}
                                      </option>
                                  ))}
                              </select>
                          ) : (
                              <input
                                  className='form-control'
                                  name={item.attribute}
                                  onChange={this.updateComponent}
                                  type='text'
                                  value={item.initialValue} />
                          )}
                      </div>
                  );

              default:
            // do nothing
          }
      });

      let componentToGenerate;
      switch (this.props.component) {
          case 'alert':
              componentToGenerate = (
                  <Alert
                      dismissible={this.state.childs.dismissible}
                      link={this.state.childs.link}
                      linkText={this.state.childs.linkText}
                      type={this.state.childs.type}>
            Default alert with a{' '}
                  </Alert>
              );
              break;
          case 'badge':
              if (this.state.childs.component === 'badge') {
                  componentToGenerate = (
                      <Badge
                          modifier={this.state.childs.modifier}
                          type={this.state.childs.type}>
                          {this.state.childs.children}
                      </Badge>
                  );
              } else if (this.state.childs.component === 'label') {
                  componentToGenerate = (
                      <Label
                          modifier={this.state.childs.modifier}
                          type={this.state.childs.type}>
                          {this.state.childs.children}
                      </Label>
                  );
              } else if (this.state.childs.component === 'status') {
                  componentToGenerate = (
                      <Status
                          glyph={this.state.childs.glyph}
                          type={this.state.childs.type}>
                          {this.state.childs.children}
                      </Status>
                  );
              } else {
                  componentToGenerate = (
                      <Badge
                          modifier={this.state.childs.modifier}
                          type={this.state.childs.type}>
                          {this.state.childs.children}
                      </Badge>
                  );
              }

              break;

          case 'button':
              componentToGenerate = (
                  <Button
                      compact={this.state.childs.compact}
                      disabled={this.state.childs.disabled}
                      glyph={this.state.childs.glyph}
                      option={this.state.childs.option}
                      selected={this.state.childs.selected}
                      type={this.state.childs.type}>
                      {this.state.childs.children}
                  </Button>
              );
              break;
          case 'dropdown':
              componentToGenerate = (
                  <Dropdown
                      buttonIcon={this.retrieveValue(
                          'buttonIcon',
                          this.state.childs.buttonIcon,
                          this.state.currentValues
                      )}
                      buttonText={this.retrieveValue(
                          'buttonText',
                          this.state.childs.buttonText,
                          this.state.currentValues
                      )}
                      size={this.retrieveValue(
                          'size',
                          this.state.childs.size,
                          this.state.currentValues
                      )}
                      state={this.retrieveValue(
                          'state',
                          this.state.childs.state,
                          this.state.currentValues
                      )} />
              );
              break;
          case 'icon':
              componentToGenerate = (
                  <Icon glyph={this.state.childs.glyph} size={this.state.childs.size} />
              );
              break;
          case 'identifier':
              componentToGenerate = (
                  <Identifier
                      color={this.state.childs.color}
                      glyph={
                          this.retrieveValue('children', '', this.state.currentValues) ===
              ''
                              ? this.state.childs.glyph
                              : null
                      }
                      label={this.state.childs.label}
                      modifier={this.state.childs.modifier}
                      size={this.state.childs.size}>
                      {this.retrieveValue(
                          'children',
                          this.state.childs.children,
                          this.state.currentValues
                      )}
                  </Identifier>
              );
              break;
          case 'image':
              componentToGenerate = (
                  <Image
                      photo={this.state.childs.photo}
                      size={this.state.childs.size}
                      type={this.state.childs.type} />
              );
              break;
          case 'inputgroup':
              componentToGenerate = (
                  <FormGroup>
                      <FormLabel>Input with text action</FormLabel>
                      <FormItem>
                          <InputGroup
                              actions
                              addonPos={this.retrieveValue(
                                  'addonPos',
                                  this.state.childs.children[1].props.children.props.addonPos,
                                  this.state.currentValues
                              )}
                              inputType={
                                  this.state.childs.children[1].props.children.props.inputType
                              }
                              inputValue={this.retrieveValue(
                                  'inputValue',
                                  this.state.childs.children[1].props.children.props.inputValue,
                                  this.state.currentValues
                              )}>
                              <Button
                                  glyph={this.retrieveValue(
                                      'glyph',
                                      this.state.childs.children[1].props.children.props.children
                                          .props.glyph,
                                      this.state.currentValues
                                  )}
                                  option='light'>
                                  {this.retrieveValue(
                                      'children',
                                      this.state.childs.children[1].props.children.props.children
                                          .props.children,
                                      this.state.currentValues
                                  )}
                              </Button>
                          </InputGroup>
                      </FormItem>
                  </FormGroup>
              );
              break;
          case 'listgroup':
              componentToGenerate = (
                  <ListGroup>
                      <ListGroup.Item>
                          {this.retrieveValue(
                              'children',
                              this.state.childs.children.props.children[0],
                              this.state.currentValues
                          )}
                          <ListGroup.ItemActions>
                              <Button
                                  glyph={this.retrieveValue(
                                      'glyph',
                                      this.state.childs.children.props.children[1].props.children
                                          .props.glyph,
                                      this.state.currentValues
                                  )}
                                  option='light' />
                          </ListGroup.ItemActions>
                      </ListGroup.Item>
                  </ListGroup>
              );
              break;

          default:
              break;
      }

      return (
          <React.Fragment>
              <Heading level={2}>Playground</Heading>
              <div className='row general'>
                  <div className='col'>{componentToGenerate}</div>
                  <div className='col'>
                      <div className='schema'>{data}</div>
                  </div>
              </div>
          </React.Fragment>
      );
  }
}

Playground.propTypes = {
    children: PropTypes.node,
    component: PropTypes.string,
    schema: PropTypes.array
};

export default Playground;
