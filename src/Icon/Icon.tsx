import React from 'react';

interface IProps {
  glyph: string;
  clickHandler?: () => void;
  size?: string;
}

export const Icon: React.SFC<IProps> = props => {
  const { glyph, size, clickHandler } = props;
  return (
    <span
      className={`${'sap-icon--' + glyph}${size ? ' sap-icon--' + size : ''}`}
      onClick={clickHandler}
    />
  );
};
