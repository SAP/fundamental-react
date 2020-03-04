import path from 'path';
import React from 'react';
import { ActionBar, Button, Menu, Popover } from '../';
import { ComponentPage, Example } from '../_playground';

export const ActionBarComponent = () => {
    const clickBackBtn = () => {
        alert('You clicked me!');
    };

    return (
        <ComponentPage
            description='The **Action Bar** is located at the top of the page and is used for page title and main actions for the page.'
            sourceModulePath={path.join(__dirname, './ActionBar')}
            title='Action Bar'>

            <Example
                title='Action bar with back button, description and action buttons'>
                <ActionBar
                    actions={(
                        <>
                            <Button>Button</Button>
                            <Button option='emphasized'>Button</Button>
                        </>
                    )}
                    description={'Action Bar Description'}
                    onBackClick={clickBackBtn}
                    title={'Page Title'} />
            </Example>

            <Example
                title='Action bar with no Back button'>
                <ActionBar
                    actions={(
                        <>
                            <Button>Button</Button>
                            <Button option='emphasized'>Button</Button>
                        </>
                    )}
                    description={'Action Bar Description'}
                    title={'Page Title'} />
            </Example>

            <Example
                description={`When there are several main actions for a page, consider displaying them under a contextual menu. This
                    allows the user to look in the same position they are used to but avoids cluttering the action bar with
                    more than 3-4 actions. This also works well for a responsive/adaptive application.`}
                title='Several Main Actions in a Contextual Menu'>
                <ActionBar
                    actions={(
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
                            control={<Button glyph='vertical-grip' option='transparent' />}
                            placement='bottom-end' />
                    )}
                    description={'Action Bar Description'}
                    title={'Page Title'} />
            </Example>

        </ComponentPage>
    );
};
