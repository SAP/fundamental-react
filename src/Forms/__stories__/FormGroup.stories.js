import FormGroup from '../FormGroup';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import InputGroup from '../../InputGroup/InputGroup';
import React from 'react';

export default {
    title: 'Component API/Forms/FormGroup',
    component: FormGroup
};

export const primary = () => (
    <FormGroup>
        <FormLabel>Left Aligned Text Addon</FormLabel>
        <FormItem>
            <InputGroup
                addon='$'
                addonPos='before'
                inputValue='1234567890' />
        </FormItem>
    </FormGroup>
);
