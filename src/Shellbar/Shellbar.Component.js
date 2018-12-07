import React from 'react';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '..';
import {
    Button,
    Popover,
    Menu,
    MenuList,
    MenuItem,
    Identifier,
    Shellbar,
    ShellbarLogo,
    ShellbarTitle,
    ProductMenu,
    ProductMenuControl,
    ShellbarSubtitle,
    ShellbarAction,
    UserMenu,
    UserMenuControl,
    ProductSwitcher,
    ProductSwitcherBody,
    ProductSwitcherProductIcon,
    ProductSwitcherProductTitle
} from '..';
var images = require.context('../../assets', true);

export const ShellbarComponent = () => {
    const shellbarExampleCode = ``;

    const applicationList = [
        { name: 'Application A' },
        { name: 'Application B' },
        { name: 'Application C' },
        { name: 'Application D' }
    ];

    const productSwitcherList = [
        { name: 'Fiori Home', imagePath: images('./01.png') },
        { name: 'S/4 HANA Cloud', imagePath: images('./02.png') },
        { name: 'Analytics Cloud', imagePath: images('./03.png') },
        { name: 'Ariba', imagePath: images('./04.png') },
        { name: 'SuccessFactors', imagePath: images('./05.png') },
        { name: 'Commerce Cloud', imagePath: images('./06.png') },
        { name: 'Gigya', imagePath: images('./07.png') },
        { name: 'Callidus Cloud', imagePath: images('./08.png') },
        { name: 'Fieldglass', imagePath: images('./09.png') },
        { name: 'Concur', imagePath: images('./10.png') },
        { name: 'Cloud for Customer', imagePath: images('./11.png') },
        { name: 'Cloud Portal', imagePath: images('./12.png') }
    ];

    return (
        <div>
            <Header>Shellbar</Header>
            <Description />
            <Import module="Shellbar" path="/fundamental-react/src/" />

            <Separator />

            <Properties
                type="Inputs"
                properties={[
                    {
                        name: '',
                        description: ''
                    }
                ]}
            />

            <Separator />

            <DocsTile>
                <Shellbar
                    logo={
                        <ShellbarLogo>
                            <img
                                src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png"
                                srcset="//unpkg.com/fiori-fundamentals/dist/images/sap-logo@2x.png 1x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@3x.png 2x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@4x.png 3x"
                                alt="SAP"
                            />
                        </ShellbarLogo>
                    }
                    product={
                        <ProductMenu>
                            <Popover
                                alignment="right"
                                control={<ProductMenuControl>Corporate Portal</ProductMenuControl>}
                                body={
                                    <Menu>
                                        <MenuList>
                                            {applicationList.map(item => {
                                                return <MenuItem url="/">{item.name}</MenuItem>;
                                            })}
                                        </MenuList>
                                    </Menu>
                                }
                            />
                        </ProductMenu>
                    }
                    subtitle={<ShellbarSubtitle>Subtitle</ShellbarSubtitle>}
                    copilot
                    actions={
                        <React.Fragment>
                            <ShellbarAction collapsible>
                                <Button option="shell" glyph="bell">
                                    <span class="fd-counter fd-counter--notification" aria-label="Unread count">
                                        25
                                    </span>
                                </Button>
                            </ShellbarAction>
                            <ShellbarAction collapsible>
                                <Button option="shell" glyph="pool" />
                            </ShellbarAction>
                            <ShellbarAction showAlways>
                                <UserMenu>
                                    <Popover
                                        alignment="right"
                                        control={
                                            <UserMenuControl>
                                                <Identifier size="s" color={1} modifier="circle">
                                                    WW
                                                </Identifier>
                                            </UserMenuControl>
                                        }
                                        body={
                                            <Menu>
                                                <MenuList>
                                                    <MenuItem url="/">Settings</MenuItem>
                                                    <MenuItem url="/">Sign Out</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        }
                                    />
                                </UserMenu>
                            </ShellbarAction>
                            <ShellbarAction collapsible>
                                <ProductSwitcher>
                                    <Popover
                                        alignment="right"
                                        control={<Button option="shell" glyph="grid" />}
                                        body={
                                            <ProductSwitcherBody>
                                                {productSwitcherList.map(product => {
                                                    return (
                                                        <li>
                                                            <ProductSwitcherProductIcon>
                                                                <img src={product.imagePath} />
                                                            </ProductSwitcherProductIcon>
                                                            <ProductSwitcherProductTitle>
                                                                {product.name}
                                                            </ProductSwitcherProductTitle>
                                                        </li>
                                                    );
                                                })}
                                            </ProductSwitcherBody>
                                        }
                                    />
                                </ProductSwitcher>
                            </ShellbarAction>
                        </React.Fragment>
                    }
                />
            </DocsTile>
            <DocsText>{shellbarExampleCode}</DocsText>

            <Separator />
        </div>
    );
};
