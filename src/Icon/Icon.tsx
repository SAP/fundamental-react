import React from 'react';
import { ICommonProps } from '../common/common';

interface IIconProps extends ICommonProps {
  glyph: string;
  clickHandler?: () => void;
  size?: string;
}

export function Icon(props: IIconProps): JSX.Element {
  const { id, glyph, size, clickHandler } = props;
  return (
    <span
      id={id}
      className={`${'sap-icon--' + glyph}${size ? ' sap-icon--' + size : ''}`}
      onClick={clickHandler}
    />
  );
}
