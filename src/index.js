import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {ActionBar} from '../src/ActionBar/ActionBar'
import {Alert} from '../src/Alert/Alert'
import {Badge, Label, Status} from '../src/Badge/Badge'
import {Breadcrumb, BreadcrumbItem} from '../src/Breadcrumb/Breadcrumb'
import {Button, ButtonGroup, ButtonGrouped} from '../src/Button/Button'
import {Calendar} from '../src/Calendar/Calendar'
import {DatePicker} from '../src/DatePicker/DatePicker'
import {Dropdown, DropdownList, DropdownGroup} from '../src/Dropdown/Dropdown'
import {FormSet, FormItem, FormLabel, FormInput, FormRadio, FormTextarea, FormMessage, FormSelect, FormFieldset, FormLegend } from '../src/Forms/Forms'
import {Icon} from '../src/Icon/Icon'
import {Identifier} from '../src/Identifier/Identifier'
import {Image} from '../src/Image/Image'
import {InputGroup, FormGroup } from '../src/InputGroup/InputGroup'
import {ListGroup, ListGroupItem, ListGroupItemActions, ListGroupItemCheckbox } from '../src/ListGroup/ListGroup'
import {MegaMenu, MegaMenuList, MegaMenuGroup} from '../src/MegaMenu/MegaMenu'
import {SideNav, SideNavList, SideNavItem, SideNavGroup} from '../src/SideNavigation/SideNavigation'
import {Table} from '../src/Table/Table'
import {Tabs, TabComponent} from '../src/Tabs/Tabs'
import {Tag} from '../src/Tag/Tag'
import {Tile, TileContent, TileMedia, TileActions, ProductTile, ProductTileMedia, TileGrid, ProductTileContent}from '../src/Tile/Tile'
import {Toggle} from '../src/Toggle/Toggle'
import {Tree} from '../src/Tree/Tree'

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
    Status,
    Breadcrumb,
    BreadcrumbItem,
    Button, 
    ButtonGroup,
    ButtonGrouped,
    Calendar,
    DatePicker,
    Dropdown, 
    DropdownList, 
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
    InputGroup,
    FormGroup,
    ListGroup, 
    ListGroupItem, 
    ListGroupItemActions, 
    ListGroupItemCheckbox,
    MegaMenu, 
    MegaMenuList, 
    MegaMenuGroup,
    SideNav, 
    SideNavList, 
    SideNavItem, 
    SideNavGroup,
    Table,
    Tabs,
    TabComponent,
    Tag,
    Tile, 
    TileContent, 
    TileMedia, 
    TileActions, 
    ProductTile, 
    ProductTileMedia, 
    TileGrid, 
    ProductTileContent,
    Toggle,
    Tree
} 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();