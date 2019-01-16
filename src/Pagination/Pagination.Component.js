import { Pagination } from '../';
import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const PaginationComponent = () => {
    const handleClick = event => {
        alert(`Page clicked - ${event}`);
    };
    return (
        <div>
            <Header>Pagination</Header>
            <Description>
                Pagination is commonly used for tables and tiles. It allows
                users to see how many pages of content exist, to navigate and
                highlights which page they are currently viewing. This control
                does not handle how many tiles or rows to display in a table.
                This control simply adds a nice user experience to handle how to
                navigate through a collection. The handling of which items to
                display needs to be handled in the function that is passed in
                the onClick method of the Pagination control.
            </Description>
            <Import module='Pagination' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                properties={[
                    {
                        name: 'itemsTotal',
                        description:
                            'number (required) - Total number of items. itemsTotal / itemsPerPage calculates how many navigation items should be shown in the control.'
                    },
                    {
                        name: 'onClick',
                        description:
                            'func (required) - Function to execute on click of page number, previous or next indicator. Page number value is sent to function.'
                    },
                    {
                        name: 'itemsPerPage',
                        description:
                            'number (default: 10) - Number of items to display on page.'
                    },
                    {
                        name: 'initialPage',
                        description:
                            'number (default: page 1) - Initial page to be selected.'
                    },
                    {
                        name: 'displayTotal',
                        description:
                            'bool (default: true) - Boolean value for whether or not to show total number of items. true - show total number and totalText string, false - hide total number and totalText string.'
                    },
                    {
                        name: 'totalText',
                        description:
                            'string (default: "items") - String to display next to the total number of items.'
                    }
                ]}
                type='Inputs' />

            <Separator />

            <h2>First Page</h2>
            <Description>
                When the first page is active, the Back arrow should be
                disabled.
            </Description>
            <DocsTile centered>
                <Pagination itemsTotal={101} onClick={handleClick} />
            </DocsTile>
            <DocsText>
                {'<Pagination itemsTotal={101} onClick={handleClick}/>'}
            </DocsText>
            <Separator />

            <h2>Last Page</h2>
            <Description>
                When the last page is active, the Next arrow should be disabled.
            </Description>
            <DocsTile centered>
                <Pagination
                    initialPage={11}
                    itemsTotal={101}
                    onClick={handleClick} />
            </DocsTile>
            <DocsText>
                {
                    '<Pagination itemsTotal={101} initalPage={11} onClick={handleClick}/>'
                }
            </DocsText>
            <Separator />

            <h2>Items per Page</h2>
            <Description>Set how many items per page.</Description>
            <DocsTile centered>
                <Pagination
                    itemsPerPage={25}
                    itemsTotal={101}
                    onClick={handleClick} />
            </DocsTile>
            <DocsText>
                {
                    '<Pagination itemsTotal={101} itemsPerPage={25} onClick={handleClick}/>'
                }
            </DocsText>

            <Separator />

            <h2>Set Initial Page</h2>
            <Description>Set initial page to be selected</Description>
            <DocsTile centered>
                <Pagination
                    initialPage={6}
                    itemsTotal={101}
                    onClick={handleClick} />
            </DocsTile>
            <DocsText>
                {
                    '<Pagination itemsTotal={101} initalPage={6} onClick={handleClick}/>'
                }
            </DocsText>
            <Separator />

            <h2>Hide Total</h2>
            <Description>
                Only show page numbers, Previous and Next controls
            </Description>
            <DocsTile centered>
                <Pagination
                    displayTotal={false}
                    itemsTotal={101}
                    onClick={handleClick} />
            </DocsTile>
            <DocsText>
                {
                    '<Pagination itemsTotal={101} displayTotal={false} onClick={handleClick}/>'
                }
            </DocsText>
            <Separator />

            <h2>Total Text</h2>
            <Description>Customize text to show next to item total</Description>
            <DocsTile centered>
                <Pagination
                    itemsTotal={101}
                    onClick={handleClick}
                    totalText='Dalmations' />
            </DocsTile>
            <DocsText centered>
                {' '}
                {
                    '<Pagination itemsTotal={101} totalText="Dalmations" onClick={handleClick}/>'
                }
            </DocsText>
            <Separator />
        </div>
    );
};
