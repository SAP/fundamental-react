import * as React from 'react';
import { ReactElement } from 'react';
import { TabProps } from './Tab';
import { TabHeader } from './TabHeader';

export type TabKey = string;

export interface TabsProps {
    /** 
     * Set the active tab.
     * If the active tab isn't set externally the component 
     * will behave as an uncontrolled component.
     */
    activeKey?: TabKey;
    /**
     * The content of the tabs component.
     * Only Tab elements are allowed as children.
     */
    children?: ReactElement<TabProps>[] | ReactElement<TabProps>

    /**
     * Callback that is invoked whenever the active tab changes.
     * @param selectedKey The newly selected key.
     */
    onChange?(selectedKey: TabKey, previousSelectedKey?: TabKey): any;
}

interface TabsState {
    activeKey?: TabKey;
}

/**
 * Component that renders react-fundamental tabs.
 * It can either be used as a controlled component (by passing the active key as props and handling the callback)
 * or as an uncontrolled component (in which case the state is managed internal to the component).
 * 
 * Not implemented yet:
 *  * Overflow display (if the number of tabs exceeds the size of the tab container)
 */
export class Tabs extends React.PureComponent<TabsProps, TabsState> {
    constructor(props: TabsProps) {
        super(props);
        // If no active key is passed in props, set the key of the first child as active key.
        this.state = {
            activeKey: props.activeKey || (this.childrenAsArray(props.children)[0] || {})['key'] as any
        }
    }

    render() {
        return (
            <React.Fragment>
                <TabHeader
                    selectedTabKey={this.selectedTab()}
                    tabs={this.childrenAsArray()}
                    onSelectTab={this.onTabSelected}
                />
                <div className="fd-tabs__panel">
                    {this.activeTabContent()}
                </div>
            </React.Fragment>

        );
    }

    private childrenAsArray = (
        children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps> | undefined = this.props.children
    ): ReactElement<TabProps>[] => {

        if (Array.isArray(children)) {
            return children;
        }
        if (children) {
            return [children];
        }
        return [];
    };

    private selectedTab: () => (TabKey | undefined) = () => {
        if (this.props.activeKey !== undefined) {
            return this.props.activeKey;
        }
        return this.state.activeKey;
    };
    private activeTabContent = () => {
        return this.childrenAsArray()
            .filter(child => (child as any).key === this.selectedTab()) || null;
    }

    private onTabSelected = (key: TabKey) => {
        if (this.props.onChange) {
            this.props.onChange(key, this.selectedTab());
        }
        this.setState({
            activeKey: key
        });
    }
}

