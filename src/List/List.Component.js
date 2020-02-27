import { List } from '..';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const ListComponent = () => {
    return (
        <ComponentPage
            description={`Lists and tables are similar as both usually contain a vertical list of data,
                but lists generally contain basic data and tables tend to hold more complex data.
                If the list is a complex hierarchy, it is best to use a **Tree**.`}
            sourceModulePath={path.join(__dirname, './List')}
            title='List'>

            <Example
                description='A link can be used to allow the user to access more details about the item.'
                title='Simple List'>
                <List>
                    <List.Item><a style={{ cursor: 'pointer' }}>List item 1</a></List.Item>
                    <List.Item>List item 2</List.Item>
                    <List.Item><a style={{ cursor: 'pointer' }}>List item 3</a></List.Item>
                    <List.Item>List item 4</List.Item>
                </List>
                <br />
                <List compact>
                    <List.Item>
                        <List.Text>List Item 1</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 2</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 3</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 4</List.Text>
                    </List.Item>
                </List>
            </Example>

            <Example
                title='List with Header and Footer'>
                <List>
                    <List.Header>List Header</List.Header>
                    <List.Item>
                        <List.Text>List Item 1</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 2</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 3</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 4</List.Text>
                    </List.Item>
                    <List.Footer>List Footer</List.Footer>
                </List>
            </Example>

            <Example
                title='List with No Borders'>
                <List noBorder>
                    <List.Header>List Header</List.Header>
                    <List.Item>
                        <List.Text>List Item 1</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 2</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 3</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 4</List.Text>
                    </List.Item>
                    <List.Footer>List Footer</List.Footer>
                </List>
            </Example>

            <Example
                title='Secondary Data'>
                <List>
                    <List.Header>List Header</List.Header>
                    <List.Item>
                        <List.Text>List Item 1</List.Text>
                        <List.Text secondary>Positive</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 2</List.Text>
                        <List.Text secondary>Negative</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 3</List.Text>
                        <List.Text secondary>Positive</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 4</List.Text>
                        <List.Text secondary>Negative</List.Text>
                    </List.Item>
                    <List.Footer>List Footer</List.Footer>
                </List>
            </Example>

            <Example
                title='List with Icons'>
                <List>
                    <List.Header>List Header</List.Header>
                    <List.Item>
                        <List.Icon glyph='cart' />
                        <List.Text>List Item 1</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Icon glyph='wrench' />
                        <List.Text>List Item 2</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Icon glyph='lightbulb' />
                        <List.Text>List Item 3</List.Text>
                    </List.Item>
                    <List.Item>
                        <List.Icon glyph='history' />
                        <List.Text>List Item 4</List.Text>
                    </List.Item>
                    <List.Footer>List Footer</List.Footer>
                </List>

                <br />

                <List>
                    <List.Header>List Header</List.Header>
                    <List.Item>
                        <List.Text>List Item 1</List.Text>
                        <List.Icon glyph='navigation-right-arrow' />
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 2</List.Text>
                        <List.Icon glyph='navigation-right-arrow' />
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 3</List.Text>
                        <List.Icon glyph='navigation-right-arrow' />
                    </List.Item>
                    <List.Item>
                        <List.Text>List Item 4</List.Text>
                        <List.Icon glyph='navigation-right-arrow' />
                    </List.Item>
                    <List.Footer>List Footer</List.Footer>
                </List>
            </Example>


        </ComponentPage>
    );
};
