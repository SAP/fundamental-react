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
                        placeHolder='Select a Fruit' />
                </Example>

                <Example
                    title='Compact Style'>
                    <MultiInput
                        compact
                        data={this.data}
                        placeHolder='Select a Fruit' />
                </Example>

            </ComponentPage>
        );
    }
}
