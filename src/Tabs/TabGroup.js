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

    static getDerivedStateFromProps(props, state) {
        const prevProps = state.prevProps || {};
        // Compare the incoming prop to previous prop
        const selectedId =
            prevProps.selectedId !== props.selectedId
                ? props.selectedId
                : state.selectedId;
        return {
            // Store the previous props in state
            prevProps: props,
            selectedId
        };
    }

    // set selected tab
    handleTabSelection = (event, id) => {
        event.preventDefault();
        this.setState({
            selectedId: id
        });

        this.props.onTabClick(event, id);
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
            return this.cloneElement(child);
        });
    };

    // create content to show below tab list
    renderContent = () => {
        return React.Children.map(this.props.children, (child) => {
            return (
                <TabContent
                    {...child.props.tabContentProps}
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
            tabGroupProps,
            onTabClick,
            ...rest } = this.props;

        // css classes to use for tab group
        const tabGroupClasses = classnames(
            'fd-tabs',
            className
        );
        return (
            <React.Fragment>
                <ul {...rest} className={tabGroupClasses}
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
    selectedId: '1',
    onTabClick: () => { }
};

TabGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    selectedId: PropTypes.string,
    onTabClick: PropTypes.func
};

TabGroup.propDescriptions = {
    children: 'One or more `Tab` components to render within the component.',
    selectedId: 'The `id` of the selected `Tab`.',
    onTabClick: 'Callback function when the user clicks on a tab'
};
