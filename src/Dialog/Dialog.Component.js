import path from 'path';
import { Button, Dialog } from '..';
import { ComponentPage, Example } from '../_playground';
import React, { Component } from 'react';

export class DialogComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bShowComfirmDialog: false
        };
    }

    // show / hide confirmation dialog
    showHideConfirmDialog = () => {
        this.setState(
            prevState => ({
                bShowComfirmDialog: !prevState.bShowComfirmDialog
            })
        );
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
                    <>
                        <Button onClick={this.showHideConfirmDialog}>
                            Show Dialog
                        </Button>
                        <Dialog
                            actions={[
                                (<Button onClick={() => this.showHideConfirmDialog('No')} option='light'>
                                        No
                                </Button>),
                                (<Button onClick={() => this.showHideConfirmDialog('Yes')}>Yes</Button>)
                            ]}
                            onClose={this.showHideConfirmDialog}
                            show={this.state.bShowComfirmDialog}
                            title='Product Added'>
                            <p><b>The new product have been added to your catalog.</b></p>
                            <p>Automatic Product ID: <b>PD-3465334</b></p>
                            <p>Expiration date: <b>13/03/2018</b></p>
                        </Dialog>
                    </>
                </Example>

            </ComponentPage>
        );
    }
}
