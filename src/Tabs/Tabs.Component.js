import React from 'react'
import { Tabs, TabComponent} from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties, Playground } from '../'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


export const TabsComponent = () => {
    const tabscomponentCode= `
    <Tabs>
    <TabPanelComponent ids={[{id : '1', url:'#', name: 'Tab 1', content: 'Hello world', disabled: false},
                             {id : '2', url:'#', name: 'Tab 2', content: 'Hello world 2', disabled: false},
                             {id : '3', url:'#', name: 'Tab 3', content: 'Hello world 3', disabled: true}]}>
    </TabPanelComponent>
    </Tabs>`

    return(<div>
        <Header>Tabs</Header>
        <Description>Tabs are based on a folder metaphor and used to separate content into different sections. Tabs should be ordered to create a visual hierarchy based on priority.</Description>
        <Import module="Tabs, TabsComponent" path="/react-fundamental/src/"/> <Separator/>
        <Properties type="Inputs" properties=
            {[
                {name: 'id', description: 'id of the tab'}, 
                {name: 'name', description: 'name of the tab'}, 
                {name: 'content', description: 'the content to display when the tab is pressed'}, 
                {name: 'disabled', description: 'disable the tab based on true or false'}, 

            ]}/>
        <DocsTile>
            <Tabs>
                <TabComponent ids={[     {id : '1', url:'#', name: 'Tab 1', content: 'Hello world', disabled: false},
                                         {id : '2', url:'#', name: 'Tab 2', content: 'Hello world 2', disabled: false},
                                         {id : '3', url:'#', name: 'Tab 3', content: 'Hello world 3', disabled: true}]}>
                </TabComponent>
            </Tabs>
        </DocsTile>
        <DocsText>{tabscomponentCode}</DocsText>
        </div>
    );
}