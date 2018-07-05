import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import { ActionBarComponent } from './ActionBar/ActionBar.Component'
import { AlertComponent } from './Alert/Alert.Component'
import { BadgeComponent } from './Badge/Badge.Component'
import { BreadcrumbComponent } from './Breadcrumb/Breadcrumb.Component'
import { ButtonComponent } from './Button/Button.Component'
import { DropdownComponent } from './Dropdown/Dropdown.Component'
import { FormsComponent } from './Forms/Forms.Component'
import { IconComponent } from './Icon/Icon.Component'
import { IdentifierComponent } from './Identifier/Identifier.Component'
import { ImageComponent } from './Image/Image.Component'
import { InputGroupComponent } from './InputGroup/InputGroup.Component'
import { ListGroupComponent } from './ListGroup/ListGroup.Component'
import { MegaMenuComponent } from './MegaMenu/MegaMenu.Component'
import { SideNavigationComponent } from './SideNavigation/SideNavigation.Component'
import { TableComponent } from './Table/Table.Component'
import { TabsComponent } from './Tabs/Tabs.Component'
import { TagComponent } from './Tag/Tag.Component'
import { TileComponent } from './Tile/Tile.Component'
import { ToggleComponent } from './Toggle/Toggle.Component'
import { TreeComponent } from './Tree/Tree.Component'

export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [
                { url: '/actionBar', name: 'Action Bar', component: ActionBarComponent },
                { url: '/alert', name: 'Alert', component: AlertComponent },
                { url: '/badge', name: 'Badge and Label', component: BadgeComponent },
                { url: '/breadcrumb', name: 'Breadcrumb', component: BreadcrumbComponent },
                { url: '/button', name: 'Button', component: ButtonComponent },
                { url: '/dropdown', name: 'Dropdown', component: DropdownComponent },
                { url: '/forms', name: 'Forms', component: FormsComponent },
                { url: '/icon', name: 'Icon', component: IconComponent },
                { url: '/identifier', name: 'Identifier', component: IdentifierComponent },
                { url: '/image', name: 'Image', component: ImageComponent },
                { url: '/inputGroup', name: 'Input Group', component: InputGroupComponent },
                { url: '/listGroup', name: 'List Group', component: ListGroupComponent },
                { url: '/megaMenu', name: 'Mega Menu', component: MegaMenuComponent },
                { url: '/sideNavigation', name: 'Side Navigation', component: SideNavigationComponent },
                { url: '/table', name: 'Table', component: TableComponent },
                { url: '/tabs', name: 'Tabs', component: TabsComponent },
                { url: '/tag', name: 'Tag', component: TagComponent },
                { url: '/tile', name: 'Tile', component: TileComponent },
                { url: '/toggle', name: 'Toggle', component: ToggleComponent },
                { url: '/tree', name: 'Tree', component: TreeComponent }
            ]
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="sidebar">
                    <h1 className="logo">FUNDAMENTAL REACT</h1>
                        <ul className="nav">
                            <li className="side-nav__headers">Components</li>
                            {
                                this.state.routes.map(route => {
                                    return (
                                        <NavLink className="nav-item" to={{ pathname: route.url }} key={route.url} activeClassName="nav-item--selected">{route.name}</NavLink>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="content">
                        <div className="content-margin">
                            <Switch>
                                {
                                    this.state.routes.map(route => {
                                        return (
                                            <Route key={route.url} exact path={route.url} component={route.component} />
                                        )
                                    })
                                }
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
