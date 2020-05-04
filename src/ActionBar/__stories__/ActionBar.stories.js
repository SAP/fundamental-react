/* eslint-disable react/no-multi-comp */
import ActionBar from '../ActionBar';
import Button from '../../Button/Button';
import Menu from '../../Menu/Menu';
import Popover from '../../Popover/Popover';
import React from 'react';
import { number, text } from '@storybook/addon-knobs';

export default {
    title: 'Component API/ActionBar',
    component: ActionBar
};

export const primary = () => (
    <ActionBar
        actions={(
            <>
                <Button>Button</Button>
                <Button option='emphasized'>Button</Button>
            </>
        )}
        description={'Action Bar Description'}
        onBackClick={() => {}}
        title={'Page Title'} />
);


export const noBackButton = () => (
    <ActionBar
        actions={(<><Button>Button</Button>
            <Button option='emphasized'>Button</Button></>
        )}
        description='Action Bar Description'
        title='Page Title' />
);

noBackButton.story = {
    name: 'With No Back Button',
    parameters: {
        docs: {
            storyDescription: 'ActionBar with no back button'
        }
    }
};

export const contextualMenu = () => (
    <ActionBar
        actions={<Popover
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url='#'>Option 1</Menu.Item>
                        <Menu.Item url='#'>Option 2</Menu.Item>
                        <Menu.Item url='#'>Option 3</Menu.Item>
                        <Menu.Item url='#'>Option 4</Menu.Item>
                    </Menu.List>
                </Menu>}
            control={<Button glyph='vertical-grip' option='transparent' />}
            placement='bottom-end' />}
        description='Action Bar Description'
        title='Page Title' />
);

contextualMenu.story = {
    name: 'With a ContextualMenu',
    parameters: {
        docs: {
            storyDescription: `When there are several main actions for a page, consider displaying them under a contextual menu. This
            allows the user to look in the same position they are used to but avoids cluttering the action bar with
            more than 3-4 actions. This also works well for a responsive/adaptive application.`
        }
    }
};

export const dev = () => (
    <ActionBar
        actions={(<><Button>Button</Button>
            <Button option='emphasized'>Button</Button></>
        )}
        description={text('description', 'Action Bar description')}
        headingLevel={number('headingLevel', 2, {
            range: true,
            min: 2,
            max: 6,
            step: 1
        })}
        onBackClick={() => {}}
        title={text('title', 'Page Title')} />
);

dev.story = {
    parameters: { docs: { disable: true } }
};

export const noDescription = () => (
    <ActionBar
        actions={(<><Button>Button</Button>
            <Button option='emphasized'>Button</Button></>
        )}
        title='Page Title' />
);

noDescription.story = {
    parameters: { docs: { disable: true } }
};

export const noActions = () => (
    <ActionBar title='Page Title' />
);

noActions.story = {
    parameters: { docs: { disable: true } }
};
