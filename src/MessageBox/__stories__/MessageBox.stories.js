/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import MessageBox from '../MessageBox';
import React, { useState } from 'react';

export default {
    title: 'Component API/MessageBox',
    component: MessageBox
};

export const primary = () => {
    let [showMessageBox, setShowMessageBox] = useState(false);
    return (
        <>
            <Button onClick={() => setShowMessageBox(true)}>
                Show Message Box
            </Button>
            <MessageBox
                actions={[
                    (<Button compact>OK</Button>)
                ]}
                onClose={() => setShowMessageBox(false)}
                show={showMessageBox}
                title='Message Box'>
                <p>This is a message box.</p>
            </MessageBox>
        </>
    );
};

export const types = () => {
    let [showConfirmationMessageBox, setShowConfirmationMessageBox] = useState(false);
    let [showErrorMessageBox, setShowErrorMessageBox] = useState(false);
    let [showSuccessMessageBox, setShowSuccessMessageBox] = useState(false);
    let [showWarningMessageBox, setShowWarningMessageBox] = useState(false);
    let [showInformationMessageBox, setShowInformationMessageBox] = useState(false);
    return (
        <div className='fddocs-container'>
            <Button onClick={() => setShowConfirmationMessageBox(true)}>Confirmation</Button>
            <Button onClick={() => setShowErrorMessageBox(true)} type='negative'>Error</Button>
            <Button onClick={() => setShowSuccessMessageBox(true)} type='positive'>Success</Button>
            <Button onClick={() => setShowWarningMessageBox(true)} type='attention'>Warning</Button>
            <Button onClick={() => setShowInformationMessageBox(true)}>Information</Button>

            <MessageBox
                actions={[
                    (<Button compact option='emphasized'>Yes</Button>),
                    (<Button compact>No</Button>)
                ]}
                onClose={() => setShowConfirmationMessageBox(false)}
                show={showConfirmationMessageBox}
                title='Confirmation'
                type='confirmation'>
                <p>Are you sure?</p>
            </MessageBox>

            <MessageBox
                actions={[
                    (<Button compact>OK</Button>)
                ]}
                onClose={() => setShowErrorMessageBox(false)}
                show={showErrorMessageBox}
                title='Error'
                type='error'>
                <p>This is an error message!</p>
            </MessageBox>

            <MessageBox
                actions={[
                    (<Button compact>OK</Button>)
                ]}
                onClose={() => setShowSuccessMessageBox(false)}
                show={showSuccessMessageBox}
                title='Success'
                type='success'>
                <p>This is a success message.</p>
            </MessageBox>

            <MessageBox
                actions={[
                    (<Button compact>OK</Button>)
                ]}
                onClose={() => setShowWarningMessageBox(false)}
                show={showWarningMessageBox}
                title='Warning'
                type='warning'>
                <p>This is a warning!</p>
            </MessageBox>

            <MessageBox
                actions={[
                    (<Button compact>OK</Button>)
                ]}
                onClose={() => setShowInformationMessageBox(false)}
                show={showInformationMessageBox}
                title='Information'
                type='information'>
                <p>This is some information.</p>
            </MessageBox>
        </div>
    );
};

export const sizes = () => {
    const [showMessageBoxSm, setShowMessageBoxSm] = useState(false);
    const [showMessageBoxMd, setShowMessageBoxMd] = useState(false);
    const [showMessageBoxLg, setShowMessageBoxLg] = useState(false);
    const [showMessageBoxXl, setShowMessageBoxXl] = useState(false);


    return (
        <div className='fddocs-container'>
            <Button onClick={() => setShowMessageBoxSm(true)}>Small</Button>
            <Button onClick={() => setShowMessageBoxMd(true)}>Medium</Button>
            <Button onClick={() => setShowMessageBoxLg(true)}>Large</Button>
            <Button onClick={() => setShowMessageBoxXl(true)}>Extra Large</Button>

            <MessageBox
                actions={[
                    (<Button compact>OK</Button>)
                ]}
                onClose={() => setShowMessageBoxSm(false)}
                show={showMessageBoxSm}
                size='s'
                title='Small Message Box'>
                <p>This is a message box.</p>
            </MessageBox>

            <MessageBox
                actions={[
                    (<Button compact>OK</Button>)
                ]}
                onClose={() => setShowMessageBoxMd(false)}
                show={showMessageBoxMd}
                size='m'
                title='Medium Message Box'>
                <p>This is a message box.</p>
            </MessageBox>

            <MessageBox
                actions={[
                    (<Button compact>OK</Button>)
                ]}
                onClose={() => setShowMessageBoxLg(false)}
                show={showMessageBoxLg}
                size='l'
                title='Large Message Box'>
                <p>This is a message box.</p>
            </MessageBox>

            <MessageBox
                actions={[
                    (<Button compact>OK</Button>)
                ]}
                onClose={() => setShowMessageBoxXl(false)}
                show={showMessageBoxXl}
                size='xl'
                title='Extra Large Message Box'>
                <p>This is a message box.</p>
            </MessageBox>
        </div>
    );
};
