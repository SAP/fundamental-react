import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import { TAB_SIZES } from '../utils/constants';
import TabContent from './_TabContent';
import withStyles from '../utils/withStyles';
import React, { Component } from 'react';
import styles from 'fundamental-styles/dist/tabs.css';

const classnames = classnamesBind.bind(styles);

/** A **TabGroup** is a collection of **Tab** components.  Each **Tab** is based on a folder
metaphor and is used to separate content into different sections.
They should be ordered to create a visual hierarchy based on priority. */
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
            cssNamespace,
            selectedIndex,
            size,
            tabGroupProps,
            onTabClick,
            ...rest } = this.props;

        // css classes to use for tab group
        const tabGroupClasses = classnames(
            `${cssNamespace}-tabs`,
            { [`${cssNamespace}-tabs--${size}`]: size },
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
    size: 'l',
    onTabClick: () => { }
};

TabGroup.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** The index of the selected tab */
    selectedIndex: PropTypes.number,
    /** Size of the component: 's',
    'm',
    'l',
    'xl',
    'xxl' */
    size: PropTypes.oneOf(TAB_SIZES),
    tabGroupProps: PropTypes.object,
    /**
     * Callback function; triggered when the user selects a tab by clicking on pressing `enter`.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @param {number} index - selected tab index.
     * @returns {void}
     * */
    onTabClick: PropTypes.func
};

export default withStyles(TabGroup);
