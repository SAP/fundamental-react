import Button from '../../Button/Button';
import Wizard from '../Wizard';
import WizardFlow from '../WizardFlow';
import WizardStep from '../WizardStep';
import React, { useState } from 'react';

export default {
    title: 'Component API/Wizard',
    component: Wizard
};
export const primary = () => {
    return (
        <Wizard>
            <WizardStep
                glyph='accept'
                modifiers={['completed']}
                title='Step 1: Foo'>
                <p>Lorem ipsum dolor sit amet.</p>
            </WizardStep>
            <WizardStep
                glyph='accept'
                modifiers={['active', 'current']}
                title='Step 2: Bar'>
                <p>Blah blah blah.</p>
            </WizardStep>
            <WizardStep
                modifiers={['upcoming']}
                title='Step 3: Baz'>
                <p>Blah blah blah.</p>
            </WizardStep>
        </Wizard>
    );
};

export const defaultFlow = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <WizardFlow selectedIndex={selectedIndex}>
            <WizardStep title='Step 1: Foo'>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button onClick={() => setSelectedIndex(1)}>Next step</Button>
            </WizardStep>
            <WizardStep title='Step 2: Bar'>
                <p>Blah blah blah.</p>
                <Button onClick={() => setSelectedIndex(2)}>Next step</Button>
            </WizardStep>
            <WizardStep title='Step 3: Baz'>
                <p>Blah blah blah.</p>
            </WizardStep>
        </WizardFlow>
    );
};
