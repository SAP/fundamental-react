import { Icon } from '../';
import { listOfIcons } from '../utils/listOfIcons';
import path from 'path';
import React from 'react';
import { ComponentPage, Example, Playground, Separator } from '../_playground';

export const IconComponent = () => {
    let icons = (
        <div className='fd-doc__margin--icon'>
            {listOfIcons.map((icon, index) => {
                return (
                    <div className='demo-icon-wrapper' key={index}>
                        <Icon glyph={icon} size='xl' />
                        <h5>sap-icon--{icon}</h5>
                    </div>
                );
            })}
        </div>
    );

    return (
        <ComponentPage
            description={`Icons are used throughout the UI to save space, allow for visual clarity
                and focus, and for fun. Icons can be used adaptively if desired, but at
                this point they are used more as visual elements within other
                components.`}
            sourceModulePath={path.join(__dirname, './Icon')}
            title='Icon'>

            <Example
                centered
                title='Sizes'>
                <div className='fd-doc__margin--icon'>
                    <Icon glyph='cart' size='s' />
                    <Icon glyph='cart' />
                    <Icon glyph='cart' size='m' />
                    <Icon glyph='cart' size='l' />
                    <Icon glyph='cart' size='xl' />
                </div>
            </Example>

            <Example
                centered
                omitCodeSample
                title='Available Icons'>
                {icons}
            </Example>

            <Separator />

            <Playground
                component='icon'
                schema={[
                    {
                        attribute: 'glyph',
                        typeOfAttribute: 'string',
                        'enum': listOfIcons
                    },
                    {
                        attribute: 'size',
                        typeOfAttribute: 'string',
                        'enum': ['s', '', 'm', 'l', 'xl']
                    }
                ]}>
                <Icon glyph='cart' size='s' />
            </Playground>

        </ComponentPage>
    );
};
