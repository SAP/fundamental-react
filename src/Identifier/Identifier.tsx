import React, { CSSProperties } from 'react';

interface IProps {
  glyph?: string;
  size?: string;
  modifier?: '' | 'circle' | 'transparent';
  color?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  label?: string;
  backgroundImageUrl?: string;
}

export const Identifier: React.SFC<IProps> = props => {
  const {
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
};
