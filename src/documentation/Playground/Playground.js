import React, { Component } from 'react';
import { Alert } from '../../';
import { Badge, Label, Status } from '../../';
import { Button, ButtonGroup } from '../../';
import { Dropdown } from '../../';
import { Icon } from '../../';
import { Identifier } from '../../';
import { Image } from '../../';
import { Tabs, TabComponent } from '../../';
import { FormGroup, FormLabel, FormItem, InputGroup } from '../../';
import { ListGroup, ListGroupItem, ListGroupItemActions } from '../../';
import { Tile, TileContent, TileMedia, TileActions, ProductTile, ProductTileContent, ProductTileMedia } from '../../';

export class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = { schema: this.props.schema, childs: this.props.children.props, currentValues: [], component: '' };
        this.updateComponent = this.updateComponent.bind(this);
        this.updateListsName = this.updateListsName.bind(this);
        this.updateListsContent = this.updateListsContent.bind(this);
        this.retrieveValue = this.retrieveValue.bind(this);
        this.updateComponentType = this.updateComponentType.bind(this);
    }

    updateComponent(event) {
        //checks if the target name is in the childs and that the children of childs is not an array or object because that means it's nested.
        if (
            event.target.name in this.state.childs &&
            !(this.state.childs.children instanceof Array || this.state.childs.children instanceof Object)
        ) {
            let childsProperties = Object.assign({}, this.state.childs);
            if (event.target.checked && !(event.target.type === 'text')) {
                childsProperties[event.target.name] = true;
            } else if (event.target.checked === false && !(event.target.type === 'text')) {
                childsProperties[event.target.name] = false;
            } else {
                childsProperties[event.target.name] = event.target.value;
            }

            this.setState({
                childs: childsProperties
            });
        }
        //Used for badge and label.
        else if (event.target.name === 'component') {
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
                        } else if (event.target.checked === false && !(event.target.type === 'text')) {
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
                } else if (event.target.checked === false && !(event.target.type === 'text')) {
                    objAttrVal[event.target.name] = false;
                } else {
                    objAttrVal[event.target.name] = event.target.value;
                }
                currentValuesArr.push(objAttrVal);
                this.setState({ currentValues: currentValuesArr });
            }
        }
    }

    //Updates the component type selected for tile.
    updateComponentType(event) {
        this.setState({ component: event.target.value });
    }

    retrieveValue(attribute, defaultValue, lists) {
        let value = defaultValue;
        if (lists.length > 0) {
            lists.map(element => {
                if (attribute in element) {
                    value = element[attribute];
                }
            });
        }
        return value;
    }

    updateListsName(event) {
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
    }

    updateListsContent(event) {
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
    }

    render() {
        const { schema } = this.props;
        const data = schema.map(item => {
            switch (item.typeOfAttribute) {
                case 'string':
                    return (
                        <div className='form-group-sublevel' key={item.attribute}>
                            <label>{item.attribute === 'children' ? 'content' : item.attribute}</label>
                            {item.enum ? (
                                <select className='form-control' onChange={this.updateComponent}
                                    name={item.attribute}>
                                    {item.enum.map(enumItem => (
                                        <option key={enumItem} value={enumItem}>
                                            {enumItem}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type='text'
                                    className='form-control'
                                    value={item.initialValue}
                                    onChange={this.updateComponent}
                                    name={item.attribute} />
                            )}
                        </div>
                    );

                case 'number':
                    return (
                        <div className='form-group-sublevel' key={item.attribute}>
                            <label>{item.attribute}</label>
                            {item.enum ? (
                                <select className='form-control' onChange={this.updateComponent}
                                    name={item.attribute}>
                                    {item.enum.map(enumItem => (
                                        <option key={enumItem}>{enumItem}</option>
                                    ))}
                                </select>
                            ) : (
                                <input type='text' className='form-control'
                                    value={item.initialValue} />
                            )}
                        </div>
                    );

                case 'boolean':
                    return (
                        <div className='form-group-sublevel' key={item.attribute}>
                            <div>Properties</div>
                            <input type='checkbox' onChange={this.updateComponent}
                                name={item.attribute} />
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
                                                type='text'
                                                className='form-control'
                                                onChange={this.updateListsName}
                                                name={enumItem} />
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
                                                type='text'
                                                className='form-control'
                                                onChange={this.updateListsContent}
                                                name={enumItem} />
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
                                    onChange={this.updateComponentType}
                                    name={item.attribute}>
                                    {item.enum.map(enumItem => (
                                        <option key={enumItem} value={enumItem}>
                                            {enumItem}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type='text'
                                    className='form-control'
                                    value={item.initialValue}
                                    onChange={this.updateComponent}
                                    name={item.attribute} />
                            )}
                        </div>
                    );

                default:
                    return undefined;
            }
        });

        let componentToGenerate;
        switch (this.props.component) {
            case 'alert':
                componentToGenerate = (
                    <Alert
                        type={this.state.childs.type}
                        dismissable={this.state.childs.dismissable}
                        link={this.state.childs.link}
                        linkText={this.state.childs.linkText}>
                        Default alert with a{' '}
                    </Alert>
                );
                break;
            case 'badge':
                if (this.state.childs.component === 'badge') {
                    componentToGenerate = (
                        <Badge type={this.state.childs.type} modifier={this.state.childs.modifier}>
                            {this.state.childs.children}
                        </Badge>
                    );
                } else if (this.state.childs.component === 'label') {
                    componentToGenerate = (
                        <Label type={this.state.childs.type} modifier={this.state.childs.modifier}>
                            {this.state.childs.children}
                        </Label>
                    );
                } else if (this.state.childs.component === 'status') {
                    componentToGenerate = (
                        <Status type={this.state.childs.type} glyph={this.state.childs.glyph}>
                            {this.state.childs.children}
                        </Status>
                    );
                } else {
                    componentToGenerate = (
                        <Badge type={this.state.childs.type} modifier={this.state.childs.modifier}>
                            {this.state.childs.children}
                        </Badge>
                    );
                }

                break;

            case 'button':
                componentToGenerate = (
                    <Button
                        type={this.state.childs.type}
                        glyph={this.state.childs.glyph}
                        option={this.state.childs.option}
                        compact={this.state.childs.compact}
                        disabled={this.state.childs.disabled}
                        selected={this.state.childs.selected}>
                        {this.state.childs.children}
                    </Button>
                );
                break;
            case 'dropdown':
                componentToGenerate = (
                    <Dropdown
                        buttonText={this.retrieveValue(
                            'buttonText',
                            this.state.childs.buttonText,
                            this.state.currentValues
                        )}
                        buttonIcon={this.retrieveValue(
                            'buttonIcon',
                            this.state.childs.buttonIcon,
                            this.state.currentValues
                        )}
                        size={this.retrieveValue('size', this.state.childs.size, this.state.currentValues)}
                        state={this.retrieveValue('state', this.state.childs.state, this.state.currentValues)}
                        isContextual={this.retrieveValue(
                            'isContextual',
                            this.state.childs.isContextual,
                            this.state.currentValues
                        )} />
                );
                break;
            case 'icon':
                componentToGenerate = <Icon glyph={this.state.childs.glyph} size={this.state.childs.size} />;
                break;
            case 'identifier':
                componentToGenerate = (
                    <Identifier
                        size={this.state.childs.size}
                        label={this.state.childs.label}
                        modifier={this.state.childs.modifier}
                        color={this.state.childs.color}
                        glyph={
                            this.retrieveValue('children', '', this.state.currentValues) === ''
                                ? this.state.childs.glyph
                                : null
                        }>
                        {this.retrieveValue('children', this.state.childs.children, this.state.currentValues)}
                    </Identifier>
                );
                break;
            case 'image':
                componentToGenerate = (
                    <Image
                        size={this.state.childs.size}
                        type={this.state.childs.type}
                        photo={this.state.childs.photo} />
                );
                break;
            case 'tabs':
                componentToGenerate = (
                    <Tabs>
                        <TabComponent ids={this.state.childs.children.props.ids} />
                    </Tabs>
                );
                break;
            case 'inputgroup':
                componentToGenerate = (
                    <FormGroup>
                        <FormLabel labelText='Input with text action' />
                        <FormItem>
                            <InputGroup
                                inputType={this.state.childs.children[1].props.children.props.inputType}
                                addonPos={this.retrieveValue(
                                    'addonPos',
                                    this.state.childs.children[1].props.children.props.addonPos,
                                    this.state.currentValues
                                )}
                                inputValue={this.retrieveValue(
                                    'inputValue',
                                    this.state.childs.children[1].props.children.props.inputValue,
                                    this.state.currentValues
                                )}
                                actions>
                                <Button
                                    option='light'
                                    glyph={this.retrieveValue(
                                        'glyph',
                                        this.state.childs.children[1].props.children.props.children.props.glyph,
                                        this.state.currentValues
                                    )}>
                                    {this.retrieveValue(
                                        'children',
                                        this.state.childs.children[1].props.children.props.children.props.children,
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
                        <ListGroupItem>
                            {this.retrieveValue(
                                'children',
                                this.state.childs.children.props.children[0],
                                this.state.currentValues
                            )}
                            <ListGroupItemActions>
                                <Button
                                    option='light'
                                    glyph={this.retrieveValue(
                                        'glyph',
                                        this.state.childs.children.props.children[1].props.children.props.glyph,
                                        this.state.currentValues
                                    )} />
                            </ListGroupItemActions>
                        </ListGroupItem>
                    </ListGroup>
                );
                break;
            case 'tile':
                if (this.state.component === '' || this.state.component === 'simple') {
                    componentToGenerate = (
                        <Tile>
                            <TileContent
                                title={this.retrieveValue(
                                    'title',
                                    this.state.childs.children.props.title,
                                    this.state.currentValues
                                )}>
                                <p>
                                    {this.retrieveValue(
                                        'children',
                                        this.state.childs.children.props.children.props.children,
                                        this.state.currentValues
                                    )}
                                </p>
                            </TileContent>
                            <TileActions>
                                <Dropdown size='m' isContextual />
                            </TileActions>
                        </Tile>
                    );
                } else if (this.state.component === 'media') {
                    componentToGenerate = (
                        <Tile>
                            <TileMedia>
                                <Image size='m' photo='https://placeimg.com/400/400/nature' />
                            </TileMedia>
                            <TileContent
                                title={this.retrieveValue(
                                    'title',
                                    this.state.childs.children.props.title,
                                    this.state.currentValues
                                )} />
                            <TileActions>
                                <Dropdown size='m' isContextual />
                            </TileActions>
                        </Tile>
                    );
                } else if (this.state.component === 'product') {
                    componentToGenerate = (
                        <Tile>
                            <ProductTile isButton='true'>
                                <ProductTileMedia image='https://techne.yaas.io/images/product-thumbnail-wide.png' />
                                <ProductTileContent
                                    title={this.retrieveValue(
                                        'title',
                                        this.state.childs.children.props.title,
                                        this.state.currentValues
                                    )}>
                                    <p>
                                        {this.retrieveValue(
                                            'children',
                                            this.state.childs.children.props.children.props.children,
                                            this.state.currentValues
                                        )}
                                    </p>
                                </ProductTileContent>
                            </ProductTile>
                        </Tile>
                    );
                }
                break;

            default:
                break;
        }

        return (
            <div className='row general'>
                <div className='col'>{componentToGenerate}</div>
                <div className='col'>
                    <div className='schema'>{data}</div>
                </div>
            </div>
        );
    }
}
