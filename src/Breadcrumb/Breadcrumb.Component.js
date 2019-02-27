import { Breadcrumb } from '../';
import { Link } from 'react-router-dom';
import path from 'path';
import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const BreadcrumbComponent = () => {
    const breadcrumbHrefCode = `<Breadcrumb>
    <Breadcrumb.Item name='Link Text' url='#' />
    <Breadcrumb.Item name='Link Text' url='#' />
    <Breadcrumb.Item name='Link Text' url='#' />
</Breadcrumb>`;

    const breadcrumbLinkCode = `<Breadcrumb>
    <Breadcrumb.Item>
        <Link to='#'>Link Text</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
        <Link to='#'>Link Text</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
        <Link to='#'>Link Text</Link>
    </Breadcrumb.Item>
</Breadcrumb>`;

    return (
        <div>
            <Header>Breadcrumb</Header>
            <Description>
                The **Breadcrumb** allows users to see the current page and navigation path to that page. Users can navigate
                to previous levels in the path. When clicking on the current page, a dropdown allows users to access
                other pages at that same level.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './Breadcrumb')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './Breadcrumb')} />

            <Separator />

            <h2>Using url (href attribute)</h2>
            <DocsTile>
                <Breadcrumb>
                    <Breadcrumb.Item name='Link Text' url='#' />
                    <Breadcrumb.Item name='Link Text' url='#' />
                    <Breadcrumb.Item name='Link Text' url='#' />
                </Breadcrumb>
            </DocsTile>
            <DocsText>{breadcrumbHrefCode}</DocsText>

            <Separator />

            <h2>Using Link from React Router</h2>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{breadcrumbLinkCode}</DocsText>
        </div>
    );
};
