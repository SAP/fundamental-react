import Wizard from '../Wizard';
import React, { useState } from 'react';

export default {
    title: 'Component API/Wizard',
    component: Wizard
};

/*
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
*/

export const primary = () => {
    const [selectedIndex] = useState(0);
    return (
        <Wizard selectedIndex={selectedIndex}>
            <Wizard.Step
                key='1'
                nextLabel='Step 2'
                title='Step 1: Foo'
                validator={() => true}>
                <p>Lorem ipsum dolor sit amet.</p>
            </Wizard.Step>
            <Wizard.Step
                key='2'
                nextLabel='Step 3'
                title='Step 2: Bar'>
                <p>Blah blah blah.</p>
            </Wizard.Step>
            <Wizard.Step
                key='3'
                nextLabel='Complete'
                title='Step 3: Baz'>
                <p>Foo bar baz.</p>
            </Wizard.Step>
        </Wizard>
    );
};
