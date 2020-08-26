/* eslint-disable react/no-multi-comp */
import Column from '../Column';
import Container from '../Container';
import React from 'react';
import Row from '../Row';

export default {
    title: 'Layout/Layout Grid',
    component: Container,
    description: 'test',
    subcomponents: { Container, Row, Column },
    parameters: {
        description: `
Use the layout grid system consisting of **Container**, **Row**, and **Column** components to arrange things evenly in a grid layout.
`,
        noImport: true,
        displaySubComponentImports: true
    }

};

export const differentSizeColumns = () => (
    <Container className='docs-layout-grid'>
        <Row>
            <Column>
                <div className='col-content'> 12 Column Element </div>
            </Column>
        </Row>
        <Row>
            <Column span={11}>
                <div className='col-content'>11 Column Element</div>
            </Column>
            <Column span={1}>
                <div className='col-content'>1 Column Element</div>
            </Column>
        </Row>
        <Row>
            <Column span={10}>
                <div className='col-content'>10 Column Element</div>
            </Column>
            <Column span={2}>
                <div className='col-content'> 2 Column Element </div>
            </Column>
        </Row>
        <Row>
            <Column span={9}>
                <div className='col-content'> 9 Column Element </div>
            </Column>
            <Column span={3}>
                <div className='col-content'> 3 Column Element </div>
            </Column>
        </Row>
        <Row>
            <Column span={8}>
                <div className='col-content'> 8 Column Element </div>
            </Column>
            <Column span={4}>
                <div className='col-content'> 4 Column Element </div>
            </Column>
        </Row>
        <Row>
            <Column span={7}>
                <div className='col-content'> 7 Column Element </div>
            </Column>
            <Column span={5}>
                <div className='col-content'> 5 Column Element </div>
            </Column>
        </Row>
        <Row>
            <Column span={6}>
                <div className='col-content'> 6 Column Element </div>
            </Column>
            <Column span={6}>
                <div className='col-content'> 6 Column Element </div>
            </Column>
        </Row>
        <Row>
            <Column span={5}>
                <div className='col-content'> 5 Column Element </div>
            </Column>
            <Column span={7}>
                <div className='col-content'> 7 Column Element </div>
            </Column>
        </Row>
        <Row>
            <Column span={4}>
                <div className='col-content'> 4 Column Element </div>
            </Column>
            <Column span={8}>
                <div className='col-content'> 8 Column Element </div>
            </Column>
        </Row>
        <Row>
            <Column span={3}>
                <div className='col-content'> 3 Column Element </div>
            </Column>
            <Column span={9}>
                <div className='col-content'>9 Column Element </div>
            </Column>
        </Row>
        <Row>
            <Column span={2}>
                <div className='col-content'> 2 Column Element </div>
            </Column>
            <Column span={10}>
                <div className='col-content'> 10 Column Element </div>
            </Column>
        </Row>
        <Row>
            <Column span={1}>
                <div className='col-content'>1 Column Element </div>
            </Column>
            <Column span={11}>
                <div className='col-content'>11 Column Element </div>
            </Column>
        </Row>
    </Container>
);


export const responsive = () => (
    <Container className='docs-layout-grid'>
        <Row>
            <Column
                className='docs-layout-grid-first'
                span={{
                    smallScreen: 6,
                    mediumScreen: 4,
                    largeScreen: 3,
                    xLargeScreen: 3
                }}>

                <div className='col-content'>Column Element</div>
            </Column>
            <Column
                className='docs-layout-grid-second'
                span={{
                    smallScreen: 6,
                    mediumScreen: 4,
                    largeScreen: 3,
                    xLargeScreen: 3
                }}>

                <div className='col-content'>Column Element</div>
            </Column>
            <Column
                className='docs-layout-grid-third'
                span={{
                    smallScreen: 6,
                    mediumScreen: 4,
                    largeScreen: 3,
                    xLargeScreen: 3
                }}>

                <div className='col-content'>Column Element</div>
            </Column>
            <Column className='docs-layout-grid-fourth'
                span={{
                    smallScreen: 6,
                    mediumScreen: 4,
                    largeScreen: 3,
                    xLargeScreen: 3
                }}>

                <div className='col-content'>Column Element</div>
            </Column>
        </Row>
    </Container>
);

