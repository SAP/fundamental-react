import classnames from 'classnames';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';

export const Tabs = props => {
    const { children, className, disabled, id, ...rest } = props;

    const renderLink = () => {
        if (url) {
            return (
                <a
                    aria-disabled={disabled}
                    className={className}> 
                    {children}
                </a>
            );
        } else if (children) {
            return children
        }
    }

    return (
        <li className='fd-tabs__item' 
            key={id.id}
            {...rest}>
            {renderLink()}
        </li>
    );
};

// {ids.map(id => {
//     return (
//         <li {...tabProps}
//             key={id.id}>
//             <Link
//                 {...tabLinkProps}
//                 aria-disabled={id.disabled}
//                 onClick={e => {
//                     !id.disabled && this.handleTabSelection(e, id, id.disabled);
//                 }}
//                 to={{ pathname: id.url }}>
//                 {id.name}
//             </Link>
//             {this.state.selectedTab === id.id ? (
//                 <p {...tabContentProps} className='fd-tabs__content'>{id.content}</p>
//             ) : null}
//         </li>
//     );
// })}

Tabs.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    ids: PropTypes.array.isRequired,
    name: PropTypes.string,
    url: PropTypes.string
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

    renderChildren = () => {
        React.Children.map(children, (child) => {
            React.cloneElement(children, {
                className: this.getLinkClasses(id.id)
            })
        })
    }

    render() {
        const { ids, className, tabProps, tabLinkProps, tabContentProps, ...rest } = this.props;

        const tabClasses = classnames(
            'fd-tabs',
            className
        );

        return (
            <ul {...rest} className={tabClasses}>
                {renderChildren()}
            </ul>
        );
    }
}

TabComponent.propTypes = {
    className: PropTypes.string,
};

TabComponent.propDescriptions = {
    ids: 'An array of objects with keys \'id\', \'url\', \'name\', \'hasChild\', \'child\', and \'glyph\' defining each tab.',
};
