import React from 'react';
import { Button, Menu, Popover } from '../';
import { ComponentPage, Example } from '../_playground';

export const ContextualMenuComponent = () => {
    return (
        <ComponentPage
            description={`The contextual menu component is an opinionated composition of the **Popover** and **Menu** components with
                the use of a styled button (**Button** component). A More icon (\`glyph="vertical-grip"\`) or the word, "More",
                is used to indicate there are more options than room to display them. On click or tap, a contextual menu
                opens.\n\nThis component is completely composed from other components CSS and doesn’t have any of its own.`}
            title='Contextual Menu'>

            <Example
                centered
                title='With Icon'>
                <Popover
                    body={
                        <Menu>
                            <Menu.List>
                                <Menu.Item url='#'>Option 1</Menu.Item>
                                <Menu.Item url='#'>Option 2</Menu.Item>
                                <Menu.Item url='#'>Option 3</Menu.Item>
                                <Menu.Item url='#'>Option 4</Menu.Item>
                            </Menu.List>
                        </Menu>
                    }
                    control={<Button glyph='vertical-grip' option='light' />}
                    noArrow />
            </Example>

            <Example
                centered
                title='With Text Button'>
                <Popover
                    body={
                        <Menu>
                            <Menu.List>
                                <Menu.Item url='#'>Option 1</Menu.Item>
                                <Menu.Item url='#'>Option 2</Menu.Item>
                                <Menu.Item url='#'>Option 3</Menu.Item>
                                <Menu.Item url='#'>Option 4</Menu.Item>
                            </Menu.List>
                        </Menu>
                    }
                    control={<Button>More</Button>}
                    noArrow />

                <Popover
                    body={
                        <Menu>
                            <Menu.List>
                                <Menu.Item url='#'>Option 1</Menu.Item>
                                <Menu.Item url='#'>Option 2</Menu.Item>
                                <Menu.Item url='#'>Option 3</Menu.Item>
                                <Menu.Item url='#'>Option 4</Menu.Item>
                            </Menu.List>
                        </Menu>
                    }
                    control={<Button option='light'>More</Button>}
                    noArrow />
            </Example>

        </ComponentPage>
    );
};
