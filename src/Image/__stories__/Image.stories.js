import Image from '../Image';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Image', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Image photo='https://content.fortune.com/wp-content/uploads/2019/07/hippocorn.jpg'
            size='l' />
    ))
    .add('disable styles', () => (
        <Image disableStyles
            photo='https://content.fortune.com/wp-content/uploads/2019/07/hippocorn.jpg'
            size='l' />
    ))
    .add('custom styles', () => (
        <Image
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}
            photo='https://content.fortune.com/wp-content/uploads/2019/07/hippocorn.jpg'
            size='l' />
    ));
