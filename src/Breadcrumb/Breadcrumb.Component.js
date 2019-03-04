import { Breadcrumb } from '../';
import { Link } from 'react-router-dom';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const BreadcrumbComponent = () => {
    return (
        <ComponentPage
            description={`The **Breadcrumb** allows users to see the current page and navigation path to that page. Users can navigate
                to previous levels in the path. When clicking on the current page, a dropdown allows users to access
                other pages at that same level.`}
            sourceModulePath={path.join(__dirname, './Breadcrumb')}
            title='Breadcrumb'>

            <Example
                title='Using url (href attribute)'>
                <Breadcrumb>
                    <Breadcrumb.Item name='Link Text' url='#' />
                    <Breadcrumb.Item name='Link Text' url='#' />
                    <Breadcrumb.Item name='Link Text' url='#' />
                </Breadcrumb>
            </Example>

            <Example
                title='Using Link from React Router'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='#'>Link Text</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to='#'>Link Text</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to='#'>Link Text</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Example>

        </ComponentPage>
    );
};
