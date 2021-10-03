import Button from '../../Button/Button';
import Checkbox from '../../Forms/Checkbox';
import Select from '../../Select/Select';
import Wizard from '../Wizard';
import WizardContainer from '../WizardContainer';
import WizardContent from '../WizardContent';
import WizardFooter from '../WizardFooter';
import WizardNavigation from '../WizardNavigation';
import WizardStep from '../WizardStep';
import React, { useState } from 'react';

export default {
    title: 'Component API/Wizard',
    component: Wizard,
    subcomponents: {
        WizardStep,
        WizardContainer,
        WizardContent,
        WizardFooter,
        WizardNavigation
    }
};

export const anchorsMode = () => (
    <Wizard
        contentSize='sm'
        headerSize='sm'
        onCancel={() => alert('Wizard cancelled')}
        onComplete={() => alert('Wizard completed')}
        style={{ height: '20rem' }}>
        <Wizard.Step title='First Step'>
            <p>This is the first step.</p>
        </Wizard.Step>
        <Wizard.Step title='Second Step'>
            <p>This is the second step.</p>
        </Wizard.Step>
        <Wizard.Step title='Final Step'>
            <p>This is the final step.</p>
        </Wizard.Step>
    </Wizard>
);

export const tabsMode = () => (
    <Wizard
        contentSize='sm'
        headerSize='sm'
        navigationType='tabs'
        onCancel={() => alert('Wizard cancelled')}
        onComplete={() => alert('Wizard completed')}
        style={{ height: '20rem' }}>
        <Wizard.Step title='First Step'>
            <p>This is the first step.</p>
        </Wizard.Step>
        <Wizard.Step title='Second Step'>
            <p>This is the second step.</p>
        </Wizard.Step>
        <Wizard.Step title='Final Step'>
            <p>This is the final step.</p>
        </Wizard.Step>
    </Wizard>
);

export const customLabels = () => (
    <Wizard
        cancelLabel='Exit'
        contentSize='sm'
        headerSize='sm'
        nextLabel='Go to next step'
        onCancel={() => alert('Wizard cancelled')}
        onComplete={() => alert('Wizard completed')}
        style={{ height: '20rem' }}>
        <Wizard.Step title='First Step'>
            <p>This is the first step.</p>
        </Wizard.Step>
        <Wizard.Step title='Second Step'>
            <p>This is the second step.</p>
        </Wizard.Step>
        <Wizard.Step nextLabel='Complete' title='Final Step'>
            <p>This is the final step.</p>
        </Wizard.Step>
    </Wizard>
);

export const NoTitles = () => (
    <Wizard
        contentSize='sm'
        headerSize='sm'
        onCancel={() => alert('Wizard cancelled')}
        onComplete={() => alert('Wizard completed')}
        showTitles={false}
        style={{ height: '20rem' }}>
        <Wizard.Step title='First Step'>
            <p>This is the first step.</p>
        </Wizard.Step>
        <Wizard.Step title='Second Step'>
            <p>This is the second step.</p>
        </Wizard.Step>
        <Wizard.Step title='Final Step'>
            <p>This is the final step.</p>
        </Wizard.Step>
    </Wizard>
);

export const glyphs = () => (
    <Wizard
        contentSize='sm'
        headerSize='sm'
        onCancel={() => alert('Wizard cancelled')}
        onComplete={() => alert('Wizard completed')}
        style={{ height: '20rem' }}>
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
        option='no-labels'
        style={{ height: '20rem' }}>
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
        option='stacked'
        style={{ height: '20rem' }}>
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
            onComplete={() => alert('Wizard completed')}
            style={{ height: '20rem' }}>
            <Wizard.Step
                title='First Step'
                valid={stepOneValid}>
                <Checkbox checked={stepOneValid} onChange={(e, val) => setStepOneValid(val)}>Is valid?</Checkbox>
            </Wizard.Step>
            <Wizard.Step
                title='Second Step'
                valid={stepTwoValid}>
                <Checkbox checked={stepTwoValid} onChange={(e, val) => setStepTwoValid(val)}>Is valid?</Checkbox>
            </Wizard.Step>
            <Wizard.Step
                nextLabel='Complete'
                title='Final Step'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>
    );
};

