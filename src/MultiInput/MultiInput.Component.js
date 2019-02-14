import { MultiInput } from '../';
import path from 'path';
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
              <Import sourceModulePath={path.join(__dirname, './MultiInput')} />

              <Separator />

              <Properties sourceModulePath={path.join(__dirname, './MultiInput')} />

              <Separator />

              <h2>Default</h2>
              <Description>
                  When input receives focus, it will show list of items to select.
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
          </div>
      );
  }
}
