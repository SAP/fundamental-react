import classnames from 'classnames';
import PropTypes from 'prop-types';
import { TabContent } from './_TabContent';
import React, { Component } from 'react';

export class TabGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: props.selectedId
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return nextProps.selectedId !== prevState.selectedId ? { selectedId: nextProps.selectedId } : null;
    }

    // set selected tab
    handleTabSelection = (event, id) => {
        event.preventDefault();
        this.setState({
            selectedId: id
        });

        if (this.props.onTabClick) {
            this.props.onTabClick(event, id);
        }
    };

    // clone Tab element
    cloneElement = (child) => {
        return (React.cloneElement(child, {
            onClick: this.handleTabSelection,
            selected: this.state.selectedId === child.props.id
        }));
    }

    // create tab list
    renderTabs = () => {
        return React.Children.map(this.props.children, (child) => {
            return (
                <li
                    {...this.props.tabLinkProps}
                    className='fd-tabs__item'
                    key={child.props.id}>
                    {this.cloneElement(child)}
                </li>);
        });
    };

    // create content to show below tab list
    renderContent = () => {
        return React.Children.map(this.props.children, (child) => {
            return (
                <TabContent
                    {...this.props.tabContentProps}
                    selected={this.state.selectedId === child.props.id}>
                    {child.props.children}
                </TabContent>);
        });
    };

    render() {
        const {
            children,
            className,
            selectedId,
            tabContentProps,
            tabLinkProps,
            tabGroupProps,
            ...rest } = this.props;

        // css classes to use for tab group
        const tabGroupClasses = classnames(
            'fd-tabs',
            className
        );
        return (
            <React.Fragment>
                <ul {...rest}
                    className={tabGroupClasses}
                    role='tablist'>
                    {this.renderTabs(children)}
                </ul>
                {this.renderContent(children)}
            </React.Fragment>
        );
    }
}
TabGroup.displayName = 'TabGroup';

TabGroup.defaultProps = {
    selectedId: '1'
};

TabGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    selectedId: PropTypes.string,
    tabContentProps: PropTypes.object,
    tabLinkProps: PropTypes.object,
    onTabClick: PropTypes.func
};

TabGroup.propDescriptions = {
    children: 'One or more `Tab` components to render within the component.',
    selectedId: 'The `id` of the selected `Tab`.',
    tabContentProps: 'Additional props to be spread to the tab content\'s <div> element.',
    tabLinkProps: 'Additional props to be spread to the tab\'s <li> element.',
    onTabClick: 'Callback function when the user clicks on a tab'
};
