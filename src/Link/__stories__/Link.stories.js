import Link from '../Link';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Link', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Link href='#'>Default</Link>
    ))
    .add('disable styles', () => (
        <Link disableStyles href='#'>Default</Link>
    ))
    .add('custom styles', () => (
        <Link
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}
            href='#'>
            Default
        </Link>
    ));
