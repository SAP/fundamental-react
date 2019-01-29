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
import Home from './documentation/Markdown/Home.md';
import { IconComponent } from '../Icon/Icon.Component';
import { IdentifierComponent } from '../Identifier/Identifier.Component';
import { ImageComponent } from '../Image/Image.Component';
import { InlineHelpComponent } from '../InlineHelp/InlineHelp.Component';
import { InputGroupComponent } from '../InputGroup/InputGroup.Component';
import { ListGroupComponent } from '../ListGroup/ListGroup.Component';
import { LocalizationEditorComponent } from '../LocalizationEditor/LocalizationEditor.Component';
import { MarkdownImporter } from './documentation/Markdown/MarkdownImporter';
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
import Usage from './documentation/Markdown/Usage.md';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';


export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [
                {
                    url: '/home',
                    name: 'Home',
                    render: function() {
                        return <MarkdownImporter source={Home} />;
                    },
                    section: 'GettingStarted'
                },
                {
                    url: '/usage',
                    name: 'Usage',
                    render: function() {
                        return <MarkdownImporter source={Usage} />;
                    },
                    section: 'GettingStarted'
                },
                {
                    url: '/actionBar',
                    name: 'Action Bar',
                    component: ActionBarComponent,
                    section: 'components'
                },
                {
                    url: '/alert',
                    name: 'Alert',
                    component: AlertComponent,
                    section: 'components'
                },
                {
                    url: '/breadcrumb',
                    name: 'Breadcrumb',
                    component: BreadcrumbComponent,
                    section: 'components'
                },
                {
                    url: '/button',
                    name: 'Button',
                    component: ButtonComponent,
                    section: 'components'
                },
                {
                    url: '/calendar',
                    name: 'Calendar',
                    component: CalendarComponent,
                    section: 'components'
                },
                {
                    url: '/comboboxInput',
                    name: 'Combobox Input',
                    component: ComboboxInputComponent,
                    section: 'components'
                },
                {
                    url: '/contextualMenu',
                    name: 'Contextual Menu',
                    component: ContextualMenuComponent,
                    section: 'components'
                },
                {
                    url: '/datepicker',
                    name: 'Date Picker',
                    component: DatePickerComponent,
                    section: 'components'
                },
                {
                    url: '/dropdown',
                    name: 'Dropdown',
                    component: DropdownComponent,
                    section: 'components'
                },
                {
                    url: '/forms',
                    name: 'Forms',
                    component: FormsComponent,
                    section: 'components'
                },
                {
                    url: '/icon',
                    name: 'Icon',
                    component: IconComponent,
                    section: 'components'
                },
                {
                    url: '/identifier',
                    name: 'Identifier',
                    component: IdentifierComponent,
                    section: 'components'
                },
                {
                    url: '/image',
                    name: 'Image',
                    component: ImageComponent,
                    section: 'components'
                },
                {
                    url: '/inlineHelp',
                    name: 'Inline Help',
                    component: InlineHelpComponent,
                    section: 'components'
                },
                {
                    url: '/inputGroup',
                    name: 'Input Group',
                    component: InputGroupComponent,
                    section: 'components'
                },
                {
                    url: '/listGroup',
                    name: 'List Group',
                    component: ListGroupComponent,
                    section: 'components'
                },
                {
                    url: '/localizationEditor',
                    name: 'Localization Editor',
                    component: LocalizationEditorComponent,
                    section: 'components'
                },
                {
                    url: '/menu',
                    name: 'Menu',
                    component: MenuComponent,
                    section: 'components'
                },
                {
                    url: '/modal',
                    name: 'Modal',
                    component: ModalComponent,
                    section: 'components'
                },
                {
                    url: '/multiInput',
                    name: 'Multi Input',
                    component: MultiInputComponent,
                    section: 'components'
                },
                {
                    url: '/pagination',
                    name: 'Pagination',
                    component: PaginationComponent,
                    section: 'components'
                },
                {
                    url: '/panel',
                    name: 'Panel',
                    component: PanelComponent,
                    section: 'components'
                },
                {
                    url: '/popover',
                    name: 'Popover',
                    component:
                   PopoverComponent,
                    section:
                    'components'
                },
                {
                    url: '/searchInput',
                    name: 'Search Input',
                    component: SearchInputComponent,
                    section: 'components'
                },
                {
                    url: '/shellbar',
                    name: 'Shellbar',
                    component: ShellbarComponent,
                    section: 'components'
                },
                {
                    url: '/sideNavigation',
                    name: 'Side Navigation',
                    component: SideNavigationComponent,
                    section: 'components'
                },
                {
                    url: '/statusIndicators',
                    name: 'Status Indicators',
                    component: BadgeComponent,
                    section: 'components'
                },
                {
                    url: '/table',
                    name: 'Table',
                    component: TableComponent,
                    section: 'components'
                },
                {
                    url: '/tabs',
                    name: 'Tabs',
                    component: TabsComponent,
                    section: 'components'
                },
                {
                    url: '/tile',
                    name: 'Tile',
                    component: TileComponent,
                    section: 'components'
                },
                {
                    url: '/time',
                    name: 'Time',
                    component: TimeComponent,
                    section: 'components'
                },
                {
                    url: '/timepicker',
                    name: 'TimePicker',
                    component: TimePickerComponent,
                    section: 'components'
                },
                {
                    url: '/toggle',
                    name: 'Toggle',
                    component: ToggleComponent,
                    section: 'components'
                },
                {
                    url: '/token',
                    name: 'Token',
                    component: TokenComponent,
                    section: 'components'
                },
                {
                    url: '/tree',
                    name: 'Tree',
                    component: TreeComponent,
                    section: 'components'
                }
            ]
        };
    }

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className='frDocs-Container'>
                    <div className='frDocs-Sidebar'>
                        <h1 className='frDocs-Logo'>FUNDAMENTAL REACT</h1>
                        <ul className='frDocs-Nav'>
                            <li className='frDocs-Nav__headers'>Getting Started</li>
                            {this.state.routes.map(route => {
                                return route.section === 'GettingStarted' ?
                                    <NavLink
                                        activeClassName='frDocs-Nav__item--active'
                                        className='frDocs-Nav__item'
                                        key={route.url}
                                        to={{ pathname: route.url }}>
                                        {route.name}
                                    </NavLink>
                                    : null;
                            })}
                            <li className='frDocs-Nav__headers'>Components</li>
                            {this.state.routes.map(route => {
                                return route.section === 'components' ?
                                    <NavLink
                                        activeClassName='frDocs-Nav__item--active'
                                        className='frDocs-Nav__item'
                                        key={route.url}
                                        to={{ pathname: route.url }}>
                                        {route.name}
                                    </NavLink>
                                    : null;
                            })}
                        </ul>
                    </div>
                    <div className='frDocs-Content'>
                        <Switch>
                            {this.state.routes.map(route => {
                                return (
                                    <Route
                                        component={route.render ? route.render : route.component}
                                        exact
                                        key={route.url}
                                        path={route.url} />
                                );
                            })}
                            <Redirect exact from=''
                                to='/home' />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
