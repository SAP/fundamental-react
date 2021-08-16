import React from 'react';
import Wizard from '../Wizard';
import WizardStep from '../WizardStep';

export default {
    title: 'Component API/Wizard',
    component: Wizard
};
export const primary = () => {
    return (
        <Wizard>
            <WizardStep title='Step 1: Foo'>
                Lorem ipsum dolor sit amet.
            </WizardStep>
            <WizardStep title='Step 2: Bar'>
                Blah blah blah.
            </WizardStep>
        </Wizard>
    );
};