export const tabsModeValidator = () => {
    const [stepOneValid, setStepOneValid] = useState(false);
    const [stepTwoValid, setStepTwoValid] = useState(false);

    return (
        <Wizard
            contentSize='sm'
            headerSize='sm'
            navigationType='tabs'
            onCancel={() => alert('Wizard cancelled')}
            onComplete={() => alert('Wizard completed')}
            style={{ height: '20rem' }}>
            <Wizard.Step
                title='First Step'
                valid={stepOneValid}>
                <Checkbox checked={stepOneValid} onChange={(e, val) => setStepOneValid(val)}>Is valid?</Checkbox>
            </Wizard.Step>
            <Wizard.Step
                title='Second Step'
                valid={stepTwoValid}>
                <Checkbox checked={stepTwoValid} onChange={(e, val) => setStepTwoValid(val)}>Is valid?</Checkbox>
            </Wizard.Step>
            <Wizard.Step
                nextLabel='Complete'
                title='Final Step'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>
    );
};

export const branching = () => {
    const [branch, setBranch] = useState(null);
    const [branch2, setBranch2] = useState(null);

    return (
        <Wizard
            contentSize='sm'
            headerSize='sm'
            onCancel={() => alert('Wizard cancelled')}
            onComplete={() => alert('Wizard completed')}
            style={{ height: '20rem' }}>
            <Wizard.Step
                branching={!branch}
                title='Branch choice'
                valid={branch}>
                <Select
                    onSelect={(e, option) => setBranch(option.key)}
                    options={[
                        { key: 'one', text: 'One extra element' },
                        { key: 'two', text: 'Two extra elements (react fragment)' },
                        { key: 'none', text: 'Empty' },
                        { key: 'deep', text: 'Two level' }
                    ]}
                    selectedKey={branch} />
            </Wizard.Step>
            {branch === 'one' && (
                <Wizard.Step
                    title='Single'>
                    Extra step
                </Wizard.Step>
            )}
            {branch === 'two' && <>
                <Wizard.Step
                    title='Double 1'>
                    Extra step 1
                </Wizard.Step>
                <Wizard.Step
                    title='Double 2'>
                    Extra step 2
                </Wizard.Step>
            </>}
            {branch === 'deep' && <>
                <Wizard.Step
                    branching={!branch2}
                    title='Deep branch choice'
                    valid={branch2}>
                    <Select
                        onSelect={(e, option) => setBranch2(option.key)}
                        options={[
                            { key: '1', text: 'Branch 1' },
                            { key: '2', text: 'Branch 2' }
                        ]}
                        selectedKey={branch2} />
                </Wizard.Step>
                {branch2 === '1' && <Wizard.Step
                    title='Deep step 1'>
                    Deep step 1
                </Wizard.Step>}
                {branch2 === '2' && <Wizard.Step
                    title='Deep step 2'>
                    Deep step 2
                </Wizard.Step>}
            </>}
            <Wizard.Step
                nextLabel='Complete'
                title='Finish'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>
    );
};

export const tabsModeBranching = () => {
    const [branch, setBranch] = useState(null);
    const [branch2, setBranch2] = useState(null);

    return (
        <Wizard
            contentSize='sm'
            headerSize='sm'
            navigationType='tabs'
            onCancel={() => alert('Wizard cancelled')}
            onComplete={() => alert('Wizard completed')}
            style={{ height: '20rem' }}>
            <Wizard.Step
                branching={!branch}
                title='Branch choice'
                valid={branch}>
                <Select
                    onSelect={(e, option) => setBranch(option.key)}
                    options={[
                        { key: 'one', text: 'One extra element' },
                        { key: 'two', text: 'Two extra elements (react fragment)' },
                        { key: 'none', text: 'Empty' },
                        { key: 'deep', text: 'Two level' }
                    ]}
                    selectedKey={branch} />
            </Wizard.Step>
            {branch === 'one' && (
                <Wizard.Step
                    title='Single'>
                    Extra step
                </Wizard.Step>
            )}
            {branch === 'two' && <>
                <Wizard.Step
                    title='Double 1'>
                    Extra step 1
                </Wizard.Step>
                <Wizard.Step
                    title='Double 2'>
                    Extra step 2
                </Wizard.Step>
            </>}
            {branch === 'deep' && <>
                <Wizard.Step
                    branching={!branch2}
                    title='Deep branch choice'
                    valid={branch2}>
                    <Select
                        onSelect={(e, option) => setBranch2(option.key)}
                        options={[
                            { key: '1', text: 'Branch 1' },
                            { key: '2', text: 'Branch 2' }
                        ]}
                        selectedKey={branch2} />
                </Wizard.Step>
                {branch2 === '1' && <Wizard.Step
                    title='Deep step 1'>
                    Deep step 1
                </Wizard.Step>}
                {branch2 === '2' && <Wizard.Step
                    title='Deep step 2'>
                    Deep step 2
                </Wizard.Step>}
            </>}
            <Wizard.Step
                nextLabel='Complete'
                title='Finish'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>
    );
};

