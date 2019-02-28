import { Pagination } from '../';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const PaginationComponent = () => {
    const handleClick = event => {
        alert(`Page clicked - ${event}`);
    };

    return (
        <ComponentPage
            description={`**Pagination** is commonly used for tables and tiles. It allows
                users to see how many pages of content exist, to navigate and
                highlights which page they are currently viewing. This control
                does not handle how many tiles or rows to display in a table.
                This control simply adds a nice user experience to handle how to
                navigate through a collection. The handling of which items to
                display needs to be handled in the function that is passed in
                the \`onClick\` method.`}
            sourceModulePath={path.join(__dirname, './Pagination')}
            title='Pagination'>

            <Example
                centered
                description='When the first page is active, the Back arrow should be disabled.'
                title='First Page'>
                <Pagination itemsTotal={101} onClick={handleClick} />
            </Example>

            <Example
                centered
                description='When the last page is active, the Next arrow should be disabled.'
                title='Last Page'>
                <Pagination
                    initialPage={11}
                    itemsTotal={101}
                    onClick={handleClick} />
            </Example>

            <Example
                centered
                description='Set how many items per page.'
                title='Items per Page'>
                <Pagination
                    itemsPerPage={25}
                    itemsTotal={101}
                    onClick={handleClick} />
            </Example>

            <Example
                centered
                description='Set initial page to be selected.'
                title='Set Initial Page'>
                <Pagination
                    initialPage={6}
                    itemsTotal={101}
                    onClick={handleClick} />
            </Example>

            <Example
                centered
                description='Only show page numbers, Previous and Next controls.'
                title='Hide Total'>
                <Pagination
                    displayTotal={false}
                    itemsTotal={101}
                    onClick={handleClick} />
            </Example>

            <Example
                centered
                description='Customize text to show next to item total.'
                title='Total Text'>
                <Pagination
                    itemsTotal={101}
                    onClick={handleClick}
                    totalText='Dalmations' />
            </Example>

        </ComponentPage>
    );
};
