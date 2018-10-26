import React from 'react';
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

export const ModalComponent = () => {
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
            name: 'itemsTotal',
            description:
              'Number (required) - Total number of items. itemsTotal / itemsPerPage calculates how many navigation items should be shown in the control.'
          }
        ]}
      />

      <Separator />

      <h2>Informational Modal</h2>
      <Description>
        This is used to present information to the user but the Alert Component
        doesn’t fit all the information.
      </Description>
      <DocsTile>
        <Modal title="My Modal Box" primaryBtnText="OK" secondaryBtnText="Nope">
          <button>Hello</button>
        </Modal>
      </DocsTile>
      <DocsText>{`<Modal />`}</DocsText>
      <Separator />
    </div>
  );
};
