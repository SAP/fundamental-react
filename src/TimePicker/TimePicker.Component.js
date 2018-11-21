import React from 'react';
import {TimePicker} from '../';

import {
  DocsTile,
  DocsText,
  Separator,
  Header,
  Description,
  Import,
  Properties
} from '../';

export const TimePickerComponent = () => {
  return (
    <div>
      <Header>Time</Header>
      <TimePicker format12Hours={true}/> {/* <Description />{' '} */}
    </div>
  );
};
