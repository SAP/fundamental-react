import { Link } from 'react-router-dom';
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const BreadcrumbComponent = () => {
    const breadcrumbHrefCode = `<Breadcrumb>
    <BreadcrumbItem name='Link Text' url='#' />
    <BreadcrumbItem name='Link Text' url='#' />
    <BreadcrumbItem name='Link Text' url='#' />
</Breadcrumb>`;

    const breadcrumbLinkCode = `<Breadcrumb>
    <BreadcrumbItem>
        <Link to='#'>Link Text</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
        <Link to='#'>Link Text</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
        <Link to='#'>Link Text</Link>
    </BreadcrumbItem>
</Breadcrumb>`;

    return (
        <div>
            <Header>Breadcrumb</Header>
            <Description>
                The **Breadcrumb** allows users to see the current page and navigation path to that page. Users can navigate
                to previous levels in the path. When clicking on the current page, a dropdown allows users to access
                other pages at that same level.
            </Description>
            <Import sourceModulePath={require.resolve('./Breadcrumb')} />

            <Separator />

            <Properties sourceModulePath={require.resolve('./Breadcrumb')} />

            <Separator />

            <h2>Using url (href attribute)</h2>
            <DocsTile>
                <Breadcrumb>
                    <BreadcrumbItem name='Link Text' url='#' />
                    <BreadcrumbItem name='Link Text' url='#' />
                    <BreadcrumbItem name='Link Text' url='#' />
                </Breadcrumb>
            </DocsTile>
            <DocsText>{breadcrumbHrefCode}</DocsText>

            <Separator />

            <h2>Using Link from React Router</h2>
            <DocsTile>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='#'>Link Text</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='#'>Link Text</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='#'>Link Text</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </DocsTile>
            <DocsText>{breadcrumbLinkCode}</DocsText>
        </div>
    );
};
