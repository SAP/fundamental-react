import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import } from '../';

export const BreadcrumbComponent = () => {
    const breadcrumbHrefCode = `<Breadcrumb>
    <BreadcrumbItem url="#" name="Link Text"/>
    <BreadcrumbItem url="#" name="Link Text"/>
    <BreadcrumbItem url="#" name="Link Text"/>
</Breadcrumb>`;

    const breadcrumbLinkCode = ` <Breadcrumb>
    <BreadcrumbItem link="/" name="Link Text" />
    <BreadcrumbItem link="/" name="Link Text" />
    <BreadcrumbItem link="/" name="Link Text" />
</Breadcrumb>`;

    return (
        <div>
            <Header>Breadcrumb</Header>
            <Description>
                The breadcrumb allows users to see the current page and navigation path to that page. Users can navigate
                to previous levels in the path. When clicking on the current page, a dropdown allows users to access
                other pages at that same level.
            </Description>
            <Import module='Breadcrumb, BreadcrumbItem' path='/fundamental-react/src/' />

            <Separator />

            <Description>An example using url (href attribute)</Description>
            <DocsTile>
                <Breadcrumb>
                    <BreadcrumbItem url='#' name='Link Text' />
                    <BreadcrumbItem url='#' name='Link Text' />
                    <BreadcrumbItem url='#' name='Link Text' />
                </Breadcrumb>
            </DocsTile>
            <DocsText>{breadcrumbHrefCode}</DocsText>

            <Separator />

            <Description>An example using link (routerLink)</Description>
            <DocsTile>
                <Breadcrumb>
                    <BreadcrumbItem link='/' name='Link Text' />
                    <BreadcrumbItem link='/' name='Link Text' />
                    <BreadcrumbItem link='/' name='Link Text' />
                </Breadcrumb>
            </DocsTile>
            <DocsText>{breadcrumbLinkCode}</DocsText>
        </div>
    );
};
