import { ActionBarComponent } from '../ActionBar/ActionBar.Component';
import { AlertComponent } from '../Alert/Alert.Component';
import { BadgeComponent } from '../Badge/Badge.Component';
import { BreadcrumbComponent } from '../Breadcrumb/Breadcrumb.Component';
import { ButtonComponent } from '../Button/Button.Component';
import { CalendarComponent } from '../Calendar/Calendar.Component';
import { ComboboxInputComponent } from '../ComboboxInput/ComboboxInput.Component';
import { ContextualMenuComponent } from '../ContextualMenu/ContextualMenu.Component';
import { DatePickerComponent } from '../DatePicker/DatePicker.Component';
import { DropdownComponent } from '../Dropdown/Dropdown.Component';
import { FormsComponent } from '../Forms/Forms.Component';
import { IconComponent } from '../Icon/Icon.Component';
import { IdentifierComponent } from '../Identifier/Identifier.Component';
import { ImageComponent } from '../Image/Image.Component';
import { InlineHelpComponent } from '../InlineHelp/InlineHelp.Component';
import { InputGroupComponent } from '../InputGroup/InputGroup.Component';
import { ListGroupComponent } from '../ListGroup/ListGroup.Component';
import { LocalizationEditorComponent } from '../LocalizationEditor/LocalizationEditor.Component';
import { MegaMenuComponent } from '../MegaMenu/MegaMenu.Component';
import { MenuComponent } from '../Menu/Menu.Component';
import { ModalComponent } from '../Modal/Modal.Component';
import { MultiInputComponent } from '../MultiInput/MultiInput.Component';
import { PaginationComponent } from '../Pagination/Pagination.Component';
import { PanelComponent } from '../Panel/Panel.Component';
import { PopoverComponent } from '../Popover/Popover.Component';
import { SearchInputComponent } from '../SearchInput/SearchInput.Component';
import { ShellbarComponent } from '../Shellbar/Shellbar.Component';
import { SideNavigationComponent } from '../SideNavigation/SideNavigation.Component';
import { TableComponent } from '../Table/Table.Component';
import { TabsComponent } from '../Tabs/Tabs.Component';
import { TileComponent } from '../Tile/Tile.Component';
import { TimeComponent } from '../Time/Time.Component';
import { TimePickerComponent } from '../TimePicker/TimePicker.Component';
import { ToggleComponent } from '../Toggle/Toggle.Component';
import { TokenComponent } from '../Token/Token.Component';
import { TreeComponent } from '../Tree/Tree.Component';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [
                {
                    url: '/actionBar',
                    name: 'Action Bar',
                    component: ActionBarComponent
                },
                { url: '/alert', name: 'Alert', component: AlertComponent },
                {
                    url: '/breadcrumb',
                    name: 'Breadcrumb',
                    component: BreadcrumbComponent
                },
                { url: '/button', name: 'Button', component: ButtonComponent },
                { url: '/calendar', name: 'Calendar', component: CalendarComponent },
                {
                    url: '/comboboxInput',
                    name: 'Combobox Input',
                    component: ComboboxInputComponent
                },
                {
                    url: '/contextualMenu',
                    name: 'Contextual Menu',
                    component: ContextualMenuComponent
                },
                {
                    url: '/datepicker',
                    name: 'Date Picker',
                    component: DatePickerComponent
                },
                { url: '/dropdown', name: 'Dropdown', component: DropdownComponent },
                { url: '/forms', name: 'Forms', component: FormsComponent },
                { url: '/icon', name: 'Icon', component: IconComponent },
                {
                    url: '/identifier',
                    name: 'Identifier',
                    component: IdentifierComponent
                },
                { url: '/image', name: 'Image', component: ImageComponent },
                {
                    url: '/inputGroup',
                    name: 'Input Group',
                    component: InputGroupComponent
                },
                {
                    url: '/inlineHelp',
                    name: 'Inline Help',
                    component: InlineHelpComponent
                },
                {
                    url: '/listGroup',
                    name: 'List Group',
                    component: ListGroupComponent
                },
                {
                    url: '/localizationEditor',
                    name: 'Localization Editor',
                    component: LocalizationEditorComponent
                },
                { url: '/megaMenu', name: 'Mega Menu', component: MegaMenuComponent },
                { url: '/menu', name: 'Menu', component: MenuComponent },
                { url: '/modal', name: 'Modal', component: ModalComponent },
                {
                    url: '/multiInput',
                    name: 'Multi Input',
                    component: MultiInputComponent
                },
                {
                    url: '/pagination',
                    name: 'Pagination',
                    component: PaginationComponent
                },
                { url: '/panel', name: 'Panel', component: PanelComponent },
                { url: '/popover', name: 'Popover', component: PopoverComponent },
                {
                    url: '/searchInput',
                    name: 'Search Input',
                    component: SearchInputComponent
                },
                {
                    url: '/shellbar',
                    name: 'Shellbar',
                    component: ShellbarComponent
                },
                {
                    url: '/sideNavigation',
                    name: 'Side Navigation',
                    component: SideNavigationComponent
                },
                {
                    url: '/statusIndicators',
                    name: 'Status Indicators',
                    component: BadgeComponent
                },
                { url: '/table', name: 'Table', component: TableComponent },
                { url: '/tabs', name: 'Tabs', component: TabsComponent },
                { url: '/tile', name: 'Tile', component: TileComponent },
                { url: '/time', name: 'Time', component: TimeComponent },
                {
                    url: '/timepicker',
                    name: 'TimePicker',
                    component: TimePickerComponent
                },
                { url: '/toggle', name: 'Toggle', component: ToggleComponent },
                { url: '/token', name: 'Token', component: TokenComponent },
                { url: '/tree', name: 'Tree', component: TreeComponent }
            ]
        };
    }

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className='container'>
                    <div className='sidebar'>
                        <h1 className='logo'>FUNDAMENTAL REACT</h1>
                        <ul className='nav'>
                            <li className='side-nav__headers'>Components</li>
                            {this.state.routes.map(route => {
                                return (
                                    <NavLink
                                        activeClassName='nav-item--active'
                                        className='nav-item'
                                        key={route.url}
                                        to={{ pathname: route.url }}>
                                        {route.name}
                                    </NavLink>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='content'>
                        <div className='content-margin'>
                            <Switch>
                                {this.state.routes.map(route => {
                                    return (
                                        <Route
                                            component={route.component}
                                            exact
                                            key={route.url}
                                            path={route.url} />
                                    );
                                })}
                                <Redirect exact from=''
                                    to='/actionBar' />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
