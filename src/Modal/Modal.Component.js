import path from 'path';
import { Button, Modal } from '../';
import { ComponentPage, Example } from '../_playground';
import React, { Component } from 'react';

export class ModalComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bShowInfoModal: false,
            bShowComfirmModal: false,
            bShowFormModal: false,
            emailAddress: ''
        };

        this.txtEmailRef = React.createRef();
    }

    // show / hide information modal
    showHideModal = () => {
        this.setState(prevState => ({
            bShowInfoModal: !prevState.bShowInfoModal
        }));
    };

    // show / hide confirmation modal
    showHideConfirmModal = response => {
        this.setState(
            prevState => ({
                bShowComfirmModal: !prevState.bShowComfirmModal
            }),
            () => {
                if (typeof response !== 'object' && typeof response !== 'undefined') {
                    alert(`You selected - ${response}`);
                }
            }
        );
    };

    // show / hide form modal
    showHideFormModal = response => {
        this.setState(
            prevState => ({
                bShowFormModal: !prevState.bShowFormModal
            }),
            () => {
                if (typeof response !== 'object' && typeof response !== 'undefined') {
                    if (response.toLowerCase() === 'invite' && this.state.emailAddress !== '') {
                        alert(`Invite sent to ${this.state.emailAddress}`);
                    }
                }

                // set focus to email text box
                if (this.state.bShowFormModal) {
                    this.txtEmailRef.current.focus();
                } else {
                    this.setState({
                        emailAddress: ''
                    });
                }
            }
        );
    };

    updateEmailAddress = event => {
        const newEmail = event.target.value;

        this.setState({
            emailAddress: newEmail
        });
    };

    render() {
        return (
            <ComponentPage
                description={`The **Modal** is a container generally displayed in response to an action. It is used for short forms,
                    confirmation messages or to display contextual information that does not require a page.\n\nTo 
                    display the **Modal** dialog, pass a boolean value to the \`show\` property of the component. It is
                    recommended to store this value as a state property in the parent control or application.`}
                sourceModulePath={path.join(__dirname, './Modal')}
                title='Modal'>

                <Example
                    centered
                    description={`This is used to present information to the user when the **Alert** component
                        doesn’t fit all the information.`}
                    title='Informational Modal'>
                    <div>
                        <button className='fd-button' onClick={this.showHideModal}>
                            Show Information Modal
                        </button>
                        <Modal onClose={this.showHideModal} show={this.state.bShowInfoModal}
                            title='Product Added'>
                            <div>
                                <b>The new product have been added to your catalog.</b>
                                <br />
                                <br />
                                Automatic Product ID: <b>PD-3465334</b>
                                <br />
                                <br />
                                Expiration date: <b>13/03/2018</b>
                                <br />
                                <br />
                            </div>
                        </Modal>
                    </div>
                </Example>

                <Example
                    centered
                    description={`This is used to confirm with the user before continuing with a destructive or
                        complex action. In this case, the **Modal** has action buttons at the bottom.`}
                    title='Confirmation Modal'>
                    <div>
                        <button className='fd-button' onClick={this.showHideConfirmModal}>
                            Show Confirmation Modal
                        </button>
                        <Modal
                            actions={
                                <React.Fragment>
                                    <Button onClick={() => this.showHideConfirmModal('No Way')} type='standard'>
                                        No Way
                                    </Button>
                                    <Button onClick={() => this.showHideConfirmModal('Sure')}>Sure</Button>
                                </React.Fragment>
                            }
                            onClose={this.showHideConfirmModal}
                            show={this.state.bShowComfirmModal}
                            title='Delete'>
                            <div>
                                Do you want to delete item <b>X</b>?
                            </div>
                        </Modal>
                    </div>
                </Example>

                <Example
                    centered
                    description='This is used for short forms in order to collect information from the user.'
                    title='Form Modal'>
                    <div>
                        <button className='fd-button' onClick={this.showHideFormModal}>
                            Show Form Modal
                        </button>
                        <Modal
                            actions={
                                <React.Fragment>
                                    <Button onClick={() => this.showHideFormModal('Cancel')} type='standard'>
                                        Cancel
                                    </Button>
                                    <Button onClick={() => this.showHideFormModal('Invite')}>Invite</Button>
                                </React.Fragment>
                            }
                            onClose={this.showHideFormModal}
                            show={this.state.bShowFormModal}
                            title='Invite user'>
                            <div className='fd-form__group'>
                                <div className='fd-form__item'>
                                    <label className='fd-form__label is-required'>Email</label>
                                    <input
                                        className='fd-form__control'
                                        onChange={this.updateEmailAddress}
                                        ref={this.txtEmailRef}
                                        type='text'
                                        value={this.state.emailAddress} />
                                </div>
                            </div>
                        </Modal>
                    </div>
                </Example>

            </ComponentPage>
        );
    }
}
