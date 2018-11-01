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

  searchInputCode = `<SearchInput
  placeHolder="Enter a fruit"
  performSearch={this.performSearch}
/>`;

  autoCompleteSearchInputCode = `<SearchInput
  placeHolder="Enter a fruit"
  data={this.state.data}
  autoComplete={this.performAutoComplete}
  performSearch={this.performSearch}
/>`;

  performAutoComplete = searchTerm => {
    const searchResults = this.data.filter(item => {
      return item.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    this.setState({ data: searchResults });
  };

  performSearch = searchTerm => {
    console.log(`search fired for ${searchTerm}`);
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
              name: 'performSearch',
              description:
                'Func (Required) - Method to execute on click of Search icon or selection of auto-complete item.'
            },
            {
              name: 'placeholder',
              description:
                'String - The text to use as placeholder when no text is entered.'
            },
            {
              name: 'data',
              description:
                'Array - Collection of items to display in auto-complete list.'
            }
          ]}
        />

        <Separator />

        <h2>Default Search</h2>
        <Description>A text input with Search button.</Description>
        <DocsTile>
          <div>
            <SearchInput
              placeHolder="Enter a fruit"
              performSearch={this.performSearch}
            />
          </div>
        </DocsTile>
        <DocsText>{this.searchInputCode}</DocsText>

        <Separator />

        <h2>Auto Complete Search</h2>
        <Description>
          A text input with Search button that includes auto-complete
          functionality
        </Description>
        <DocsTile>
          <div>
            <SearchInput
              placeHolder="Enter a fruit"
              data={this.state.data}
              autoComplete={this.performAutoComplete}
              performSearch={this.performSearch}
            />
          </div>
        </DocsTile>
        <DocsText>{this.autoCompleteSearchInputCode}</DocsText>

        <Separator />
      </div>
    );
  }
}
