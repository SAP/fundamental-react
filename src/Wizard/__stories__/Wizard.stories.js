import Button from '../../Button/Button';
import Checkbox from '../../Forms/Checkbox';
import Select from '../../Select/Select';
import Wizard from '../Wizard';
import React, { useState } from 'react';

export default {
    title: 'Component API/Wizard',
    component: Wizard
};

export const primary = () => (
    <Wizard
        contentSize='sm'
        headerSize='sm'
        onCancel={() => alert('Wizard cancelled')}
        onComplete={() => alert('Wizard completed')}>
        <Wizard.Step title='Step 1: Foo'>
            <p>This is the first step.</p>
        </Wizard.Step>
        <Wizard.Step title='Step 2: Bar'>
            <p>This is the second step.</p>
        </Wizard.Step>
        <Wizard.Step title='Step 3: Baz'>
            <p>This is the final step.</p>
        </Wizard.Step>
    </Wizard>
);

export const customLabels = () => (
    <Wizard
        cancelLabel='Exit'
        contentSize='sm'
        headerSize='sm'
        onCancel={() => alert('Wizard cancelled')}
        onComplete={() => alert('Wizard completed')}>
        <Wizard.Step nextLabel='Next Step' title='Step 1: Foo'>
            <p>This is the first step.</p>
        </Wizard.Step>
        <Wizard.Step nextLabel='Go to step 3' title='Step 2: Bar'>
            <p>This is the second step.</p>
        </Wizard.Step>
        <Wizard.Step nextLabel='Complete' title='Step 3: Baz'>
            <p>This is the final step.</p>
        </Wizard.Step>
    </Wizard>
);

export const glyphs = () => (
    <Wizard
        contentSize='sm'
        headerSize='sm'
        onCancel={() => alert('Wizard cancelled')}
        onComplete={() => alert('Wizard completed')}>
        <Wizard.Step glyph='person-placeholder' title='Customer'>
            <p>This is the customer step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='contacts' optionalLabel='(Optional)'
            title='Contact'>
            <p>This is the contact step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='money-bills' title='Payment'>
            <p>This is the payment step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='batch-payments' title='Bill To'>
            <p>This is the billing step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='shipping-status' title='Ship To'>
            <p>This is the shipping step.</p>
        </Wizard.Step>
    </Wizard>
);

export const noLabels = () => (
    <Wizard
        contentSize='sm'
        headerSize='sm'
        onCancel={() => alert('Wizard cancelled')}
        onComplete={() => alert('Wizard completed')}
        option='no-labels'>
        <Wizard.Step glyph='person-placeholder' title='Customer'>
            <p>This is the customer step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='contacts' optionalLabel='(Optional)'
            title='Contact'>
            <p>This is the contact step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='money-bills' title='Payment'>
            <p>This is the payment step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='batch-payments' title='Bill To'>
            <p>This is the billing step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='shipping-status' title='Ship To'>
            <p>This is the shipping step.</p>
        </Wizard.Step>
    </Wizard>
);


export const stacked = () => (
    <Wizard
        contentSize='sm'
        headerSize='sm'
        onCancel={() => alert('Wizard cancelled')}
        onComplete={() => alert('Wizard completed')}
        option='stacked'>
        <Wizard.Step glyph='person-placeholder' title='Customer'>
            <p>This is the customer step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='contacts' optionalLabel='(Optional)'
            title='Contact'>
            <p>This is the contact step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='money-bills' title='Payment'>
            <p>This is the payment step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='batch-payments' title='Bill To'>
            <p>This is the billing step.</p>
        </Wizard.Step>
        <Wizard.Step glyph='shipping-status' title='Ship To'>
            <p>This is the shipping step.</p>
        </Wizard.Step>
    </Wizard>
);

export const validator = () => {
    const [stepOneValid, setStepOneValid] = useState(false);
    const [stepTwoValid, setStepTwoValid] = useState(false);

    return (
        <Wizard
            contentSize='sm'
            headerSize='sm'
            onCancel={() => alert('Wizard cancelled')}
            onComplete={() => alert('Wizard completed')}>
            <Wizard.Step
                title='Step 1: Foo'
                valid={stepOneValid}>
                <Checkbox checked={stepOneValid} onChange={(e, val) => setStepOneValid(val)}>Is valid?</Checkbox>
            </Wizard.Step>
            <Wizard.Step
                title='Step 2: Bar'
                valid={stepTwoValid}>
                <Checkbox checked={stepTwoValid} onChange={(e, val) => setStepTwoValid(val)}>Is valid?</Checkbox>
            </Wizard.Step>
            <Wizard.Step
                nextLabel='Complete'
                title='Step 3: Baz'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>
    );
};

export const branching = () => {
    const [branch, setBranch] = useState(null);

    return (
        <Wizard
            contentSize='sm'
            headerSize='sm'
            onCancel={() => alert('Wizard cancelled')}
            onComplete={() => alert('Wizard completed')}>
            <Wizard.Step
                branching={!branch}
                title='Step 1: Foo'
                valid={branch}>
                <Select
                    onSelect={(e, option) => setBranch(option.key)}
                    options={[
                        { key: '1', text: 'Branch 1' },
                        { key: '2', text: 'Branch 2' }
                    ]}
                    selectedKey={branch} />
            </Wizard.Step>
            {branch === '1' && <>
                <Wizard.Step
                    title='Step 2a: Bar'>
                    Second step of branch 1
                </Wizard.Step>
                <Wizard.Step
                    title='Step 2b: Bar'>
                    Second step of branch 1
                </Wizard.Step>
            </>}
            {branch === '2' && (
                <Wizard.Step
                    title='Step 2: Qux'>
                    Second step of branch 2
                </Wizard.Step>
            )}
            <Wizard.Step
                nextLabel='Complete'
                title='Step 3: Baz'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>
    );
};

export const manual = () => (
    <Wizard.Container>
        <Wizard.Navigation size='sm'>
            <Wizard.Step
                connector='active'
                glyph='accept'
                modifiers={['completed']}
                title='Step 1: Foo'>
                <p>This is the first step.</p>
            </Wizard.Step>
            <Wizard.Step
                indicator='2'
                modifiers={['active', 'current']}
                title='Step 2: Bar'>
                <p>This is the second step.</p>
            </Wizard.Step>
            <Wizard.Step
                connector='none'
                indicator='3'
                modifiers={['upcoming']}
                title='Step 3: Baz'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard.Navigation>
        <Wizard.Content size='sm'>
            <p>This is content</p>
        </Wizard.Content>
        <Wizard.Footer label='Cancel'>
            <Button compact option='transparent'>Custom</Button>
        </Wizard.Footer>
    </Wizard.Container>
);
