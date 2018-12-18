import React from 'react';
import { ICommonProps } from '../common/common';

interface IImageProps extends ICommonProps {
  size: 's' | 'm' | 'l';
  type?: '' | 'circle';
  photo: string;
}

export function Image(props: IImageProps): JSX.Element {
  const { id, size, type, photo } = props;
  return (
    <span
      id={id}
      className={`${'fd-image--' + size}${type ? ' fd-image--' + type : ''}`}
      style={{ backgroundImage: 'url(' + photo + ')' }}
    />
  );
}
