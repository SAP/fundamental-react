import path from 'path';
import { Button, FormInput, FormItem, FormLabel, FormSet, Modal } from '../';
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
    showHideConfirmModal = () => {
        this.setState(
            prevState => ({
                bShowComfirmModal: !prevState.bShowComfirmModal
            })
        );
    };

    // show / hide form modal
    showHideFormModal = () => {
        this.setState(
            prevState => ({
                bShowFormModal: !prevState.bShowFormModal
            })
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
                    <React.Fragment>
                        <Button onClick={this.showHideModal}>
                            Show Information Modal
                        </Button>
                        <Modal onClose={this.showHideModal} show={this.state.bShowInfoModal}
                            title='Product Added'>
                            <p><b>The new product have been added to your catalog.</b></p>
                            <p>Automatic Product ID: <b>PD-3465334</b></p>
                            <p>Expiration date: <b>13/03/2018</b></p>
                        </Modal>
                    </React.Fragment>
                </Example>

                <Example
                    centered
                    description={`This is used to confirm with the user before continuing with a destructive or
                        complex action. In this case, the **Modal** has action buttons at the bottom.`}
                    title='Confirmation Modal'>
                    <React.Fragment>
                        <Button onClick={this.showHideConfirmModal}>
                            Show Confirmation Modal
                        </Button>
                        <Modal
                            actions={
                                <React.Fragment>
                                    <Button onClick={() => this.showHideConfirmModal('No')} option='light'>
                                        No
                                    </Button>
                                    <Button onClick={() => this.showHideConfirmModal('Yes')}>
                                        Yes
                                    </Button>
                                </React.Fragment>
                            }
                            onClose={this.showHideConfirmModal}
                            show={this.state.bShowComfirmModal}
                            title='Delete'>
                                Do you want to delete item <b>X</b>?
                        </Modal>
                    </React.Fragment>
                </Example>

                <Example
                    centered
                    description='This is used for short forms in order to collect information from the user.'
                    title='Form Modal'>
                    <React.Fragment>
                        <Button onClick={this.showHideFormModal}>
                            Show Form Modal
                        </Button>
                        <Modal
                            actions={
                                <React.Fragment>
                                    <Button onClick={() => this.showHideFormModal('Cancel')} option='light'>
                                        Cancel
                                    </Button>
                                    <Button onClick={() => this.showHideFormModal('Invite')}>Invite</Button>
                                </React.Fragment>
                            }
                            onClose={this.showHideFormModal}
                            show={this.state.bShowFormModal}
                            title='Invite user'>
                            <FormSet>
                                <FormItem>
                                    <FormLabel required>Email</FormLabel>
                                    <FormInput
                                        onChange={this.updateEmailAddress}
                                        value={this.state.emailAddress} />
                                </FormItem>
                            </FormSet>
                        </Modal>
                    </React.Fragment>
                </Example>

            </ComponentPage>
        );
    }
}
