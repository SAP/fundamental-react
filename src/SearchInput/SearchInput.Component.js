import React, { Component } from 'react';
import {
  DocsTile,
  DocsText,
  Separator,
  Header,
  Description,
  Import,
  Properties
} from '../';
import { SearchInput } from './SearchInput';

export class SearchInputComponent extends Component {
  data = [
    'Apple',
    'Apricot',
    'Avocado',
    'Abiu',
    'Acai',
    'Acerola',
    'Ackee',
    'Arhat',
    'American Mayapple',
    'African Cherry Orange',
    'Amazon grape',
    'Araza',
    'Alligator apple',
    'Ambarella',
    'African Cucumber',
    'African Medlar',
    'African Moringa',
    'Agave Plant',
    'Aizen Fruit',
    'American Black Elderberry',
    'American Chestnut',
    'American Hazelnut Shrub',
    'American Red Raspberry',
    'Aprium',
    'Atemoya',
    'Atherton Raspberry Banana',
    'Berry',
    'Bayberry',
    'Blueberry',
    'Blackberry',
    'Boysenberry',
    'Bearberry',
    'Bilberry',
    'Barberry',
    'Buffaloberry',
    'Black cherry',
    'Beach plum',
    'Black raspberry',
    'Black apple',
    'Blue tongue',
    'Bolwarra',
    'Burdekin plum',
    'Bramble',
    'Broadleaf Bramble',
    'Black mulberry',
    'Blood orange',
    'Babaco',
    'Bael',
    'Barbadine',
    'Barbados cherry',
    'Betel nut',
    'Bilimbi',
    'Bitter gourd',
    'Black sapote',
    'Bottle gourd',
    'Brazil nut',
    'Breadfruit',
    'Burmese grape',
    'Blackcurrant',
    'Bignay',
    'Beechnut',
    'Bacuri Fruit',
    'Balsam Apple',
    'Batuan Fruit',
    'Blood Lime',
    'Brazilian Guava',
    'Brush cherry Cantaloupe',
    'Chokeberry',
    'Cranberry',
    'Cloudberry',
    'Crowberry',
    'Conkerberry',
    'Calabash',
    'Calamansi',
    'Calamondins',
    'Canistel',
    'Cape Gooseberry',
    'Capuli Cherry',
    'Carob Fruit',
    'Cashew Apple',
    'Cedar Bay Cherry',
    'Cempedak',
    'Ceylon Gooseberry',
    'Charichuelo Fruit',
    'Chayote Fruit',
    'Cherimoya Fruit',
    'cherry Fruit',
    'Chokecherry',
    'Citrofortunella',
    'Clementines',
    'Cluster Fig',
    'Coco Plum',
    'Common Apple Berry',
    'Cornelian Cherry',
    'Cucumber',
    'Cupuacu'
  ];

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  defaultHelpPlacement = `<InlineHelp text="Lorem ipsum dolor sit amet, consectetur adipiscing." placement="bottom-right"/>`;

  doSearch = searchTerm => {
    const searchResults = this.data.filter(item => {
      return item.startsWith(searchTerm);
    });

    this.setState({ data: searchResults });
  };

  performSearch = () => {
    console.log('search fired');
  };

  render() {
    return (
      <div>
        <Header>Search Input</Header>
        <Description />
        <Import module="SearchInput" path="/fundamental-react/src/" />

        <Separator />

        <Properties
          type="Inputs"
          properties={[
            {
              name: 'text',
              description:
                'String - The text to display in the inline help pop-up.'
            },
            {
              name: 'placement',
              description:
                'String - Location for where to display the inline help pop-up.'
            }
          ]}
        />

        <Separator />

        <h2>Default Search</h2>
        <Description>
          The default positioning of inline help component is bottom right.
        </Description>
        <DocsTile>
          <div>
            <SearchInput
              placeHolder="Enter a fruit"
              data={this.state.data}
              search={this.doSearch}
              performSearch={this.performSearch}
            />
          </div>
        </DocsTile>
        <DocsText>{this.defaultHelpPlacement}</DocsText>

        <Separator />
      </div>
    );
  }
}
