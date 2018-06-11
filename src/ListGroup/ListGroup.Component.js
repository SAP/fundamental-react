import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemActions, ListGroupItemCheckbox } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties, Playground } from '../'
import { Button } from '../'

export const ListGroupComponent = () => {
    const simpleListCode = `<ListGroup>
    <ListGroupItem><a style={{cursor: 'pointer'}}>List item 1</a></ListGroupItem>
    <ListGroupItem>List item 2</ListGroupItem>
    <ListGroupItem><a style={{cursor: 'pointer'}}>List item3</a></ListGroupItem>
    <ListGroupItem>List item 4</ListGroupItem>
</ListGroup>`

    const actionsListCode = `<ListGroup>
    <ListGroupItem>List item 1
        <ListGroupItemActions>
            <Button type="secondary" glyph="edit" />
        </ListGroupItemActions>
    </ListGroupItem>
    <ListGroupItem>List item 2
        <ListGroupItemActions>
            <Button type="secondary" glyph="edit" />
        </ListGroupItemActions>
    </ListGroupItem>
    <ListGroupItem>List item 3
        <ListGroupItemActions>
            <Button type="secondary" glyph="edit" />
        </ListGroupItemActions>
    </ListGroupItem>
    <ListGroupItem>List item 4
        <ListGroupItemActions>
            <Button type="secondary" glyph="edit" />
        </ListGroupItemActions>
    </ListGroupItem>
</ListGroup>`

    const checkboxListCode = `<ListGroup>
    <ListGroupItem><ListGroupItemCheckbox>List item 1</ListGroupItemCheckbox></ListGroupItem>
    <ListGroupItem><ListGroupItemCheckbox>List item 2</ListGroupItemCheckbox></ListGroupItem>
    <ListGroupItem><ListGroupItemCheckbox>List item 3</ListGroupItemCheckbox></ListGroupItem>
    <ListGroupItem><ListGroupItemCheckbox>List item 4</ListGroupItemCheckbox></ListGroupItem>
</ListGroup>`


    return (
        <div>

            <Header>List Group</Header>
            <Description>Lists and tables are similar as both usually contain a vertical list of data, but lists generally contain basic data and tables tend to hold more complex data. If the list is a complex hierarchy, it is best to use a tree.
            </Description>
            <Import module="ListGroup, ListGroupItem, ListGroupItemActions, ListGroupItemCheckbox" path="/react-fundamental/src/" />

            <Separator />

            <h2>Simple List</h2>
            <Description>A link can be used to allow the user to access more details about the item.</Description>
            <DocsTile>
                <ListGroup>
                    <ListGroupItem><a style={{cursor: 'pointer'}}>List item 1</a></ListGroupItem>
                    <ListGroupItem>List item 2</ListGroupItem>
                    <ListGroupItem><a style={{cursor: 'pointer'}}>List item3</a></ListGroupItem>
                    <ListGroupItem>List item 4</ListGroupItem>
                </ListGroup>
            </DocsTile>
            <DocsText>{simpleListCode}</DocsText>

            <Separator />

            <h2>Lists with Action</h2>
            <Description>The List item can contain quick actions.</Description>
            <DocsTile>
                <ListGroup>
                    <ListGroupItem>List item 1
                        <ListGroupItemActions>
                            <Button type="secondary" glyph="edit" />
                        </ListGroupItemActions>
                    </ListGroupItem>
                    <ListGroupItem>List item 2
                        <ListGroupItemActions>
                            <Button type="secondary" glyph="edit" />
                        </ListGroupItemActions>
                    </ListGroupItem>
                    <ListGroupItem>List item 3
                        <ListGroupItemActions>
                            <Button type="secondary" glyph="edit" />
                        </ListGroupItemActions>
                    </ListGroupItem>
                    <ListGroupItem>List item 4
                        <ListGroupItemActions>
                            <Button type="secondary" glyph="edit" />
                        </ListGroupItemActions>
                    </ListGroupItem>
                </ListGroup>
            </DocsTile>
            <DocsText>{actionsListCode}</DocsText>

            <Separator />

            <h2>List with Checkboxes</h2>
            <Description>Checkboxes can be include on the left of each line for such purposes as bulk actions.</Description>
            <DocsTile>
                 <ListGroup>
                    <ListGroupItem><ListGroupItemCheckbox>List item 1</ListGroupItemCheckbox></ListGroupItem>
                    <ListGroupItem><ListGroupItemCheckbox>List item 2</ListGroupItemCheckbox></ListGroupItem>
                    <ListGroupItem><ListGroupItemCheckbox>List item 3</ListGroupItemCheckbox></ListGroupItem>
                    <ListGroupItem><ListGroupItemCheckbox>List item 4</ListGroupItemCheckbox></ListGroupItem>
                </ListGroup>
            </DocsTile>
            <DocsText>{checkboxListCode}</DocsText>

            <Separator />

        </div>
    );
}