import React from "react";
import { Time } from "./Time";
//import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';
import {
  DocsTile,
  DocsText,
  Separator,
  Header,
  Description,
  Import
} from "../";

export const TimeComponent = () => {
  const tagCode = `<Tag>Bibendum</Tag>
<Tag>Lorem</Tag>
<Tag>Dolor</Tag>
<Tag>Filter</Tag>`;

  const closeAction = (name, event) =>
    alert(
      `close ${name}! You can work with the event itself using the callback.`
    );
  const tagsNames = ["Bibendum", "Lorem", "Dolor", "Filter"];

  return (
    <div>
      <DocsTile>
        <Time format12Hours={true} />
      </DocsTile>
    </div>
  );
};
