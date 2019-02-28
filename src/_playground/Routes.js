import { ActionBarComponent } from '../ActionBar/ActionBar.Component';
import { AlertComponent } from '../Alert/Alert.Component';
import { BadgeComponent } from '../Badge/Badge.Component';
import { BreadcrumbComponent } from '../Breadcrumb/Breadcrumb.Component';
import { ButtonComponent } from '../Button/Button.Component';
import { CalendarComponent } from '../Calendar/Calendar.Component';
import classnames from 'classnames';
import { ComboboxInputComponent } from '../ComboboxInput/ComboboxInput.Component';
import { ContextualMenuComponent } from '../ContextualMenu/ContextualMenu.Component';
import { DatePickerComponent } from '../DatePicker/DatePicker.Component';
import { DropdownComponent } from '../Dropdown/Dropdown.Component';
import { FormsComponent } from '../Forms/Forms.Component';
import groupArray from 'group-array';
import { Header } from './documentation/Header/Header';
import { Home } from './documentation/Home/Home';
import { IconComponent } from '../Icon/Icon.Component';
import { IdentifierComponent } from '../Identifier/Identifier.Component';
import { ImageComponent } from '../Image/Image.Component';
import { InlineHelpComponent } from '../InlineHelp/InlineHelp.Component';
import InputGroup from '../InputGroup/InputGroup';
import { InputGroupComponent } from '../InputGroup/InputGroup.Component';
import { ListGroupComponent } from '../ListGroup/ListGroup.Component';
import { LocalizationEditorComponent } from '../LocalizationEditor/LocalizationEditor.Component';
import { MenuComponent } from '../Menu/Menu.Component';
import { ModalComponent } from '../Modal/Modal.Component';
import { MultiInputComponent } from '../MultiInput/MultiInput.Component';
import { PaginationComponent } from '../Pagination/Pagination.Component';
import { PanelComponent } from '../Panel/Panel.Component';
import { PopoverComponent } from '../Popover/Popover.Component';
import { SearchInputComponent } from '../SearchInput/SearchInput.Component';
import { ShellbarComponent } from '../Shellbar/Shellbar.Component';
import { SideNavigationComponent } from '../SideNavigation/SideNavigation.Component';
import sortBy from 'sort-by';
import { TableComponent } from '../Table/Table.Component';
import { TabsComponent } from '../Tabs/Tabs.Component';
import { TileComponent } from '../Tile/Tile.Component';
import { TimeComponent } from '../Time/Time.Component';
import { TimePickerComponent } from '../TimePicker/TimePicker.Component';
import { ToggleComponent } from '../Toggle/Toggle.Component';
import { TokenComponent } from '../Token/Token.Component';
import { TreeViewComponent } from '../TreeView/TreeView.Component';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

const sections = [
    {
        name: 'Getting Started',
        sortOrder: 1
    },
    {
        name: 'Components',
        sortOrder: 2
    }
];

const routes = [
    {
        url: '/home',
        name: 'Home',
        component: Home,
        section: 'Getting Started',
        sortOrder: 1, // this one should always come first
        omitSearch: true //should not be filtered for search
    },
    {
        url: '/actionBar',
        name: 'Action Bar',
        component: ActionBarComponent,
        section: 'Components'
    },
    {
        url: '/alert',
        name: 'Alert',
        component: AlertComponent,
        section: 'Components'
    },
    {
        url: '/breadcrumb',
        name: 'Breadcrumb',
        component: BreadcrumbComponent,
        section: 'Components'
    },
    {
        url: '/button',
        name: 'Button',
        component: ButtonComponent,
        section: 'Components'
    },
    {
        url: '/calendar',
        name: 'Calendar',
        component: CalendarComponent,
        section: 'Components'
    },
    {
        url: '/comboboxInput',
        name: 'Combobox Input',
        component: ComboboxInputComponent,
        section: 'Components'
    },
    {
        url: '/contextualMenu',
        name: 'Contextual Menu',
        component: ContextualMenuComponent,
        section: 'Components'
    },
    {
        url: '/datepicker',
        name: 'Date Picker',
        component: DatePickerComponent,
        section: 'Components'
    },
    {
        url: '/dropdown',
        name: 'Dropdown',
        component: DropdownComponent,
        section: 'Components'
    },
    {
        url: '/forms',
        name: 'Forms',
        component: FormsComponent,
        section: 'Components'
    },
    {
        url: '/icon',
        name: 'Icon',
        component: IconComponent,
        section: 'Components'
    },
    {
        url: '/identifier',
        name: 'Identifier',
        component: IdentifierComponent,
        section: 'Components'
    },
    {
        url: '/image',
        name: 'Image',
        component: ImageComponent,
        section: 'Components'
    },
    {
        url: '/inlineHelp',
        name: 'Inline Help',
        component: InlineHelpComponent,
        section: 'Components'
    },
    {
        url: '/inputGroup',
        name: 'Input Group',
        component: InputGroupComponent,
        section: 'Components'
    },
    {
        url: '/listGroup',
        name: 'List Group',
        component: ListGroupComponent,
        section: 'Components'
    },
    {
        url: '/localizationEditor',
        name: 'Localization Editor',
        component: LocalizationEditorComponent,
        section: 'Components'
    },
    {
        url: '/menu',
        name: 'Menu',
        component: MenuComponent,
        section: 'Components'
    },
    {
        url: '/modal',
        name: 'Modal',
        component: ModalComponent,
        section: 'Components'
    },
    {
        url: '/multiInput',
        name: 'Multi Input',
        component: MultiInputComponent,
        section: 'Components'
    },
    {
        url: '/pagination',
        name: 'Pagination',
        component: PaginationComponent,
        section: 'Components'
    },
    {
        url: '/panel',
        name: 'Panel',
        component: PanelComponent,
        section: 'Components'
    },
    {
        url: '/popover',
        name: 'Popover',
        component: PopoverComponent,
        section: 'Components'
    },
    {
        url: '/searchInput',
        name: 'Search Input',
        component: SearchInputComponent,
        section: 'Components'
    },
    {
        url: '/shellbar',
        name: 'Shellbar',
        component: ShellbarComponent,
        section: 'Components'
    },
    {
        url: '/sideNavigation',
        name: 'Side Navigation',
        component: SideNavigationComponent,
        section: 'Components'
    },
    {
        url: '/statusIndicators',
        name: 'Status Indicators',
        component: BadgeComponent,
        section: 'Components'
    },
    {
        url: '/table',
        name: 'Table',
        component: TableComponent,
        section: 'Components'
    },
    {
        url: '/tabs',
        name: 'Tab Group',
        component: TabsComponent,
        section: 'Components'
    },
    {
        url: '/tile',
        name: 'Tile',
        component: TileComponent,
        section: 'Components'
    },
    {
        url: '/time',
        name: 'Time',
        component: TimeComponent,
        section: 'Components'
    },
    {
        url: '/timepicker',
        name: 'Time Picker',
        component: TimePickerComponent,
        section: 'Components'
    },
    {
        url: '/toggle',
        name: 'Toggle',
        component: ToggleComponent,
        section: 'Components'
    },
    {
        url: '/token',
        name: 'Token',
        component: TokenComponent,
        section: 'Components'
    },
    {
        url: '/treeview',
        name: 'Tree View',
        component: TreeViewComponent,
        section: 'Components'
    }
];

