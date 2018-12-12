import React from 'react';

interface IProps {
  size: 's' | 'm' | 'l';
  type?: '' | 'circle';
  photo: string;
}

export const Image: React.SFC<IProps> = props => {
  const { size, type, photo } = props;
  return (
    <span
      className={`${'fd-image--' + size}${type ? ' fd-image--' + type : ''}`}
      style={{ backgroundImage: 'url(' + photo + ')' }}
    />
  );
};
