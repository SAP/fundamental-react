import React, { CSSProperties } from 'react';
import { ICommonProps } from '../common/common';

interface IIdentifierProps extends ICommonProps {
  glyph?: string;
  size?: string;
  modifier?: '' | 'circle' | 'transparent';
  color?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  label?: string;
  backgroundImageUrl?: string;
}

export function Identifier(props: IIdentifierProps): JSX.Element {
  const {
    id,
    children,
    glyph,
    size,
    modifier,
    color,
    label,
    backgroundImageUrl
  } = props;

  const styles: CSSProperties = {
    backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : ''
  };

  return (
    <span
      id={id}
      className={`${size ? 'fd-identifier--' + size : 'fd-identifier'}${
        glyph ? ' sap-icon--' + glyph : ''
      }${modifier ? ' fd-identifier--' + modifier : ''}${
        color ? ' fd-has-background-color-accent-' + color : ''
      }${backgroundImageUrl ? ' fd-identifier--thumbnail' : ''}`}
      style={styles}
      role={`${!children ? 'presentation' : ''}`}
      aria-label={label}
    >
      {children}
    </span>
  );
}
