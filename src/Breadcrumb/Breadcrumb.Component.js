import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import } from '../'

export const BreadcrumbComponent = () => {
    const breadcrumbCode = `<Breadcrumb>
    <BreadcrumbItem url="#" name="Link Text"/>
    <BreadcrumbItem url="#" name="Link Text"/>
    <BreadcrumbItem url="#" name="Link Text"/>
</Breadcrumb>`

    return (
        <div>

            <Header>Breadcrumb</Header>
            <Description>The breadcrumb allows users to see the current page and navigation path to that page. Users can navigate to previous levels in the path. When clicking on the current page, a dropdown allows users to access other pages at that same level.
            </Description>
            <Import module="Breadcrumb, BreadcrumbItem" path="/react-fundamental/src/" />

            <Separator />

            <DocsTile>
                <Breadcrumb>
                    <BreadcrumbItem url="#" name="Link Text"/>
                    <BreadcrumbItem url="#" name="Link Text"/>
                    <BreadcrumbItem url="#" name="Link Text"/>
                </Breadcrumb>
            </DocsTile>
            <DocsText>{breadcrumbCode}</DocsText>
        </div>
    );
}