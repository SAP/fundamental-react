import { Link } from '..';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const LinkComponent = () => {
    return (
        <ComponentPage
            description='Use an **Link** component to display a link.'
            sourceModulePath={path.join(__dirname, './Link')}
            title='Link'>

            <Example
                centered
                title='States'>
                <React.Fragment>
                    <Link href='#'>Default Link</Link>
                    <Link disabled href='#'>Disabled Link</Link>
                </React.Fragment>
            </Example>
        </ComponentPage>
    );
};
