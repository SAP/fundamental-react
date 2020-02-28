import path from 'path';
import { Button, Dialog, FormInput, FormItem, FormLabel, FormSet } from '..';
import { ComponentPage, Example } from '../_playground';
import React, { Component } from 'react';

export class DialogComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bShowInfoDialog: false,
            bShowComfirmDialog: false,
            bShowFormDialog: false,
            emailAddress: ''
        };

        this.txtEmailRef = React.createRef();
    }

    // show / hide information dialog
    showHideDialog = () => {
        this.setState(prevState => ({
            bShowInfoDialog: !prevState.bShowInfoDialog
        }));
    };

    // show / hide confirmation dialog
    showHideConfirmDialog = () => {
        this.setState(
            prevState => ({
                bShowComfirmDialog: !prevState.bShowComfirmDialog
            })
        );
    };

    // show / hide form dialog
    showHideFormDialog = () => {
        this.setState(
            prevState => ({
                bShowFormDialog: !prevState.bShowFormDialog
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
                description={`The **Dialog** is a container generally displayed in response to an action. It is used for short forms,
                    confirmation messages or to display contextual information that does not require a page.\n\nTo 
                    display the **Dialog** dialog, pass a boolean value to the \`show\` property of the component. It is
                    recommended to store this value as a state property in the parent control or application.`}
                sourceModulePath={path.join(__dirname, './Dialog')}
                title='Dialog'>

                <Example
                    centered
                    description={`This is used to present information to the user when the **Alert** component
                        doesn’t fit all the information.`}
                    title='Informational Dialog'>
                    <React.Fragment>
                        <Button onClick={this.showHideDialog}>
                            Show Information Dialog
                        </Button>
                        <Dialog onClose={this.showHideDialog} show={this.state.bShowInfoDialog}
                            title='Product Added'>
                            <p><b>The new product have been added to your catalog.</b></p>
                            <p>Automatic Product ID: <b>PD-3465334</b></p>
                            <p>Expiration date: <b>13/03/2018</b></p>
                        </Dialog>
                    </React.Fragment>
                </Example>

                <Example
                    centered
                    description={`This is used to confirm with the user before continuing with a destructive or
                        complex action. In this case, the **Dialog** has action buttons at the bottom.`}
                    title='Confirmation Dialog'>
                    <React.Fragment>
                        <Button onClick={this.showHideConfirmDialog}>
                            Show Confirmation Dialog
                        </Button>
                        <Dialog
                            actions={
                                <React.Fragment>
                                    <Button onClick={() => this.showHideConfirmDialog('No')} option='light'>
                                        No
                                    </Button>
                                    <Button onClick={() => this.showHideConfirmDialog('Yes')}>
                                        Yes
                                    </Button>
                                </React.Fragment>
                            }
                            onClose={this.showHideConfirmDialog}
                            show={this.state.bShowComfirmDialog}
                            title='Delete'>
                                Do you want to delete item <b>X</b>?
                        </Dialog>
                    </React.Fragment>
                </Example>

                <Example
                    centered
                    description='This is used for short forms in order to collect information from the user.'
                    title='Form Dialog'>
                    <React.Fragment>
                        <Button onClick={this.showHideFormDialog}>
                            Show Form Dialog
                        </Button>
                        <Dialog
                            actions={
                                <React.Fragment>
                                    <Button onClick={() => this.showHideFormDialog('Cancel')} option='light'>
                                        Cancel
                                    </Button>
                                    <Button onClick={() => this.showHideFormDialog('Invite')}>Invite</Button>
                                </React.Fragment>
                            }
                            onClose={this.showHideFormDialog}
                            show={this.state.bShowFormDialog}
                            title='Invite user'>
                            <FormSet>
                                <FormItem>
                                    <FormLabel required>Email</FormLabel>
                                    <FormInput
                                        onChange={this.updateEmailAddress}
                                        value={this.state.emailAddress} />
                                </FormItem>
                            </FormSet>
                        </Dialog>
                    </React.Fragment>
                </Example>

            </ComponentPage>
        );
    }
}
