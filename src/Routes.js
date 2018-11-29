import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';

import {ActionBarComponent,
  AlertComponent,
  BadgeComponent,
  BreadcrumbComponent,
  ButtonComponent,
  CalendarComponent,
  ComboboxInputComponent,
  ContextualMenuComponent,
  DatePickerComponent,
  DropdownComponent,
  FormsComponent,
  IconComponent,
  IdentifierComponent,
  ImageComponent,
  InlineHelpComponent,
  InputGroupComponent,
  ListGroupComponent,
  LocalizationEditorComponent,
  MegaMenuComponent,
  MenuComponent,
  ModalComponent,
  MultiInputComponent,
  NavbarComponent,
  PaginationComponent,
  PanelComponent,
  PopoverComponent,
  SearchInputComponent,
  SideNavigationComponent,
  TableComponent,
  TabsComponent,
  TokenComponent,
  TileComponent,
  ToggleComponent,
  TreeComponent,
  TimeComponent,
  TimePickerComponent} from './documentation/Components/index';

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
          url: '/badge',
          name: 'Badge, Label & Status',
          component: BadgeComponent
        },
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
          url: '/navbar',
          name: 'Navigation Bar',
          component: NavbarComponent
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
          url: '/sideNavigation',
          name: 'Side Navigation',
          component: SideNavigationComponent
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
                    className='nav-item'
                    to={{ pathname: route.url }}
                    key={route.url}
                    activeClassName='nav-item--active'
                  >
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
                      key={route.url}
                      exact
                      path={route.url}
                      component={route.component}
                    />
                  );
                })}
                <Redirect from='' exact to='/actionBar' />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
