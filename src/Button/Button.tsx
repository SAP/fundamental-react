import React from 'react';

interface IProps {
  option?: '' | 'emphasized' | 'light';
  type?: '' | 'standard' | 'positive' | 'negative' | 'medium';
  compact?: boolean;
  glyph?: string;
  navbar?: boolean;
  dropdown?: boolean;
  selected?: boolean;
  disabled?: boolean;
  typeAttr?: string;
  onclick?: () => void;
}

export const Button: React.SFC<IProps> = props => {
  const {
    children,
    option,
    type,
    compact,
    glyph,
    dropdown,
    navbar,
    selected,
    disabled,
    typeAttr,
    onclick
  } = props;

  return (
    <button
      className={`${option ? 'fd-button--' + option : ' fd-button'}${
        type ? ' fd-button--' + type : ''
      }${dropdown ? ' fd-dropdown__control' : ''}${
        compact ? ' fd-button--compact' : ''
      }${glyph ? ' sap-icon--' + glyph : ''}${
        navbar ? ' fd-global-nav__btn' : ''
      }${selected ? ' is-selected' : ''}${disabled ? ' is-disabled' : ''}`}
      disabled={disabled ? disabled : false}
      type={typeAttr}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export const ButtonGroup: React.SFC<IProps> = props => {
  const { children } = props;
  return (
    <div className="fd-button-group" role="group" aria-label="Group label">
      {children}
    </div>
  );
};
