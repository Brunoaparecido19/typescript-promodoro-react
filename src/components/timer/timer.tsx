import React from 'react';
import { secondsToTime } from '../../utils/seconds-to-time';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return (
    <>
      <CountdownCircleTimer
        isPlaying
        duration={props.mainTime}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[50, 40, 30, 20]}
        size={550}
      >
        {({ remainingTime }) => <div>{secondsToTime(remainingTime)}</div>}
      </CountdownCircleTimer>
    </>
  );
}
