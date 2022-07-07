import React from 'react';
import './Subtitle.scss';

type SubtitleProps = {
  title: string;
}

export default function Subtitle({ title }: SubtitleProps) {
  return (
    <h2 className="subtitle">{ title }</h2>
  )
}
