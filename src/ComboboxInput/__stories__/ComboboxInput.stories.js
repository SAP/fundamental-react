/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import ComboboxInput from '../ComboboxInput';
import countriesData from '../../../data/countries.json';
import LayoutGrid from '../../LayoutGrid/LayoutGrid';
import List from '../../List/List';
import Switch from '../../Switch/Switch';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';
import React, { useState } from 'react';

export default {
    title: 'Component API/ComboboxInput',
    component: ComboboxInput
};

const placeholder = 'Enter country';

export const primary = () => (
    <ComboboxInput options={countriesData} placeholder={placeholder} />
);

export const disabled = () => (
    <ComboboxInput disabled
        options={countriesData} placeholder={placeholder} />
);

export const compact = () => (
    <ComboboxInput compact
        options={countriesData} placeholder={placeholder} />
);

export const validationState = () => (
    <div className='fddocs-container'>
        <ComboboxInput
            options={countriesData}
            placeholder='Error'
            validationState={{ state: 'error', text: 'Test validation state' }} />
        <ComboboxInput
            options={countriesData}
            placeholder='Warning'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
        <ComboboxInput
            options={countriesData}
            placeholder='Information'
            validationState={{ state: 'information', text: 'Test validation state' }} />
        <ComboboxInput
            options={countriesData}
            placeholder='Success'
            validationState={{ state: 'success', text: 'Test validation state' }} />
    </div>
);

export const dev = () => {
    const [selectedCountryObj, setSelectedCountry] = useState();
    const [useCustomRenderer, setUseCustomRenderer] = useState(true);

    const withFlags = (option) => {
        return (
            <List.Text>
                {`${option.text}`}
                <span
                    style={{
                        position: 'absolute',
                        right: '20px',
                        fontSize: '2rem'
                    }}>
                    {option.emoji}
                </span>
            </List.Text>
        );
    };

    return (
        <>
            <LayoutGrid>
                <div>
                    For focus testing
                    <br />
                    <Button>Test</Button>
                </div>
                <div>
                    <Switch
                        checked
                        compact
                        onChange={() => {
                            setUseCustomRenderer(!useCustomRenderer);
                        }}>
                        Use custom option renderer
                    </Switch>

                    Selected country code: {selectedCountryObj?.key || 'none'}

                    <br />
                    <ComboboxInput
                        arrowLabel='Show country options'
                        compact={boolean('compact', false)}
                        disabled={boolean('disabled', false)}
                        id='comboboxDevExample'
                        label='Country'
                        maxHeight='500px'
                        noMatchesText='No Matches'
                        onSelectionChange={(event, option) => {
                            setSelectedCountry(option);
                        }}
                        optionRenderer={useCustomRenderer ? withFlags : null}
                        options={countriesData}
                        placeholder={text('Placeholder', placeholder)}
                        validationState={select('Validation State', {
                            'none': '',
                            'success': { state: 'success', text: 'placeholder text' },
                            'error': { state: 'error', text: 'placeholder text' },
                            'information': { state: 'information', text: 'placeholder text' },
                            'warning': { state: 'warning', text: 'placeholder text' }
                        })} />
                </div>
                <div>
                    For focus testing
                    <br />
                    <Button>Test</Button>
                </div>
            </LayoutGrid>
        </>
    );
};


dev.parameters = { docs: { disable: true } };