responsive.parameters = {
    docs: {
        storyDescription: `
You can define different column spans for each screen size.

* Column will occupy \`span.smallScreen\` cell(s) when container width is less than 600px
* Column will occupy \`span.mediumScreen\` cell(s) when container width is between 600px and 1024px
* Column will occupy \`span.largeScreen\` cell(s) when container width is between 1024px and 1440px
* Column will occupy \`span.xLargeScreen\` cell(s) when container width is more than 1440px
`
    }
};

export const autoSpanAvailableCells = () => (
    <Container className='docs-layout-grid'>
        <Row>
            <Column
                className='docs-layout-grid-first'
                span={{
                    smallScreen: 12,
                    mediumScreen: 8,
                    largeScreen: 7,
                    xLargeScreen: 6
                }}>

                <div className='col-content'>We have defined col spans for this Column</div>
            </Column>
            <Column className='docs-layout-grid-second' >
                <div className='col-content'>This Column will share available cells</div> </Column>
            <Column className='docs-layout-grid-third' >
                <div className='col-content'>This Column will share available cells</div> </Column>
        </Row>
    </Container>
);

autoSpanAvailableCells.parameters = {
    docs: {
        storyDescription: `
When \`span\` is not set on a \`Column\` enclosed in a \`Row\` - then the \`Row\` will try to distribute the remaining cells equally among such \`Column\`s.
If there are no cells available to span the default of 12 will be set.
`
    }
};

export const nesting = () => (
    <Container className='docs-layout-grid'>
        <Row>
            <Column span={6}>
                <Row>
                    <Column span={6}>
                        <div className='col-content'>Nested Column Element</div>
                    </Column>
                    <Column >
                        <div className='col-content'>Nested Column Element</div>
                    </Column>
                    <Column >
                        <div className='col-content'>Nested Column Element</div>
                    </Column>
                </Row>
            </Column>
            <Column>
                <div className='col-content'>Column Element</div>
            </Column>
            <Column>
                <div className='col-content'>Column Element</div>
            </Column>
            <Column>
                <div className='col-content'>Column Element</div>
            </Column>
        </Row>
    </Container>
);

export const offsetting = () => (
    <Container className='docs-layout-grid'>
        <Row>
            <Column
                offset={{
                    mediumScreen: 2,
                    xLargeScreen: 3
                }}
                span={6}>
                <div className='col-content'>Offset Column Element</div>
            </Column>
        </Row>
        <Row>
            <Column offset={6} span={6} >
                <div className='col-content'>Offset Column Element</div>
            </Column>
        </Row>
        <Row>
            <Column
                offset={{
                    smallScreen: 1,
                    mediumScreen: 2,
                    largeScreen: 2,
                    xLargeScreen: 1
                }}
                offsetPosition='after'
                span={3}>
                <div className='col-content'>Offset Column Element</div>
            </Column>
            <Column
                offset={{
                    smallScreen: 1
                }}
                offsetPosition='after'
                span={4}>
                <div className='col-content'>Offset Column Element</div>
            </Column>
            <Column
                span={2}>
                <div className='col-content'>Offset Column Element</div>
            </Column>
        </Row>
    </Container>
);

offsetting.parameters = {
    docs: {
        storyDescription: `
Similar to \`span\` you may also set the \`offset\` property on the \`Column\` component at varying screen sizes.
The offset will be applied \`before\` or \`after\` the Column depending on the \`offsetPosition\` property.
`
    }
};

export const noGap = () => (
    <Container className='docs-layout-grid' noGap >
        <Row>
            <Column span={8}>
                <div className='col-content'> {'<Column span={8}>'} </div>
            </Column>
            <Column span={4}>
                <div className='col-content'> {'<Column span={4}>'} </div>
            </Column>
        </Row>
        <Row>
            <Column span={6}>
                <div className='col-content'> {'<Column span={6}>'} </div>
            </Column>
            <Column span={6}>
                <div className='col-content'> {'<Column span={6}>'} </div>
            </Column>
        </Row>
        <Row>
            <Column span={4}>
                <div className='col-content'> {'<Column span={4}>'} </div>
            </Column>
            <Column span={8}>
                <div className='col-content'> {'<Column span={8}>'} </div>
            </Column>
        </Row>
    </Container>
);

noGap.parameters = {
    docs: {
        storyDescription: `
To remove gutters between columns set the \`noGap\` property on the  \`Container\`.
`
    }
};
