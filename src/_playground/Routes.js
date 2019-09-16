import { ActionBarComponent } from '../ActionBar/ActionBar.Component';
import { AlertComponent } from '../Alert/Alert.Component';
import { BadgeComponent } from '../Badge/Badge.Component';
import { BreadcrumbComponent } from '../Breadcrumb/Breadcrumb.Component';
import Button from '../Button/Button';
import { ButtonComponent } from '../Button/Button.Component';
import { CalendarComponent } from '../Calendar/Calendar.Component';
import classnames from 'classnames';
import { ComboboxInputComponent } from '../ComboboxInput/ComboboxInput.Component';
import { ContextualMenuComponent } from '../ContextualMenu/ContextualMenu.Component';
import { DatePickerComponent } from '../DatePicker/DatePicker.Component';
import { DropdownComponent } from '../Dropdown/Dropdown.Component';
import { FormsComponent } from '../Forms/Forms.Component';
import groupArray from 'group-array';
import Home from './documentation/Home/Home';
import { IconComponent } from '../Icon/Icon.Component';
import { IdentifierComponent } from '../Identifier/Identifier.Component';
import { ImageComponent } from '../Image/Image.Component';
import { InlineHelpComponent } from '../InlineHelp/InlineHelp.Component';
import InputGroup from '../InputGroup/InputGroup';
import { InputGroupComponent } from '../InputGroup/InputGroup.Component';
import { LayoutGridComponent } from '../LayoutGrid/LayoutGrid.Component';
import { LinkComponent } from '../Link/Link.Component';
import { ListGroupComponent } from '../ListGroup/ListGroup.Component';
import { LocalizationEditorComponent } from '../LocalizationEditor/LocalizationEditor.Component';
import { MenuComponent } from '../Menu/Menu.Component';
import { ModalComponent } from '../Modal/Modal.Component';
import { MultiInputComponent } from '../MultiInput/MultiInput.Component';
import { PaginationComponent } from '../Pagination/Pagination.Component';
import { PanelComponent } from '../Panel/Panel.Component';
import { PopoverComponent } from '../Popover/Popover.Component';
import RouteNotFound from './_RouteNotFound';
import ScrollToTop from './_ScrollToTop';
import { SearchInputComponent } from '../SearchInput/SearchInput.Component';
import { ShellbarComponent } from '../Shellbar/Shellbar.Component';
import { SideNav } from '../SideNavigation/';
import { SideNavigationComponent } from '../SideNavigation/SideNav.Component';
import sortBy from 'sort-by';
import { TableComponent } from '../Table/Table.Component';
import { TabsComponent } from '../Tabs/Tabs.Component';
import { TileComponent } from '../Tile/Tile.Component';
import { TimeComponent } from '../Time/Time.Component';
import { TimePickerComponent } from '../TimePicker/TimePicker.Component';
import { ToggleComponent } from '../Toggle/Toggle.Component';
import { TokenComponent } from '../Token/Token.Component';
import { TreeViewComponent } from '../TreeView/TreeView.Component';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { version as packageVersion, repository } from '../../package.json';
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
        url: '/layout-grid',
        name: 'Layout Grid',
        component: LayoutGridComponent,
        section: 'Components'
    },
    {
        url: '/link',
        name: 'Link',
        component: LinkComponent,
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

export class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            filteredItems: routes,
            showSideNav: false, //for css media queries, default is invisible-'false'
            currentPage: 'Home'
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

    updateCurrentPage = (e, id) => {
        this.setState({
            currentPage: id
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
                <SideNav.List key={section.name} title={section.name}>
                    {sectionRoutes.map(route => (
                        <SideNav.ListItem
                            id={route.name}
                            key={route.name}
                            onClick={this.resetNavState}>
                            <NavLink
                                key={route.name}
                                to={{ pathname: route.url }}>
                                {route.name}
                            </NavLink>
                        </SideNav.ListItem>
                    ))}
                </SideNav.List>
            );
        });

        const sideBarClasses = classnames('frDocs-Sidebar', {
            'frDocs-Sidebar--isHidable': !this.state.showSideNav
        });

        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <ScrollToTop>
                    <div className='frDocs-Container'>
                        <header className='frDocs-Menu'>
                            <a
                                className='screen-reader-only--focusable'
                                href='#frDocs-Content'>
                                Skip Navigation Links
                            </a>
                            <Button
                                aria-expanded={this.state.showSideNav}
                                aria-label='Toggle Navigation'
                                glyph='menu2'
                                id='navToggle'
                                onClick={this.toggleNavVis}
                                option='light'
                                type='standard' />
                            <a
                                aria-label='Home'
                                className='frDocs-Menu__logo'
                                href='/home'>
                                Fundamental <span className='frDocs-Menu__logo--library'>React</span>
                            </a>
                            <span className='frDocs-Menu__spacer' />
                            <span className='frDocs-Menu__version'>{`v${packageVersion}`}</span>
                            <a className='frDocs-Menu__githubLogo' href={repository.url}
                                target='_blank'>
                                <svg viewBox='0 0 512 499.36' xmlns='http://www.w3.org/2000/svg'>
                                    <title>GitHub</title>
                                    <path d='M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z' fill='white'
                                        fillRule='evenodd' />
                                </svg>
                            </a>
                        </header>
                        <div className={sideBarClasses}>
                            <div className='frDocs-Search'>
                                <InputGroup
                                    glyph='search'
                                    inputPlaceholder='Search'
                                    inputProps={{ 'aria-label': 'Search' }}
                                    inputValue={this.state.query}
                                    onChange={this.onChangeHandler} />
                            </div>
                            <SideNav onItemSelect={this.updateCurrentPage} selectedId={this.state.currentPage}>
                                {navItems}
                            </SideNav>
                        </div>
                        <div className='frDocs-Content' id='frDocs-Content'>
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
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}
