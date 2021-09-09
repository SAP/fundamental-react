import React from 'react';
import Wizard from '../Wizard';

export default {
    title: 'Component API/Wizard',
    component: Wizard
};

export const primary = () => {
    return (
        <Wizard
            branching
            contentSize='sm'
            headerSize='sm'
            onCancel={() => alert('Wizard cancelled')}
            onComplete={() => alert('Wizard completed')}>
            <Wizard.Step
                title='Step 1: Foo'
                validator={() => true}>
                <p>This is the first step.</p>
            </Wizard.Step>
            <Wizard.Step
                title='Step 2: Bar'>
                <p>This is the second step.</p>
            </Wizard.Step>
            <Wizard.Step
                nextLabel='Complete'
                title='Step 3: Baz'>
                <p>This is the last step.</p>
            </Wizard.Step>
        </Wizard>
    );
};
