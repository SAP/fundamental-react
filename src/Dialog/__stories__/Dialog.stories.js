import Button from '../../Button/Button';
import Dialog from '../Dialog';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Dialog', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            header={text('header', 'Test header')}
            show={boolean('show', true)}
            size={select('size', {
                none: null,
                s: 's',
                m: 'm',
                l: 'l',
                xl: 'xl'
            })}
            subheader={text('subheader', 'Test Subheader')}
            title={text('title', 'Test title')}>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ))
    .add('Standard', () => (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            show title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ))
    .add('header', () => (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            header='Test header'
            show title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ))
    .add('subheader', () => (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            show
            subheader='Test subheader'
            title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ))
    .add('Size | small', () => (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            show
            size='s'
            title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ))
    .add('Size | medium', () => (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            show
            size='m'
            title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ))
    .add('Size | large', () => (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            show
            size='l'
            title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ))
    .add('Size | extra large', () => (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            show
            size='xl'
            title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ))
    .add('disable styles', () => (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            disableStyles show
            title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ));
