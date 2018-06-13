import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {ActionBar} from '../src/ActionBar/ActionBar'
import {Alert} from '../src/Alert/Alert'
import {Badge, Label} from '../src/Badge/Badge'
import {Button, ButtonGroup, ButtonGrouped} from '../src/Button/Button'
import {Dropdown, DropdownItem, DropdownGroup} from '../src/Dropdown/Dropdown'
import {FormSet, FormItem, FormLabel, FormInput, FormRadio, FormTextarea, FormMessage, FormSelect, FormFieldset, FormLegend } from '../src/Forms/Forms'
import {Icon} from '../src/Icon/Icon'
import {Identifier} from '../src/Identifier/Identifier'
import {Image} from '../src/Image/Image'
import { ListGroup, ListGroupItem, ListGroupItemActions, ListGroupItemCheckbox } from '../src/ListGroup/ListGroup'
import {Tag} from '../src/Tag/Tag'
import {Tile, TileContent, TileMedia, TileActions, ProductTile, ProductTileMedia, TileGrid, ProductTileContent}from '../src/Tile/Tile'
import {Toggle} from '../src/Toggle/Toggle'


import { DocsTile, DocsText } from '../src/documentation/DocsTile/DocsTile'
import { Separator } from '../src/documentation/Separator/Separator'
import { Header } from '../src/documentation/Header/Header'
import { Description } from '../src/documentation/Description/Description'
import { Import } from '../src/documentation/Import/Import'
import { Properties } from '../src/documentation/Properties/Properties'
import { Playground } from '../src/documentation/Playground/Playground'

export {
    DocsTile, 
    DocsText, 
    Separator, 
    Header, 
    Description, 
    Import,
    Properties,
    Playground,
    ActionBar,
    Alert,
    Badge, 
    Label, 
    Button, 
    ButtonGroup,
    ButtonGrouped,
    Dropdown, 
    DropdownItem, 
    DropdownGroup, 
    FormSet, 
    FormItem, 
    FormLabel, 
    FormInput, 
    FormRadio,
    FormTextarea, 
    FormMessage, 
    FormSelect,
    FormFieldset, 
    FormLegend, 
    Icon, 
    Identifier, 
    Image, 
    ListGroup, 
    ListGroupItem, 
    ListGroupItemActions, 
    ListGroupItemCheckbox,
    Tag,
    Tile, 
    TileContent, 
    TileMedia, 
    TileActions, 
    ProductTile, 
    ProductTileMedia, 
    TileGrid, 
    ProductTileContent,
    Toggle
} 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();