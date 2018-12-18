import * as React from 'react';
import { ReactNode } from 'react';
import { TabProps } from './Tab';
import { TabKey } from './Tabs';

export interface TabHeaderProps {
    tabs: React.ReactElement<TabProps>[];
    selectedTabKey?: string;
    onSelectTab(key: TabKey): any;
}

export interface TabHeaderItemProps {
    tabKey: string;
    title: ReactNode;
    active: boolean;
    disabled: boolean;
    onSelectTab(key: TabKey): any;
}

export class TabHeaderItem extends React.Component<TabHeaderItemProps> {
    render() {
        const { disabled, title, active } = this.props;
        const classes = ['fd-tabs__link'];
        if (active) {
            classes.push('is-selected');
        }
        return (
            <li className={'fd-tabs__item'}>
                <a
                    className={classes.reduce((a, b) => `${a} ${b}`, '')}
                    aria-disabled={disabled}
                    onClick={this.onClicked}
                >
                    {title}
                </a>
            </li>
        )
    }

    private onClicked = () => {
        const { disabled, tabKey, onSelectTab } = this.props;
        if (!disabled) {
            onSelectTab(tabKey);
        }
    }
}

export const TabHeader = (props: TabHeaderProps) => {
    return (
        <ul className="fd-tabs" role={'tablist'}>
            {
                props.tabs.map(tab => (
                    <TabHeaderItem
                        key={tab.key || undefined}
                        tabKey={String(tab.key)}
                        title={tab.props.title}
                        active={tab.key === props.selectedTabKey}
                        onSelectTab={props.onSelectTab}
                        disabled={!!tab.props.disabled}
                    />
                ))
            }
        </ul>
    );
}