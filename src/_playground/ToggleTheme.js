import React from 'react';
import { useTheme } from './App';
import { FormItem, FormLabel, FormSelect } from '../Forms';

const ToggleTheme = () => {

    const themeToggle = useTheme();

    return (
        <FormItem>
            <FormLabel htmlFor='select-theme'>Select Theme</FormLabel>
            <FormSelect id='select-theme' onChange={(e) => themeToggle.toggle(e)}>
                <option value='default'>Default</option>
                <option value='light-dark'>Light Dark</option>
                <option value='dark'>Dark</option>
            </FormSelect>
        </FormItem>
    );
};

ToggleTheme.displayName = 'ToggleTheme';


export default ToggleTheme;
