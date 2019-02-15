import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Tab } from './Tab';
import { TabContent } from './TabContent';
import React, { useState } from 'react';

export const TabGroup = (props) => {
    const { children, className, selectedId, tabLinkProps, tabContentProps, ...tabGroupProps } = props;
    const [selectedTab, setSelectedTab] = useState(selectedId);

    // css classes to use for tab group
    const tabGroupClasses = classnames(
        'fd-tabs',
        className
    );

    // set selected tab
    const handleTabSelection = (event, id) => {
        event.preventDefault();
        setSelectedTab(id);
    };

    // create tab list
    const renderTabs = () => {
        return React.Children.map(children, (child) => {
            return (
                <li {...tabLinkProps}
                    className='fd-tabs__item'
                    key={child.props.id}>
                    <Tab {...child.props} onClick={handleTabSelection}
                        selected={selectedTab === child.props.id} />
                </li >);
        });
    };

    // create content to show below tab list
    const renderContent = () => {
        return React.Children.map(children, (child) => {
            return (
                <TabContent
                    {...tabContentProps}
                    selected={selectedTab === child.props.id}>
                    {child.props.children}
                </TabContent>);
        });
    };

    return (
        <React.Fragment>
            <ul {...tabGroupProps} className={tabGroupClasses}
                role='tablist'>
                {renderTabs()}
            </ul>
            {renderContent()}
        </React.Fragment>
    );
};
TabGroup.displayName = 'TabGroup';

TabGroup.defaultProps = {
    selectedId: '1'
};

TabGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    selectedId: PropTypes.string,
    tabContentProps: PropTypes.object,
    tabGroupProps: PropTypes.object,
    tabLinkProps: PropTypes.object
};

TabGroup.propDescriptions = {
    children: 'One or more `Tab` components to render within the component.',
    selectedId: 'The `id` of the selected `Tab`.',
    tabContentProps: 'Additional props to be spread to the tab content\'s <div> element.',
    tabGroupProps: 'Additional props to be spread to the tab group.',
    tabLinkProps: 'Additional props to be spread to the tab\'s <li> element.'
};
