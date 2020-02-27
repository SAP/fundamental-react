import path from 'path';
import React from 'react';
import { Button, List } from '..';
import { ComponentPage, Example } from '../_playground';

export const ListComponent = () => {
    return (
        <ComponentPage
            description={`Lists and tables are similar as both usually contain a vertical list of data,
                but lists generally contain basic data and tables tend to hold more complex data.
                If the list is a complex hierarchy, it is best to use a **Tree**.`}
            sourceModulePath={path.join(__dirname, './List')}
            title='List Group'>

            <Example
                description='A link can be used to allow the user to access more details about the item.'
                title='Simple List'>
                <List>
                    <List.Item><a style={{ cursor: 'pointer' }}>List item 1</a></List.Item>
                    <List.Item>List item 2</List.Item>
                    <List.Item><a style={{ cursor: 'pointer' }}>List item 3</a></List.Item>
                    <List.Item>List item 4</List.Item>
                </List>
            </Example>

            <Example
                description='The List item can contain quick actions.'
                title='List with Actions'>
                <List>
                    <List.Item>List item 1
                        <List.ItemActions>
                            <Button glyph='edit' option='light' />
                        </List.ItemActions>
                    </List.Item>
                    <List.Item>List item 2
                        <List.ItemActions>
                            <Button glyph='edit' option='light' />
                        </List.ItemActions>
                    </List.Item>
                    <List.Item>List item 3
                        <List.ItemActions>
                            <Button glyph='edit' option='light' />
                        </List.ItemActions>
                    </List.Item>
                    <List.Item>List item 4
                        <List.ItemActions>
                            <Button glyph='edit' option='light' />
                        </List.ItemActions>
                    </List.Item>
                </List>
            </Example>

            <Example
                description='Checkboxes can be include on the left of each line for such purposes as bulk actions.'
                title='List with Checkboxes'>
                <List>
                    <List.Item><List.ItemCheckbox>List item 1</List.ItemCheckbox></List.Item>
                    <List.Item><List.ItemCheckbox>List item 2</List.ItemCheckbox></List.Item>
                    <List.Item><List.ItemCheckbox>List item 3</List.ItemCheckbox></List.Item>
                    <List.Item><List.ItemCheckbox>List item 4</List.ItemCheckbox></List.Item>
                </List>
            </Example>
        </ComponentPage>
    );
};
