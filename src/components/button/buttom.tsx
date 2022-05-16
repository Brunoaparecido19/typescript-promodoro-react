import React from 'react';
import { Btn } from './style';

interface Props {
  onClick?: () => void;
  text: string;
  className?: string;
}
export function Button(props: Props): JSX.Element {
  return (
    <Btn onClick={props.onClick} className={props.className}>
      {props.text}
    </Btn>
  );
}
