import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    ActionBar,
    ActionBarBack,
    ActionBarHeader,
    ActionBarActions
} from '../src/ActionBar/ActionBar';
import {
    Alert
} from '../src/Alert/Alert';
import {
    Badge,
    Label,
    Status,
    Counter
} from '../src/Badge/Badge';
import {
    Breadcrumb,
    BreadcrumbItem
} from '../src/Breadcrumb/Breadcrumb';
import {
    Button,
    ButtonGroup
} from '../src/Button/Button';
import {
    Calendar
} from '../src/Calendar/Calendar';
import {
    ComboboxInput
} from '../src/ComboboxInput/ComboboxInput';
import {
    DatePicker
} from '../src/DatePicker/DatePicker';
import {
    Dropdown
} from '../src/Dropdown/Dropdown';
import {
    FormSet,
    FormItem,
    FormLabel,
    FormInput,
    FormRadio,
    FormTextarea,
    FormMessage,
    FormSelect,
    FormFieldset,
    FormLegend
} from '../src/Forms/Forms';
import { Icon } from '../src/Icon/Icon';
import { Identifier } from '../src/Identifier/Identifier';
import { Image } from '../src/Image/Image';
import { InlineHelp } from '../src/InlineHelp/InlineHelp';
import { InputGroup, FormGroup } from '../src/InputGroup/InputGroup';
import { ListGroup, ListGroupItem, ListGroupItemActions, ListGroupItemCheckbox } from '../src/ListGroup/ListGroup';
import { LocalizationEditor } from '../src/LocalizationEditor/LocalizationEditor';
import { MegaMenu, MegaMenuList, MegaMenuGroup } from '../src/MegaMenu/MegaMenu';
import { Menu, MenuList, MenuItem, MenuGroup } from '../src/Menu/Menu';
import { Modal } from '../src/Modal/Modal';
import { MultiInput } from '../src/MultiInput/MultiInput';
import { Pagination } from '../src/Pagination/Pagination';
import {
    Panel,
    PanelGrid,
    PanelBody,
    PanelHeader,
    PanelHead,
    PanelActions,
    PanelFilters,
    PanelContent,
    PanelFooter
} from '../src/Panel/Panel';
import { Popover } from '../src/Popover/Popover';
import { SearchInput } from '../src/SearchInput/SearchInput';
import { SideNav, SideNavList, SideNavGroup } from '../src/SideNavigation/SideNavigation';
import { Table } from '../src/Table/Table';
import { Tabs, TabComponent } from '../src/Tabs/Tabs';
import { Token } from './Token/Token';
import {
    Tile,
    TileContent,
    TileMedia,
    TileActions,
    ProductTile,
    ProductTileMedia,
    TileGrid,
    ProductTileContent
} from '../src/Tile/Tile';
import { Toggle } from '../src/Toggle/Toggle';
import { Tree } from '../src/Tree/Tree';
import { Time } from '../src/Time/Time';
import { TimePicker } from '../src/TimePicker/TimePicker';
import { Shellbar } from '../src/Shellbar/Shellbar';
import { DocsTile, DocsText } from '../src/documentation/DocsTile/DocsTile';
import { Separator } from '../src/documentation/Separator/Separator';
import { Header } from '../src/documentation/Header/Header';
import { Description } from '../src/documentation/Description/Description';
import { Import } from '../src/documentation/Import/Import';
import { Properties } from '../src/documentation/Properties/Properties';
import { Playground } from '../src/documentation/Playground/Playground';

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
    ActionBarBack,
    ActionBarHeader,
    ActionBarActions,
    Alert,
    Badge,
    ComboboxInput,
    Label,
    Status,
    Counter,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Calendar,
    DatePicker,
    Dropdown,
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
    InlineHelp,
    InputGroup,
    FormGroup,
    ListGroup,
    ListGroupItem,
    ListGroupItemActions,
    ListGroupItemCheckbox,
    LocalizationEditor,
    MegaMenu,
    MegaMenuList,
    MegaMenuGroup,
    Menu,
    MenuList,
    MenuItem,
    MenuGroup,
    Modal,
    MultiInput,
    Popover,
    Pagination,
    Panel,
    PanelGrid,
    PanelBody,
    PanelHeader,
    PanelHead,
    PanelActions,
    PanelFilters,
    PanelContent,
    PanelFooter,
    SearchInput,
    SideNav,
    SideNavList,
    SideNavGroup,
    Table,
    Tabs,
    TabComponent,
    Token,
    Tile,
    TileContent,
    TileMedia,
    TileActions,
    Time,
    TimePicker,
    ProductTile,
    ProductTileMedia,
    TileGrid,
    ProductTileContent,
    Toggle,
    Tree,
    Shellbar
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
