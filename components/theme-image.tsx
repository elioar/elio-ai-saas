"use client";

import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} />
      <Image {...rest} src={srcDark} />
    </>
  );
};

export default ThemeImage;
