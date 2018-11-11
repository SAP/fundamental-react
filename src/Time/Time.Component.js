import React from "react";
import {Time} from "./Time";
// import { DocsTile, DocsText, Separator, Header, Description, Import,
// Properties } from '../';
import {
  DocsTile,
  DocsText,
  Separator,
  Header,
  Description,
  Import,
  Properties
} from "../";

export const TimeComponent = () => {
  const tagCode = `<Tag>Bibendum</Tag>
<Tag>Lorem</Tag>
<Tag>Dolor</Tag>
<Tag>Filter</Tag>`;

  const closeAction = (name, event) => alert(`close ${name}! You can work with the event itself using the callback.`);
  const tagsNames = ["Bibendum", "Lorem", "Dolor", "Filter"];

  return (
    <div>
      <Header >Time
      </Header>
      <Description >
        {/* //TODO: add description for time  */}
      </Description>
      <Import module="Time" path="/fundamental-react/src/"/>
      <Separator/> {/* id: PropTypes.string,
    showHour: PropTypes.bool,
    showMinute: PropTypes.bool,
    showSecond: PropTypes.bool,
    format12Hours: PropTypes.bool,
    disabled: PropTypes.bool,
    time: PropTypes.object */}
      <Properties
        type="Inputs"
        properties={[
        {
          name: 'id',
          description: 'String - Id for time component'
        }, {
          name: 'showHour',
          description: 'Bool - Enables the hours input'
        }, {
          name: 'showMinute',
          description: 'Bool - Enables the minutes input'
        }, {
          name: 'showSecond:',
          description: 'Bool - Enables the seconds input'
        }, {
          name: 'disabled',
          description: 'Bool - Disables the time component, the inputs will be readonly'
        }, {
          name: 'time',
          description: 'Object - The time component values : {hour:1,minute:20,second:0,meridiem}'
        }
      ]}/>
      <DocsTile>
        <Time format12Hours={true}/>
      </DocsTile>
      <DocsTile>
        <Time format12Hours={false}/>
      </DocsTile>
    </div>
  )
}