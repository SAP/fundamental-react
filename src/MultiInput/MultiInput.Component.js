import { MultiInput } from '../';
import path from 'path';
import { ComponentPage, Example } from '../_playground';
import React, { Component } from 'react';

export class MultiInputComponent extends Component {
    data = [
        'Apple',
        'Apricot',
        'Acai',
        'African Moringa',
        'Bearberry',
        'Bilberry',
        'Blood orange',
        'Barbadine',
        'Barbados cherry',
        'Balsam Apple',
        'Chokeberry',
        'Cranberry',
        'Cupuacu'
    ];

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    render() {
        return (
            <ComponentPage
                sourceModulePath={path.join(__dirname, './MultiInput')}
                title='Multi Input'>

                <Example
                    description='When input receives focus, it will show list of items to select.'
                    title='Default'>
                    <MultiInput
                        data={this.data}
                        placeholder='Select a Fruit' />
                </Example>

                <Example
                    title='Compact Style'>
                    <MultiInput
                        compact
                        data={this.data}
                        placeholder='Select a Fruit' />
                </Example>

                <Example
                    title='Disabled'>
                    <MultiInput
                        data={this.data}
                        disabled
                        placeholder='Select a Fruit' />
                </Example>

                <Example
                    centered
                    title='Validation States'>
                    <MultiInput
                        data={this.data}
                        placeholder='Default'
                        validationState={{ state: 'error', text: 'Test validation state' }} />
                    <br />
                    <MultiInput
                        data={this.data}
                        placeholder='Default'
                        validationState={{ state: 'warning', text: 'Test validation state' }} />
                    <br />
                    <MultiInput
                        data={this.data}
                        placeholder='Default'
                        validationState={{ state: 'success', text: 'Test validation state' }} />
                    <br />
                    <MultiInput
                        data={this.data}
                        placeholder='Default'
                        validationState={{ state: 'information', text: 'Test validation state' }} />
                </Example>

            </ComponentPage>
        );
    }
}
