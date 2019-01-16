import './index.css';
import { Alert } from '../src/Alert/Alert';
import App from './App';
import { Calendar } from '../src/Calendar/Calendar';
import { ComboboxInput } from '../src/ComboboxInput/ComboboxInput';
import { DatePicker } from '../src/DatePicker/DatePicker';
import { Description } from '../src/documentation/Description/Description';
import { Dropdown } from '../src/Dropdown/Dropdown';
import { Header } from '../src/documentation/Header/Header';
import { Icon } from '../src/Icon/Icon';
import { Identifier } from '../src/Identifier/Identifier';
import { Image } from '../src/Image/Image';
import { Import } from '../src/documentation/Import/Import';
import { InlineHelp } from '../src/InlineHelp/InlineHelp';
import { LocalizationEditor } from '../src/LocalizationEditor/LocalizationEditor';
import { Modal } from '../src/Modal/Modal';
import { MultiInput } from '../src/MultiInput/MultiInput';
import { Pagination } from '../src/Pagination/Pagination';
import { Playground } from '../src/documentation/Playground/Playground';
import { Popover } from '../src/Popover/Popover';
import { Properties } from '../src/documentation/Properties/Properties';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { SearchInput } from '../src/SearchInput/SearchInput';
import { Separator } from '../src/documentation/Separator/Separator';
import { Shellbar } from '../src/Shellbar/Shellbar';
import { Table } from '../src/Table/Table';
import { Time } from '../src/Time/Time';
import { TimePicker } from '../src/TimePicker/TimePicker';
import { Toggle } from '../src/Toggle/Toggle';
import { Token } from './Token/Token';
import { Tree } from '../src/Tree/Tree';

import { ActionBar, ActionBarActions, ActionBarBack, ActionBarHeader } from '../src/ActionBar/ActionBar';
import { Badge, Counter, Label, Status } from '../src/Badge/Badge';
import { Breadcrumb, BreadcrumbItem } from '../src/Breadcrumb/Breadcrumb';
import { Button, ButtonGroup } from '../src/Button/Button';
import { DocsText, DocsTile } from '../src/documentation/DocsTile/DocsTile';
import { FormFieldset, FormInput, FormItem, FormLabel, FormLegend, FormMessage, FormRadio, FormSelect, FormSet, FormTextarea } from '../src/Forms/Forms';
import { FormGroup, InputGroup } from '../src/InputGroup/InputGroup';
import { ListGroup, ListGroupItem, ListGroupItemActions, ListGroupItemCheckbox } from '../src/ListGroup/ListGroup';
import { MegaMenu, MegaMenuGroup, MegaMenuList } from '../src/MegaMenu/MegaMenu';
import { Menu, MenuGroup, MenuItem, MenuList } from '../src/Menu/Menu';
import { Panel, PanelActions, PanelBody, PanelContent, PanelFilters, PanelFooter, PanelGrid, PanelHead, PanelHeader } from '../src/Panel/Panel';
import { ProductTile, ProductTileContent, ProductTileMedia, Tile, TileActions, TileContent, TileGrid, TileMedia } from '../src/Tile/Tile';
import { SideNav, SideNavGroup, SideNavList } from '../src/SideNavigation/SideNavigation';
import { TabComponent, Tabs } from '../src/Tabs/Tabs';

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
