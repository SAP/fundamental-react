import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import { DemoComponent } from './_Demo/DemoComponent'
import { ActionBarComponent } from './ActionBar/ActionBar.Component'
import { AlertComponent } from './Alert/Alert.Component'
import { BadgeComponent } from './Badge/Badge.Component'
import { ButtonComponent } from './Button/Button.Component'
import { DropdownComponent } from './Dropdown/Dropdown.Component'
import { IconComponent } from './Icon/Icon.Component'
import { IdentifierComponent } from './Identifier/Identifier.Component'
import { ImageComponent } from './Image/Image.Component'
import { ListGroupComponent } from './ListGroup/ListGroup.Component'
import { TagComponent } from './Tag/Tag.Component'
import { TileComponent } from './Tile/Tile.Component'
import { ToggleComponent } from './Toggle/Toggle.Component'

export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [
                { url: '/', name: 'Demo', component: DemoComponent },
                { url: '/actionBar', name: 'Action Bar', component: ActionBarComponent },
                { url: '/alert', name: 'Alert', component: AlertComponent },
                { url: '/badge', name: 'Badge and Label', component: BadgeComponent },
                { url: '/button', name: 'Button', component: ButtonComponent },
                { url: '/dropdown', name: 'Dropdown', component: DropdownComponent },
                { url: '/icon', name: 'Icon', component: IconComponent },
                { url: '/identifier', name: 'Identifier', component: IdentifierComponent },
                { url: '/image', name: 'Image', component: ImageComponent },
                { url: '/listGroup', name: 'List Group', component: ListGroupComponent },
                { url: '/tag', name: 'Tag', component: TagComponent },
                { url: '/tile', name: 'Tile', component: TileComponent },
                { url: '/toggle', name: 'Toggle', component: ToggleComponent }
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
                                        <Link className="nav-item" to={{ pathname: route.url }} key={route.url}>{route.name}</Link>
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
