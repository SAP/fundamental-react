import Column from './Column';
import Container from './Container';
import { mount } from 'enzyme';
import React from 'react';
import Row from './Row';
import {
    toHaveClass
} from '@testing-library/jest-dom/matchers';

expect.extend({ toHaveClass });

describe('<Row />', () => {
    describe('Auto spanning', () => {
        test('Row should automatically assign spans to un-spanned Columns', () => {
            let wrapper = mount(
                <Container>
                    <Row>
                        <Column
                            id='firstColumn'
                            span={{
                                smallScreen: 12,
                                mediumScreen: 8,
                                largeScreen: 7,
                                xLargeScreen: 6
                            }}>
                            We have defined col spans for this Column
                        </Column>
                        <Column
                            id='secondColumn' >
                            This Column will share available cells
                        </Column>
                        <Column
                            id='thirdColumn' >
                            This Column will share available cells
                        </Column>
                    </Row>
                </Container>
            );
            expect(wrapper.find('div#firstColumn').getDOMNode()).toHaveClass('fd-col fd-col--12 fd-col-md--8 fd-col-lg--7 fd-col-xl--6');
            expect(wrapper.find('div#secondColumn').getDOMNode()).toHaveClass('fd-col fd-col--12 fd-col-md--2 fd-col-lg--3 fd-col-xl--3');
            expect(wrapper.find('div#secondColumn').getDOMNode()).toHaveClass('fd-col fd-col--12 fd-col-md--2 fd-col-lg--3 fd-col-xl--3');
            wrapper.unmount();
        });
    });

    test('Alls refs are forwarded the ref', () => {
        let containerRef;
        let rowRef;
        let columnRef;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                containerRef = React.createRef();
                rowRef = React.createRef();
                columnRef = React.createRef();
            }
            render = () => (
                <Container ref={containerRef}>
                    <Row ref={rowRef}>
                        <Column ref={columnRef}>
                            Content
                        </Column>
                    </Row>
                </Container>
            );
        }
        mount(<Test />);
        expect(containerRef.current.tagName).toEqual('DIV');
        expect(containerRef.current).toHaveClass('fd-container');

        expect(rowRef.current.tagName).toEqual('DIV');
        expect(rowRef.current).toHaveClass('fd-row');

        expect(columnRef.current.tagName).toEqual('DIV');
        expect(columnRef.current).toHaveClass('fd-col');
    });
});
