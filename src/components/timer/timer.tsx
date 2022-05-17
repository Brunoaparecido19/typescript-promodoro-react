/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { secondsToTime } from '../../utils/seconds-to-time';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Tm, ContainerTm } from './style';
import { useInterval } from '../../hooks/use-interval';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  const [timeDuration, setTimeDuration] = React.useState(props.mainTime);
  const [onAnimation, setOnAnimation] = React.useState(false);

  useEffect(() => {
    const working = document.querySelector('.btn-work') as HTMLElement;
    working.addEventListener('click', () => {
      setOnAnimation(true);
    });
  }, [onAnimation]);

  useEffect(() => {
    const pause = document.querySelector('.btn-pause') as HTMLElement;
    pause.addEventListener('click', () => {
      setOnAnimation(false);
    });
  }, [onAnimation]);

  useInterval(() => {
    setTimeDuration(timeDuration);
  }, 1000);

  return (
    <>
      <ContainerTm>
        <CountdownCircleTimer
          isPlaying={onAnimation}
          size={400}
          duration={timeDuration}
          colors={['#404040', '#F7B801', '#ff0000', '#A30000']}
          colorsTime={[10, 6, 3, 0]}
          strokeWidth={5}
        >
          {({ remainingTime }) => <Tm>{secondsToTime(props.mainTime)}</Tm>}
        </CountdownCircleTimer>
      </ContainerTm>
    </>
  );
}
