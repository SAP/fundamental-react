/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import Button from '../../Button/Button';
import Dialog from '../Dialog';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';
import React, { useState } from 'react';

export default {
    title: 'Component API/Dialog',
    component: Dialog
};

export const primary = () => {
    let [showDialog, setShowDialog] = useState(false);
    return (
        <>
            <Button onClick={() => setShowDialog(true)}>
                Show Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>No</Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialog(false)}
                show={showDialog}
                title='Product Added'>
                <p><b>The new product have been added to your catalog.</b></p>
                <p>Automatic Product ID: <b>PD-3465334</b></p>
                <p>Expiration date: <b>13/03/2018</b></p>
            </Dialog>
        </>
    );
};


export const header = () => {
    let [showDialog, setShowDialog] = useState(false);
    return (
        <>
            <Button onClick={() => setShowDialog(true)}>
                Show Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>No</Button>),
                    (<Button>Yes</Button>)
                ]}
                header='Test header'
                onClose={() => setShowDialog(false)}
                show={showDialog}
                title='Product Added'>
                <p><b>The new product have been added to your catalog.</b></p>
                <p>Automatic Product ID: <b>PD-3465334</b></p>
                <p>Expiration date: <b>13/03/2018</b></p>
            </Dialog>
        </>
    );
};

export const subheader = () => {
    let [showDialog, setShowDialog] = useState(false);
    return (
        <>
            <Button onClick={() => setShowDialog(true)}>
                Show Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>No</Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialog(false)}
                show={showDialog}
                subheader='Test subheader'
                title='Product Added'>
                <p><b>The new product have been added to your catalog.</b></p>
                <p>Automatic Product ID: <b>PD-3465334</b></p>
                <p>Expiration date: <b>13/03/2018</b></p>
            </Dialog>
        </>
    );
};

/** By default dialog body has no horizontal paddings. Add a size to modify the padding. */

export const sizes = () => {
    let [showDialog, setShowDialog] = useState(false);
    let [showDialogMd, setShowDialogMd] = useState(false);
    let [showDialogLg, setShowDialogLg] = useState(false);
    let [showDialogXl, setShowDialogXl] = useState(false);
    return (
        <div className='fddocs-container'>
            <Button onClick={() => setShowDialog(true)}>
                Show Small Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>
                        No
                    </Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialog(false)}
                show={showDialog}
                size='s'
                title='Small Dialog'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Dialog>



            <Button onClick={() => setShowDialogMd(true)}>
                Show Medium Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>
                        No
                    </Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialogMd(false)}
                show={showDialogMd}
                size='m'
                title='Medium Dialog'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Dialog>


            <Button onClick={() => setShowDialogLg(true)}>
                Show Large Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>
                        No
                    </Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialogLg(false)}
                show={showDialogLg}
                size='l'
                title='Large Dialog'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Dialog>



            <Button onClick={() => setShowDialogXl(true)}>
                Show XL Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>
                        No
                    </Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialogXl(false)}
                show={showDialogXl}
                size='xl'
                title='XL Dialog'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Dialog>
        </div>
    );
};

export const small = () => (
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
);

small.parameters = {
    docs: { disable: true },
    storyshots: { disable: true }
};


export const medium = () => (
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
);

medium.parameters = {
    docs: { disable: true },
    storyshots: { disable: true }
};


export const large = () => (
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
);

large.parameters = {
    docs: { disable: true },
    storyshots: { disable: true }
};


export const xl = () => (
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
);

xl.parameters = {
    docs: { disable: true },
    storyshots: { disable: true }
};


export const dev = () => (
    <Dialog
        actions={[
            (<Button onClick={action('no-action')} option='transparent'>No</Button>),
            (<Button onClick={action('yes-action')} >Yes</Button>)
        ]}
        header={text('header', 'Test header')}
        onClose={action('on-close')}
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
);


dev.parameters = {
    docs: { disable: true },
    storyshots: { disable: true }
};

export const noStyles = () => {
    let [showDialog, setShowDialog] = useState(false);
    return (
        <>
            <Button cssNamespace='xxx' onClick={() => setShowDialog(true)}>
                Show Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>No</Button>),
                    (<Button>Yes</Button>)
                ]}
                cssNamespace='xxx'
                onClose={() => setShowDialog(false)}
                show={showDialog}
                title='Product Added'>
                <p><b>The new product have been added to your catalog.</b></p>
                <p>Automatic Product ID: <b>PD-3465334</b></p>
                <p>Expiration date: <b>13/03/2018</b></p>
            </Dialog>
        </>
    );
};
noStyles.parameters = { docs: { disable: true } };
