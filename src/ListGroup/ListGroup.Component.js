import path from 'path';
import React from 'react';
import { Button, ListGroup } from '../';
import { ComponentPage, Example } from '../_playground';

export const ListGroupComponent = () => {
    return (
        <ComponentPage
            description={`Lists and tables are similar as both usually contain a vertical list of data,
                but lists generally contain basic data and tables tend to hold more complex data.
                If the list is a complex hierarchy, it is best to use a **Tree**.`}
            sourceModulePath={path.join(__dirname, './ListGroup')}
            title='List Group'>

            <Example
                description='A link can be used to allow the user to access more details about the item.'
                title='Simple List'>
                <ListGroup>
                    <ListGroup.Item><a style={{ cursor: 'pointer' }}>List item 1</a></ListGroup.Item>
                    <ListGroup.Item>List item 2</ListGroup.Item>
                    <ListGroup.Item><a style={{ cursor: 'pointer' }}>List item 3</a></ListGroup.Item>
                    <ListGroup.Item>List item 4</ListGroup.Item>
                </ListGroup>
            </Example>

            <Example
                description='The List item can contain quick actions.'
                title='List with Actions'>
                <ListGroup>
                    <ListGroup.Item>List item 1
                        <ListGroup.ItemActions>
                            <Button glyph='edit' option='light' />
                        </ListGroup.ItemActions>
                    </ListGroup.Item>
                    <ListGroup.Item>List item 2
                        <ListGroup.ItemActions>
                            <Button glyph='edit' option='light' />
                        </ListGroup.ItemActions>
                    </ListGroup.Item>
                    <ListGroup.Item>List item 3
                        <ListGroup.ItemActions>
                            <Button glyph='edit' option='light' />
                        </ListGroup.ItemActions>
                    </ListGroup.Item>
                    <ListGroup.Item>List item 4
                        <ListGroup.ItemActions>
                            <Button glyph='edit' option='light' />
                        </ListGroup.ItemActions>
                    </ListGroup.Item>
                </ListGroup>
            </Example>

            <Example
                description='Checkboxes can be include on the left of each line for such purposes as bulk actions.'
                title='List with Checkboxes'>
                <ListGroup>
                    <ListGroup.Item><ListGroup.ItemCheckbox>List item 1</ListGroup.ItemCheckbox></ListGroup.Item>
                    <ListGroup.Item><ListGroup.ItemCheckbox>List item 2</ListGroup.ItemCheckbox></ListGroup.Item>
                    <ListGroup.Item><ListGroup.ItemCheckbox>List item 3</ListGroup.ItemCheckbox></ListGroup.Item>
                    <ListGroup.Item><ListGroup.ItemCheckbox>List item 4</ListGroup.ItemCheckbox></ListGroup.Item>
                </ListGroup>
            </Example>
        </ComponentPage>
    );
};