const RouteNotFound = () => (
    <div>
        <Header>Sorry, page not found.</Header>
        <Link to=''>Home</Link>
    </div>
);

export class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            filteredItems: routes,
            showSideNav: false //for css media queries, default is invisible-'false'
        };
    }

    onChangeHandler = (event) => {
        let searchResults = routes.filter((navItem) => {
            return navItem.omitSearch ? navItem : navItem.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        this.setState({
            query: event.target.value,
            filteredItems: [...searchResults]
        });
    };

    toggleNavVis = () => {
        this.setState({
            showSideNav: !this.state.showSideNav
        });
    }

    resetNavState = () => {
        this.setState({
            showSideNav: false
        });
    }

    render() {
        let sectionRoutes;
        const groupedRoutes = groupArray(this.state.filteredItems, 'section');

        let navItems = sections.sort(sortBy('sortOrder', 'name')).map(section => {
            if (!groupedRoutes[section.name]) {
                return;
            }

            sectionRoutes = groupedRoutes[section.name].sort(sortBy('sortOrder', 'name'));
            return (
                <ul className='frDocs-Nav__list' key={section.name}>
                    <li className='frDocs-Nav__headers'>{section.name}</li>
                    {sectionRoutes.map(route => (
                        <li key={route.name}>
                            <NavLink
                                activeClassName='frDocs-Nav__item--active'
                                className='frDocs-Nav__item'
                                key={route.url}
                                onClick={this.resetNavState}
                                to={{ pathname: route.url }}>
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            );
        });

        const sideBarClasses = classnames({
            'frDocs-Sidebar': true,
            'frDocs-Sidebar--isHidable': !this.state.showSideNav
        });

        const docsContentClasses = classnames({
            'frDocs-Content': true,
            'frDocs-Content--isHidable': !this.state.showSideNav
        });

        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className='frDocs-Container'>
                    <div className={sideBarClasses}>
                        <h1 className='frDocs-Logo'>
                            <a href='/'>Fundamental <span className='frDocs-Logo--library'>React</span></a>
                        </h1>
                        <div className='frDocs-Search'>
                            <InputGroup
                                inputPlaceholder='Search'
                                inputType='search'
                                inputValue={this.state.query}
                                onChange={this.onChangeHandler} />
                        </div>
                        <nav className='frDocs-Nav'>
                            {navItems}
                        </nav>
                    </div>
                    <div className={docsContentClasses}>
                        <button
                            aria-expanded={this.state.showSideNav}
                            aria-label='Toggle Navigation'
                            className='fd-button sap-icon--menu2 fd-button--standard fd-button--light sidebar-toggle'
                            onClick={this.toggleNavVis} />
                        <Switch>
                            {routes.map(route => {
                                return (
                                    <Route
                                        component={route.component}
                                        exact
                                        key={route.url}
                                        path={route.url} />
                                );
                            })}
                            <Redirect exact from=''
                                to='/home' />
                            <Route component={RouteNotFound} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
