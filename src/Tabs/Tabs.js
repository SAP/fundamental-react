import classnames from 'classnames';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';

export const Tabs = props => {
    const { children, className, ...rest } = props;

    const tabClasses = classnames(
        'fd-tabs-container',
        className
    );

    return (
        <ul
            {...rest}
            className={tabClasses}>
            {children}
        </ul>
    );
};

Tabs.propTypes = {
    children: PropTypes.node,
    classnames: PropTypes.string
};

export class TabComponent extends Component {
    constructor(props) {
        super(props);
        let initialStates = [];

        initialStates = props.ids.forEach(ids => {
            let obj = {};
            let id = ids.id;
            obj[id] = false;
            return obj;
        });
        this.state = {
            selectedTab: '1',
            tabStates: initialStates
        };
    }

    handleTabSelection = (e, id) => {
        let iStates = Object.assign({}, this.state.tabStates);
        iStates[id.id] = !iStates[id.id];
        this.setState({ tabStates: iStates });
        this.setState({ selectedTab: id.id });
    };

    getLinkClasses = (id) => {
        return classnames(
            'fd-tabs__link',
            {
                'is-selected': this.state.selectedTab === id
            }
        );
    }

    render() {
        const { ids, className, tabProps, tabLinkProps, tabContentProps, ...rest } = this.props;

        const tabClasses = classnames(
            'fd-tabs',
            className
        );

        return (
            <BrowserRouter>
                <ul {...rest} className={tabClasses}>
                    {ids.map(id => {
                        return (
                            <li {...tabProps} className='fd-tabs__item'
                                key={id.id}>
                                <Link
                                    {...tabLinkProps}
                                    aria-disabled={id.disabled}
                                    className={this.getLinkClasses(id.id)}
                                    onClick={e => {
                                        !id.disabled && this.handleTabSelection(e, id, id.disabled);
                                    }}
                                    to={{ pathname: id.url }}>
                                    {id.name}
                                </Link>
                                {this.state.selectedTab === id.id ? (
                                    <p {...tabContentProps} className='fd-tabs__content'>{id.content}</p>
                                ) : null}
                            </li>
                        );
                    })}
                </ul>
            </BrowserRouter>
        );
    }
}

TabComponent.propTypes = {
    ids: PropTypes.array.isRequired,
    className: PropTypes.string,
    tabContentProps: PropTypes.object,
    tabLinkProps: PropTypes.object,
    tabProps: PropTypes.object
};
