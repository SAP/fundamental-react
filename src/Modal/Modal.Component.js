import React, { Component } from 'react';
import {
  DocsTile,
  DocsText,
  Separator,
  Header,
  Description,
  Import,
  Properties,
  Modal
} from '../';

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

  informationModalCode = `<Modal title="Product Added" onClose={this.showHideModal}>
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
</Modal>`;

  confirmationModalCode = `<Modal title="Delete" onClose={this.showHideConfirmModal} primaryBtnText="Sure" secondaryBtnText="No Way">
  <div>
    Do you want to delete item <b>X</b>?
  </div>
</Modal>`;

  formModalCode = `<Modal title="Invite user" onClose={this.showHideFormModal} primaryBtnText="Invite" secondaryBtnText="Cancel">
  <div className="fd-form__group">
    <div className="fd-form__item">
      <label
        className="fd-form__label is-required"
        htmlFor="input-2"
      >
        Email*
      </label>
      <input
        className="fd-form__control"
        type="text"
        id="input-2"
      />
    </div>
  </div>
</Modal>`;

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
        if (typeof response !== 'object' && response !== undefined) {
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
        if (typeof response !== 'object' && response !== undefined) {
          if (
            response.toLowerCase() === 'invite' &&
            this.state.emailAddress !== ''
          ) {
            alert(`Invite sent to ${this.state.emailAddress}`);
          }
        }

        // set focus to email text box
        if (this.state.bShowFormModal) {
          this.txtEmailRef.current.focus();
        } else {
          this.setState(prevState => ({
            emailAddress: ''
          }));
        }
      }
    );
  };

  updateEmailAddress = event => {
    const newEmail = event.target.value;

    this.setState(prevState => ({
      emailAddress: newEmail
    }));
  };

  render() {
    return (
      <div>
        <Header>Modal</Header>
        <Description>
          The modal is a container generally displayed in response to an action.
          It is used for short forms, confirmation messages or to display
          contextual information that does not require a page. The modal should
          always be used in conjunction with the Application Layout Containers.
          See an example App layout page with Modal.
        </Description>
        <Import module="Modal" path="/fundamental-react/src/" />

        <Separator />

        <Properties
          type="Inputs"
          properties={[
            {
              name: 'title',
              description: 'String (required) - Title for modal dialog box'
            },
            {
              name: 'primaryBtnText',
              description:
                'String - Text to display on primary button in footer. Footer and buttons will not display unless "primaryBtnText" value is set.'
            },
            {
              name: 'secondaryBtnText',
              description:
                'String - Text to display on secondary button in footer. Footer and buttons will not display unless "primaryBtnText" value is set.'
            }
          ]}
        />

        <Separator />

        <h2>Informational Modal</h2>
        <Description>
          This is used to present information to the user but the Alert
          Component doesn’t fit all the information.
        </Description>
        <DocsTile>
          <button onClick={this.showHideModal}>Show Information Modal</button>
          {this.state.bShowInfoModal ? (
            <Modal title="Product Added" onClose={this.showHideModal}>
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
          ) : (
            ''
          )}
        </DocsTile>
        <DocsText>{this.informationModalCode}</DocsText>
        <Separator />

        <h2>Confirmation Modal</h2>
        <Description>
          This is used to confirm with the user before continuing with a
          destructive or complex action. In this case, the modal has action
          buttons at the bottom.
        </Description>
        <DocsTile>
          <button onClick={this.showHideConfirmModal}>
            Show Confirmation Modal
          </button>
          {this.state.bShowComfirmModal ? (
            <Modal
              title="Delete"
              onClose={this.showHideConfirmModal}
              primaryBtnText="Sure"
              secondaryBtnText="No Way"
            >
              <div>
                Do you want to delete item <b>X</b>?
              </div>
            </Modal>
          ) : (
            ''
          )}
        </DocsTile>
        <DocsText>{this.confirmationModalCode}</DocsText>
        <Separator />

        <h2>Form Modal</h2>
        <Description>
          This is used for short forms in order to collect information from the
          user.
        </Description>
        <DocsTile>
          <button onClick={this.showHideFormModal}>Show Form Modal</button>
          {this.state.bShowFormModal ? (
            <Modal
              title="Invite user"
              onClose={this.showHideFormModal}
              primaryBtnText="Invite"
              secondaryBtnText="Cancel"
            >
              <div className="fd-form__group">
                <div className="fd-form__item">
                  <label
                    className="fd-form__label is-required"
                    htmlFor="input-2"
                  >
                    Email*
                  </label>
                  <input
                    className="fd-form__control"
                    type="text"
                    id="input-2"
                    value={this.state.emailAddress}
                    onChange={this.updateEmailAddress}
                    ref={this.txtEmailRef}
                  />
                </div>
              </div>
            </Modal>
          ) : (
            ''
          )}
        </DocsTile>
        <DocsText>{this.formModalCode}</DocsText>
        <Separator />
      </div>
    );
  }
}
