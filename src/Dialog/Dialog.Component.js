/* eslint-disable no-console */
import path from 'path';
import { Button, Dialog } from '..';
import { ComponentPage, Example } from '../_playground';
import React, { Component } from 'react';

export class DialogComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    toggleDialog = (name) => this.setState( prevState => ({ [name]: !prevState[name] }));

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
                    description={`This is used to present information to the user when the **MessageStrip** component
                        doesn’t fit all the information.`}
                    title='Informational Dialog'>
                    <>
                        <Button onClick={() => this.toggleDialog('info')}>
                            Show Dialog
                        </Button>
                        <Dialog
                            actions={[
                                (<Button option='transparent'>
                                        No
                                </Button>),
                                (<Button>Yes</Button>)
                            ]}
                            onClose={() => this.toggleDialog('info')}
                            show={this.state.info}
                            title='Product Added'>
                            <p><b>The new product have been added to your catalog.</b></p>
                            <p>Automatic Product ID: <b>PD-3465334</b></p>
                            <p>Expiration date: <b>13/03/2018</b></p>
                        </Dialog>
                    </>
                </Example>

                <Example
                    centered
                    description={'By default dialog body has no horizontal paddings, use the **size** property to change the padding.'}
                    title='Sizes'>
                    <>
                        <Button onClick={() => this.toggleDialog('small')}>
                            Show Small Dialog
                        </Button>
                        <Dialog
                            actions={[
                                (<Button option='transparent'>
                                        No
                                </Button>),
                                (<Button>Yes</Button>)
                            ]}
                            onClose={() => this.toggleDialog('small')}
                            show={this.state.small}
                            size='s'
                            title='Small Dialog'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Dialog>

                        <br />

                        <Button onClick={() => this.toggleDialog('medium')}>
                            Show Medium Dialog
                        </Button>
                        <Dialog
                            actions={[
                                (<Button option='transparent'>
                                        No
                                </Button>),
                                (<Button>Yes</Button>)
                            ]}
                            onClose={() => this.toggleDialog('medium')}
                            show={this.state.medium}
                            size='m'
                            title='Medium Dialog'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Dialog>

                        <br />

                        <Button onClick={() => this.toggleDialog('large')}>
                            Show Large Dialog
                        </Button>
                        <Dialog
                            actions={[
                                (<Button option='transparent'>
                                        No
                                </Button>),
                                (<Button>Yes</Button>)
                            ]}
                            onClose={() => this.toggleDialog('large')}
                            show={this.state.large}
                            size='l'
                            title='Large Dialog'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Dialog>

                        <br />

                        <Button onClick={() => this.toggleDialog('xl')}>
                            Show XL Dialog
                        </Button>
                        <Dialog
                            actions={[
                                (<Button option='transparent'>
                                        No
                                </Button>),
                                (<Button>Yes</Button>)
                            ]}
                            onClose={() => this.toggleDialog('xl')}
                            show={this.state.xl}
                            size='xl'
                            title='XL Dialog'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Dialog>

                        <br />



                    </>
                </Example>

            </ComponentPage>
        );
    }
}
