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
import React, { useEffect, useRef, useState } from 'react';

export default {
    title: 'Component API/ComboboxInput',
    component: ComboboxInput,
    excludeStories: /.*VisualStoryShotOnly/
};

const placeholder = 'Enter country';

export const primary = () => (
    <ComboboxInput
        id='primaryComboboxExample'
        label='Default'
        options={countriesData}
        placeholder={placeholder} />
);

export const disabled = () => (
    <ComboboxInput
        ariaLabel='Disabled'
        disabled
        id='disabledComboboxExample'
        options={countriesData}
        placeholder={placeholder} />
);

export const compact = () => (
    <ComboboxInput
        ariaLabel='Compact'
        compact
        id='compactComboboxExample'
        options={countriesData}
        placeholder={placeholder} />
);

export const validationState = () => (
    <div className='fddocs-container'>
        <ComboboxInput
            id='errorComboboxExample'
            label='Combobox with error'
            options={countriesData}
            placeholder={placeholder}
            required
            validationState={{ state: 'error', text: 'Please select country of residence' }} />
        <ComboboxInput
            id='warningComboboxExample'
            label='Combobox with warning'
            options={countriesData}
            placeholder={placeholder}
            validationState={{ state: 'warning', text: 'Country can be edited only once' }} />
        <ComboboxInput
            id='infoComboboxExample'
            label='Combobox with information'
            options={countriesData}
            placeholder={placeholder}
            validationState={{ state: 'information', text: 'This data will not be shared.' }} />
        <ComboboxInput
            id='successComboboxExample'
            label='Combobox with success'
            options={countriesData}
            placeholder={placeholder}
            validationState={{ state: 'success', text: 'Service is supported in these countries.' }} />
    </div>
);

export const selectionType = () => {
    const [selectedCountryObj1, setSelectedCountry1] = useState();
    const [selectedCountryObj2, setSelectedCountry2] = useState();
    const [selectedCountryObj3, setSelectedCountry3] = useState();
    return (
        <>
            <LayoutGrid>
                <div>
                    Selected country code: {selectedCountryObj1?.key || 'none'}
                    <br />
                    <ComboboxInput
                        arrowLabel='Show country options'
                        id='comboboxAutoSelectExample'
                        label='Country (Manual Select)'
                        maxHeight='250px'
                        noMatchesText='No Matches'
                        onSelectionChange={(event, option) => {
                            setSelectedCountry1(option);
                        }}
                        options={countriesData}
                        placeholder={placeholder}
                        selectionType='manual' />
                </div>
                <div>
                    Selected country code: {selectedCountryObj2?.key || 'none'}
                    <br />
                    <ComboboxInput
                        arrowLabel='Show country options'
                        id='comboboxAutoSelectExample'
                        label='Country (Auto Select)'
                        maxHeight='250px'
                        noMatchesText='No Matches'
                        onSelectionChange={(event, option) => {
                            setSelectedCountry2(option);
                        }}
                        options={countriesData}
                        placeholder={placeholder}
                        selectionType='auto' />
                </div>
                <div>
                    Selected country code: {selectedCountryObj3?.key || 'none'}
                    <br />
                    <ComboboxInput
                        arrowLabel='Show country options'
                        id='comboboxAutoSelectExample'
                        label='Country (Auto Select and Inline Auto Complete)'
                        maxHeight='250px'
                        noMatchesText='No Matches'
                        onSelectionChange={(event, option) => {
                            setSelectedCountry3(option);
                        }}
                        options={countriesData}
                        placeholder={placeholder}
                        selectionType='auto-inline' />
                </div>
            </LayoutGrid>
        </>
    );
};

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
                    <Button>Dummy</Button>
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
                        ariaLabel={text('ariaLabel', '')}
                        arrowLabel='Show country options'
                        buttonProps={{
                            'data-sample': 'combobox-dev-story-example'
                        }}
                        compact={boolean('compact', false)}
                        disabled={boolean('disabled', false)}
                        filterable={boolean('filterable', true)}
                        id='comboboxDevExample'
                        label={text('label', 'Country')}
                        maxHeight='250px'
                        noMatchesText='No Matches'
                        onSelectionChange={(event, option) => {
                            setSelectedCountry(option);
                        }}
                        optionRenderer={useCustomRenderer ? withFlags : null}
                        options={countriesData}
                        placeholder={text('Placeholder', placeholder)}
                        required={boolean('required', false)}
                        selectionType={select('selectionType', {
                            'manual': 'manual',
                            'auto': 'auto',
                            'auto-inline': 'auto-inline'
                        })}
                        validationState={select('Validation State', {
                            'none': '',
                            'success': { state: 'success', text: 'placeholder text' },
                            'error': { state: 'error', text: 'placeholder text' },
                            'information': { state: 'information', text: 'placeholder text' },
                            'warning': { state: 'warning', text: 'placeholder text' }
                        })} />
                </div>
                <div>
                    <Button>Dummy</Button>
                </div>
            </LayoutGrid>
        </>
    );
};

dev.storyName = 'Dev';

dev.parameters = { docs: { disable: true } };


// Visual snapshot testing stories below
export const autoInlineButtonClickVisualStoryShotOnly = () => {
    const comboboxVS3ExampleButtonRef = useRef();

    useEffect(() => {
        comboboxVS3ExampleButtonRef?.current?.click();
    }, [comboboxVS3ExampleButtonRef]);

    return (
        <LayoutGrid>
            <div>
                <ComboboxInput
                    compact
                    id='comboboxVS1Example'
                    label='Compact country selector, manual selection'
                    maxHeight='250px'
                    noMatchesText='No Matches'
                    options={countriesData}
                    placeholder={placeholder}
                    selectionType='manual' />
            </div>
            <div>
                <ComboboxInput
                    id='comboboxVS2Example'
                    label='Country selector, auto selection'
                    maxHeight='250px'
                    noMatchesText='No Matches'
                    options={countriesData}
                    placeholder={placeholder}
                    selectionType='auto' />
            </div>
            <div>
                <ComboboxInput
                    id='comboboxVS3Example'
                    label='Country selector, auto-inline selection'
                    maxHeight='250px'
                    noMatchesText='No Matches'
                    options={countriesData}
                    placeholder={placeholder}
                    ref={comboboxVS3ExampleButtonRef}
                    selectionType='auto-inline' />
            </div>
        </LayoutGrid>
    );
};