export const sizes = () => (
    <>
        <h3>Small</h3>
        <Wizard contentSize='sm' headerSize='sm'>
            <Wizard.Step title='First Step'>
                <p>This is the first step.</p>
            </Wizard.Step>
            <Wizard.Step title='Second Step'>
                <p>This is the second step.</p>
            </Wizard.Step>
            <Wizard.Step title='Final Step'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>

        <h3>Medium</h3>
        <Wizard contentSize='md' headerSize='md'>
            <Wizard.Step title='First Step'>
                <p>This is the first step.</p>
            </Wizard.Step>
            <Wizard.Step title='Second Step'>
                <p>This is the second step.</p>
            </Wizard.Step>
            <Wizard.Step title='Final Step'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>

        <h3>Large</h3>
        <Wizard contentSize='lg' headerSize='lg'>
            <Wizard.Step title='First Step'>
                <p>This is the first step.</p>
            </Wizard.Step>
            <Wizard.Step title='Second Step'>
                <p>This is the second step.</p>
            </Wizard.Step>
            <Wizard.Step title='Final Step'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>

        <h3>XL</h3>
        <Wizard contentSize='xl' headerSize='xl'>
            <Wizard.Step title='First Step'>
                <p>This is the first step.</p>
            </Wizard.Step>
            <Wizard.Step title='Second Step'>
                <p>This is the second step.</p>
            </Wizard.Step>
            <Wizard.Step title='Final Step'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>
    </>
);

export const backgrounds = () => (
    <div style={{ backgroundColor: '#ff9', padding: '1rem' }}>
        <h3>Solid</h3>
        <Wizard background='solid'>
            <Wizard.Step title='First Step'>
                <p>This is the first step.</p>
            </Wizard.Step>
            <Wizard.Step title='Second Step'>
                <p>This is the second step.</p>
            </Wizard.Step>
            <Wizard.Step title='Final Step'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>

        <h3>List</h3>
        <Wizard background='list'>
            <Wizard.Step title='First Step'>
                <p>This is the first step.</p>
            </Wizard.Step>
            <Wizard.Step title='Second Step'>
                <p>This is the second step.</p>
            </Wizard.Step>
            <Wizard.Step title='Final Step'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>

        <h3>Transparent</h3>
        <Wizard background='transparent'>
            <Wizard.Step title='First Step'>
                <p>This is the first step.</p>
            </Wizard.Step>
            <Wizard.Step title='Second Step'>
                <p>This is the second step.</p>
            </Wizard.Step>
            <Wizard.Step title='Final Step'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard>
    </div>
);

/**
 * For custom logic, the component can be built manually from it's parts
 * instead of using the `Wizard` wrapper.
 */
export const manual = () => (
    <Wizard.Container>
        <Wizard.Navigation size='sm'>
            <Wizard.Step
                connector='active'
                glyph='accept'
                modifiers={['completed']}
                title='First Step'>
                <p>This is the first step.</p>
            </Wizard.Step>
            <Wizard.Step
                indicator='2'
                modifiers={['active', 'current']}
                title='Second Step'>
                <p>This is the second step.</p>
            </Wizard.Step>
            <Wizard.Step
                connector='none'
                indicator='3'
                modifiers={['upcoming']}
                title='Final Step'>
                <p>This is the final step.</p>
            </Wizard.Step>
        </Wizard.Navigation>
        <Wizard.Content size='sm'>
            <p>This is content</p>
            <Wizard.NextStep />
        </Wizard.Content>
        <Wizard.Footer label='Cancel'>
            <Button compact option='transparent'>Custom</Button>
        </Wizard.Footer>
    </Wizard.Container>
);
