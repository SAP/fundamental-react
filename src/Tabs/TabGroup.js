import classnames from 'classnames';
import PropTypes from 'prop-types';
import { TabContent } from './_TabContent';
import withStyles from '../utils/WithStyles/WithStyles';
import React, { Component } from 'react';

class TabGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: props.selectedIndex
        };
    }

    static getDerivedStateFromProps(props, state) {
        const prevProps = state.prevProps || {};
        // Compare the incoming prop to previous prop
        const selectedIndex =
            prevProps.selectedIndex !== props.selectedIndex
                ? props.selectedIndex
                : state.selectedIndex;
        return {
            // Store the previous props in state
            prevProps: props,
            selectedIndex
        };
    }

    // set selected tab
    handleTabSelection = (event, index) => {
        event.preventDefault();
        this.setState({
            selectedIndex: index
        });

        this.props.onTabClick(event, index);
    };

    // clone Tab element
    cloneElement = (child, index) => {
        return (React.cloneElement(child, {
            onClick: this.handleTabSelection,
            selected: this.state.selectedIndex === index,
            index: index
        }));
    }

    // create tab list
    renderTabs = () => {
        return React.Children.toArray(this.props.children).map((child, index) => {
            return this.cloneElement(child, index);
        });
    };

    // create content to show below tab list
    renderContent = () => {
        return React.Children.toArray(this.props.children).map((child, index) => {
            return (
                <TabContent
                    {...child.props.tabContentProps}
                    key={index}
                    selected={this.state.selectedIndex === index}>
                    {child.props.children}
                </TabContent>);
        });
    };

    render() {
        const {
            children,
            className,
            disableStyles,
            selectedIndex,
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
    selectedIndex: 0,
    onTabClick: () => { }
};

TabGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    selectedIndex: PropTypes.number,
    tabGroupProps: PropTypes.object,
    onTabClick: PropTypes.func
};

TabGroup.propDescriptions = {
    children: 'One or more `Tab` components to render within the component.',
    selectedIndex: 'The index of the selected tab.',
    onTabClick: 'Callback function when the user clicks on a tab. Parameters passed to the function are `event` and `index`.'
};

export { TabGroup as __TabGroup };

export default withStyles(TabGroup, { cssFile: 'tabs' });
