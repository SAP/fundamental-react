import React from 'react';
import { ActionBar, ActionBarActions, ActionBarBack, ActionBarHeader, Button, Menu, MenuItem, MenuList, Popover } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const ActionBarComponent = () => {
    const actionBarBackBtnCode = `<ActionBar>
    <ActionBarBack onClick={clickBackBtn}/>
    <ActionBarHeader title={'Page Title'} description={'Action Bar Description'} />
    <ActionBarActions>
        <Button>Button</Button>
        <Button option="emphasized">Button</Button>
    </ActionBarActions>
</ActionBar>

const clickBackBtn = () => {
    alert("You clicked me!");
}`;

    const actionBarNoBackBtnCode = `<ActionBar>
    <ActionBarHeader title={'Page Title'} description={'Action Bar Description'} />
    <ActionBarActions>
        <Button>Button</Button>
        <Button option="emphasized">Button</Button>
    </ActionBarActions>
</ActionBar>`;

    const actionBarContextualCode = `<ActionBar>
    <ActionBarHeader title={'Page Title'} description={'Action Bar Description'} />
    <ActionBarActions>
        <Popover
            control={<Button option="light" glyph="vertical-grip" />}
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url="/">Option 1</MenuItem>
                        <MenuItem url="/">Option 2</MenuItem>
                        <MenuItem url="/">Option 3</MenuItem>
                        <MenuItem url="/">Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
        />
    </ActionBarActions>
</ActionBar>`;

    const mobileActionBarCode = `<ActionBar mobile={true}>
    <ActionBarBack />
    <ActionBarHeader title={'Action Bar with description and back button'} />
    <ActionBarActions>
        <Popover
            control={<Button option="light" glyph="vertical-grip" />}
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url="/">Option 1</MenuItem>
                        <MenuItem url="/">Option 2</MenuItem>
                        <MenuItem url="/">Option 3</MenuItem>
                        <MenuItem url="/">Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
        />
    </ActionBarActions>
</ActionBar>`;

    const mobileCustomWidthActionBarCode = `<ActionBar mobile={true} width="768px">
    <ActionBarBack />
    <ActionBarHeader title={'Action Bar with description and back button'} />
    <ActionBarActions>
        <Popover
            control={<Button type="secondary" glyph="vertical-grip" />}
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url="/">Option 1</MenuItem>
                        <MenuItem url="/">Option 2</MenuItem>
                        <MenuItem url="/">Option 3</MenuItem>
                        <MenuItem url="/">Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
        />
    </ActionBarActions>
</ActionBar>`;

    const clickBackBtn = () => {
        alert('You clicked me!');
    };

    return (
        <div>
            <Header>Action Bar</Header>
            <Description>
                The Action Bar is located at the top of the page and is used for Page title and Main Actions for the
                page.
            </Description>
            <Import module='ActionBar' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                properties={[
                    { name: 'mobile', description: 'bool - set to "true" for mobile view of the Action Bar.' },
                    {
                        name: 'width',
                        description: 'string - the width of the Action Bar in mobile view. The default is 319px.'
                    },
                    {
                        name: 'title',
                        description: 'string - the title of the action bar. Specified in ActionBarHeader.'
                    },
                    {
                        name: 'description',
                        description: 'string - Action bar description. Specified in ActionBarHeader.'
                    },
                    {
                        name: 'onClick',
                        description: 'func - The function that is executed when the back button is clicked.'
                    }
                ]}
                type='Inputs' />

            <Separator />

            <h2>Action bar with back button, description and action buttons.</h2>
            <DocsTile>
                <ActionBar>
                    <ActionBarBack onClick={clickBackBtn} />
                    <ActionBarHeader description={'Action Bar Description'} title={'Page Title'} />
                    <ActionBarActions>
                        <Button>Button</Button>
                        <Button option='emphasized'>Button</Button>
                    </ActionBarActions>
                </ActionBar>
            </DocsTile>
            <DocsText>{actionBarBackBtnCode}</DocsText>

            <Separator />

            <h2>Action bar with no Back button</h2>
            <DocsTile>
                <ActionBar>
                    <ActionBarHeader description={'Action Bar Description'} title={'Page Title'} />
                    <ActionBarActions>
                        <Button>Button</Button>
                        <Button option='emphasized'>Button</Button>
                    </ActionBarActions>
                </ActionBar>
            </DocsTile>
            <DocsText>{actionBarNoBackBtnCode}</DocsText>

            <Separator />

            <h2>Several Main Actions in a Contextual Menu</h2>
            <Description>
                When there are several main actions for a page, consider displaying them under a contextual menu. This
                allows the user to look in the same position they are used to but avoids cluttering the action bar with
                more than 3-4 actions. This also works well for a responsive/adaptive application.
            </Description>
            <DocsTile>
                <ActionBar>
                    <ActionBarHeader description={'Action Bar Description'} title={'Page Title'} />
                    <ActionBarActions>
                        <Popover
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            }
                            control={<Button glyph='vertical-grip' option='light' />} />
                    </ActionBarActions>
                </ActionBar>
            </DocsTile>
            <DocsText>{actionBarContextualCode}</DocsText>

            <Separator />

            <h2>Action bar mobile view</h2>
            <DocsTile>
                <ActionBar mobile>
                    <ActionBarBack />
                    <ActionBarHeader
                        description={'Action Bar Description'}
                        title={'Action Bar with description and back button'} />
                    <ActionBarActions>
                        <Popover
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            }
                            control={<Button glyph='vertical-grip' option='light' />} />
                    </ActionBarActions>
                </ActionBar>
            </DocsTile>
            <DocsText>{mobileActionBarCode}</DocsText>

            <Separator />

            <h2>Action bar mobile view with custom width</h2>
            <DocsTile>
                <ActionBar mobile width='768px'>
                    <ActionBarBack />
                    <ActionBarHeader
                        description={'Action Bar Description'}
                        title={'Action Bar with description and back button'} />
                    <ActionBarActions>
                        <Popover
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url='/'>Option 1</MenuItem>
                                        <MenuItem url='/'>Option 2</MenuItem>
                                        <MenuItem url='/'>Option 3</MenuItem>
                                        <MenuItem url='/'>Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            }
                            control={<Button glyph='vertical-grip' option='light' />} />
                    </ActionBarActions>
                </ActionBar>
            </DocsTile>
            <DocsText>{mobileCustomWidthActionBarCode}</DocsText>

            <Separator />
        </div>
    );
};
