import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LocalizationEditor } from './LocalizationEditor';

Enzyme.configure({ adapter: new Adapter() });

describe('<LocalizationEditor />', () => {
  const localEditor = (
      <LocalizationEditor
          control={{
        label: 'Localization Editor Label',
        placeholder: 'Enter Label',
        language: 'EN*'
      }}
          menu={[
        { placeholder: 'Enter Label', language: 'ES' },
        { placeholder: 'Enter Label', language: 'CH' },
        { placeholder: 'Enter Label', language: 'PL' }
      ]} />
  );

  const localEditorCompact = (
      <LocalizationEditor
          className='blue'
          compact
          control={{
        label: 'Localization Editor Compact Mode',
        placeholder: 'Enter Label',
        language: 'EN*'
      }}
          menu={[
        { placeholder: 'Enter Label', language: 'ES' },
        { placeholder: 'Enter Label', language: 'CH' },
        { placeholder: 'Enter Label', language: 'PL' }
      ]} />
  );

  const localEditorTextArea = (
      <LocalizationEditor
          textarea
          control={{
        label: 'Localization Editor Label',
        placeholder: 'Enter Label',
        language: 'EN*'
      }}
          menu={[
        { placeholder: 'Enter Label', language: 'ES' },
        { placeholder: 'Enter Label', language: 'CH' },
        { placeholder: 'Enter Label', language: 'PL' }
      ]} />
  );
  test('create localization editor', () => {
    // localization editor
    let component = renderer.create(localEditor);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // localization editor compact
    component = renderer.create(localEditorCompact);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // localization editor with text area
    component = renderer.create(localEditorTextArea);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
