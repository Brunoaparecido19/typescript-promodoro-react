/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { secondsToTime } from '../../utils/seconds-to-time';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Tm, ContainerTm } from './style';
import { useInterval } from '../../hooks/use-interval';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  const [timeDuration, setTimeDuration] = React.useState(props.mainTime);
  useInterval(() => {
    setTimeDuration(timeDuration);
  }, 1000);

  return (
    <>
      <ContainerTm>
        <CountdownCircleTimer
          isPlaying
          size={400}
          duration={timeDuration}
          colors={['#2fff00', '#F7B801', '#ff0000', '#A30000']}
          colorsTime={[10, 6, 3, 0]}
          strokeWidth={10}
        >
          {({ remainingTime }) => <Tm>{secondsToTime(props.mainTime)}</Tm>}
        </CountdownCircleTimer>
      </ContainerTm>
    </>
  );
}
