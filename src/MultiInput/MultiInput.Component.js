import { MultiInput } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import React, { Component } from 'react';

export class MultiInputComponent extends Component {
  data = [
      'Apple',
      'Apricot',
      'Acai',
      'African Moringa',
      'Bearberry',
      'Bilberry',
      'Blood orange',
      'Barbadine',
      'Barbados cherry',
      'Balsam Apple',
      'Chokeberry',
      'Cranberry',
      'Cupuacu'
  ];

  constructor(props) {
      super(props);

      this.state = {
          data: []
      };
  }

  performTagsUpdate = aTags => {
      alert(aTags);
  };

  multiInputCode = `<MultiInput
  data={this.data}
  onTagsUpdate={this.performTagsUpdate}
  placeHolder="Select a Fruit"
/>`;

  multiInputCompactCode = `<MultiInput
  data={this.data}
  onTagsUpdate={this.performTagsUpdate}
  placeHolder="Select a Fruit"
  compact={true}
/>`;

  render() {
      return (
          <div>
              <Header>Multi Input</Header>
              <Description />
              <Import module='MultiInput' path='/fundamental-react/src/' />

              <Separator />

              <Properties
                  properties={[
                      {
                          name: 'data',
                          description:
                'array (Required) - Collection of items to display in the list.'
                      },
                      {
                          name: 'placeHolder',
                          description:
                'string - The text to use as placeholder when no text is entered.'
                      },
                      {
                          name: 'onTagsUpdate',
                          description:
                'func - Method to fire on add or remove of tag. Component returns array of tags selected.'
                      },
                      {
                          name: 'compact',
                          description:
                'bool - true: display compact style, false: default style'
                      }
                  ]}
                  type='Inputs' />

              <Separator />

              <h2>Default</h2>
              <Description>
          A text input when on focus will show list of items to select.
              </Description>
              <DocsTile>
                  <div>
                      <MultiInput
                          data={this.data}
                          onTagsUpdate={this.performTagsUpdate}
                          placeHolder='Select a Fruit' />
                  </div>
              </DocsTile>
              <DocsText>{this.multiInputCode}</DocsText>

              <Separator />

              <h2>Compact Style</h2>
              <Description>
          A text input when on focus will show list of items to select, but with
          a compact input box.
              </Description>
              <DocsTile>
                  <div>
                      <MultiInput
                          compact
                          data={this.data}
                          onTagsUpdate={this.performTagsUpdate}
                          placeHolder='Select a Fruit' />
                  </div>
              </DocsTile>
              <DocsText>{this.multiInputCompactCode}</DocsText>

              <Separator />
          </div>
      );
  }
}
