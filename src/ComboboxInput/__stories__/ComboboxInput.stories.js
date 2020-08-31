/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import Column from '../../LayoutGrid/Column';
import ComboboxInput from '../ComboboxInput';
import Container from '../../LayoutGrid/Container';
import countriesData from '../../../data/countries.json';
import List from '../../List/List';
import Row from '../../LayoutGrid/Row';
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
    <Container>
        <Row>
            <Column>
                <ComboboxInput
                    id='errorComboboxExample'
                    label='Combobox with error'
                    options={countriesData}
                    placeholder={placeholder}
                    required
                    validationState={{ state: 'error', text: 'Please select country of residence' }} />
            </Column>
            <Column>
                <ComboboxInput
                    id='warningComboboxExample'
                    label='Combobox with warning'
                    options={countriesData}
                    placeholder={placeholder}
                    validationState={{ state: 'warning', text: 'Country can be edited only once' }} />
            </Column>
            <Column>
                <ComboboxInput
                    id='infoComboboxExample'
                    label='Combobox with information'
                    options={countriesData}
                    placeholder={placeholder}
                    validationState={{ state: 'information', text: 'This data will not be shared.' }} />
            </Column>
            <Column>
                <ComboboxInput
                    id='successComboboxExample'
                    label='Combobox with success'
                    options={countriesData}
                    placeholder={placeholder}
                    validationState={{ state: 'success', text: 'Service is supported in these countries.' }} />
            </Column>
        </Row>
    </Container>
);

/**
 * It is important to note that the browser's own autocomplete feature might interfere with the combobox input field and
 * its auto-select/auto-complete behaviour, as implemented below.
 *
 *
 * Historically, setting `autocomplete=“off”` has disabled browser's own autocomplete but Chrome continues to change its
 * stance on `autcomplete=“off”` on the basis of usability. With some Chrome versions, `autocomplete=“off”` will work, while in others, `autocomplete=“nope”`
 * or other <a href="https://www.w3.org/TR/WCAG21/#input-purposes" target="_blank">semantic values</a> like `autocomplete=“street-address”` will work. This back and forth has been going on for a while
 * leaving many developers unhappy and <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=914451" target="_blank">frustrated with this Chrome behavior</a>.
 *
 *
 * We have tried to disable the browser's own autocomplete by setting `autocomplete="off"` as default but you may use any custom value by setting the `inputProps.autoComplete` attribute.
 */

export const selectionType = () => {
    const [selectedCountryObj1, setSelectedCountry1] = useState();
    const [selectedCountryObj2, setSelectedCountry2] = useState();
    const [selectedCountryObj3, setSelectedCountry3] = useState();
    return (
        <>
            <Container>
                <Row>
                    <Column>
                        <div>
                            Selected country code: {selectedCountryObj1?.key || 'none'}
                            <br />
                            <ComboboxInput
                                arrowLabel='Show country options'
                                id='comboboxManualSelectExample'
                                inputProps={{
                                    autoComplete: 'nope'
                                }}
                                label='Country (Manual Select)'
                                maxHeight='250px'
                                noMatchesText='No Matches'
                                onSelectionChange={(event, option) => {
                                    setSelectedCountry1(option);
                                }}
                                options={countriesData}
                                placeholder='🔎   Enter Country Name'
                                selectionType='manual' />
                        </div>
                    </Column>
                    <Column>
                        <div>
                            Selected country code: {selectedCountryObj2?.key || 'none'}
                            <br />
                            <ComboboxInput
                                arrowLabel='Show country options'
                                id='comboboxAutoSelectExample'
                                inputProps={{
                                    autoComplete: 'nope'
                                }}
                                label='Country (Auto Select)'
                                maxHeight='250px'
                                noMatchesText='No Matches'
                                onSelectionChange={(event, option) => {
                                    setSelectedCountry2(option);
                                }}
                                options={countriesData}
                                placeholder='🔎   Enter Country Name'
                                selectionType='auto' />
                        </div>
                    </Column>
                    <Column>
                        <div>
                            Selected country code: {selectedCountryObj3?.key || 'none'}
                            <br />
                            <ComboboxInput
                                arrowLabel='Show country options'
                                id='comboboxAutoInlineSelectExample'
                                inputProps={{
                                    autoComplete: 'nope'
                                }}
                                label='Country (Auto Select and Inline Auto Complete)'
                                maxHeight='250px'
                                noMatchesText='No Matches'
                                onSelectionChange={(event, option) => {
                                    setSelectedCountry3(option);
                                }}
                                options={countriesData}
                                placeholder='🔎   Enter Country Name'
                                selectionType='auto-inline' />
                        </div>
                    </Column>
                </Row>
            </Container>
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
            <Container>
                <Row>
                    <Column>
                        <div>
                            <Button>Dummy</Button>
                        </div>
                    </Column>
                    <Column>
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
                    </Column>
                    <Column>
                        <div>
                            <Button>Dummy</Button>
                        </div>
                    </Column>
                </Row>
            </Container>
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
        <Container>
            <Row>
                <Column>
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
                </Column>
            </Row>
        </Container>
    );
};
