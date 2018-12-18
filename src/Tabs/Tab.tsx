import * as React from 'react';
import { ReactNode } from 'react';
import { TabKey } from "./Tabs";
import { StatelessComponent } from 'enzyme';

export interface TabProps {
    /**
     * A unique (per Tabs component) identifier for the tab.
     */
    key: TabKey;

    /**
     * The content to render in the tab title
     */
    title: ReactNode;

    /**
     * If the tab is disabled. If disabled, it cannot be activated.
     */
    disabled?: boolean;

    /**
     * The tab content
     */
    children?: ReactNode;
}

/** 
 * A Tab to render within the Tabs component.
 */
export const Tab: StatelessComponent<TabProps> = (props: TabProps) => (
    <React.Fragment>
        {props.children || null}
    </React.Fragment>
);