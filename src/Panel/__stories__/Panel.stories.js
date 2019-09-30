import Panel from '../Panel';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Panel', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Panel>
            <Panel.Header>
                <Panel.Head description='Panel Description' title={'Panel Header with Actions'} />
                <Panel.Actions>
                    <div>Panel actions</div>
                </Panel.Actions>
            </Panel.Header>
            <Panel.Filters>
                <div>Panel Filters</div>
            </Panel.Filters>
            <Panel.Body>
                <div>Panel Body</div>
            </Panel.Body>
            <Panel.Footer>Panel Footer</Panel.Footer>
        </Panel>
    ))
    .add('disable styles', () => (
        <Panel disableStyles>
            <Panel.Header>
                <Panel.Head description='Panel Description' title={'Panel Header with Actions'} />
                <Panel.Actions>
                    <div>Panel actions</div>
                </Panel.Actions>
            </Panel.Header>
            <Panel.Filters>
                <div>Panel Filters</div>
            </Panel.Filters>
            <Panel.Body>
                <div>Panel Body</div>
            </Panel.Body>
            <Panel.Footer>Panel Footer</Panel.Footer>
        </Panel>
    ))
    .add('custom styles', () => (
        <Panel
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <Panel.Header>
                <Panel.Head description='Panel Description' title={'Panel Header with Actions'} />
                <Panel.Actions>
                    <div>Panel actions</div>
                </Panel.Actions>
            </Panel.Header>
            <Panel.Filters>
                <div>Panel Filters</div>
            </Panel.Filters>
            <Panel.Body>
                <div>Panel Body</div>
            </Panel.Body>
            <Panel.Footer>Panel Footer</Panel.Footer>
        </Panel>
    ));
