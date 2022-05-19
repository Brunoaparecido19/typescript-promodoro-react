/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { secondsToMinutes } from '../../utils/seconds-to-minutes';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Tm, ContainerTm } from './style';
import { useInterval } from '../../hooks/use-interval';

interface Props {
  mainTime: number;
  shortRestTime: number;
}

export function Timer(props: Props): JSX.Element {
  const [timeDuration, setTimeDuration] = useState(props.mainTime);
  const [restingTime, setRestingTime] = useState(props.shortRestTime);
  const [onAnimation, setOnAnimation] = useState(false);

  useEffect(() => {
    const working = document.querySelector('.btn-work') as HTMLElement;
    working.addEventListener('click', () => {
      setOnAnimation(true);
      document.body.classList.add('working');
    });

    setTimeout(() => {
      const pause = document.querySelector('.btn-pause') as HTMLElement;
      if (pause) {
        pause.addEventListener('click', () => {
          setOnAnimation(!onAnimation);
        });
      }
    }, 200);

    const resting = document.querySelector('.btn-resting') as HTMLElement;
    resting.addEventListener('click', () => {
      setOnAnimation(!onAnimation);
    });
  }, [onAnimation]);

  useInterval(() => {
    setTimeDuration(timeDuration);
  }, 1000);

  return (
    <>
      <ContainerTm className="div-timer">
        <CountdownCircleTimer
          isPlaying={onAnimation}
          size={200}
          duration={timeDuration}
          colors={['#040404', '#2a2a2a', '#ff0000', '#A30000']}
          colorsTime={[10, 6, 3, 0]}
          strokeWidth={8}
          onComplete={() => {
            return { shouldRepeat: true, delay: -0.5 }; // repeat animation in 1.5 seconds
          }}
        >
          {({ remainingTime }) => <Tm>{secondsToMinutes(props.mainTime)}</Tm>}
        </CountdownCircleTimer>
      </ContainerTm>
    </>
  );
}
