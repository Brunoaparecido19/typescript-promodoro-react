import React, { useEffect } from 'react';
import { useInterval } from '../../hooks/use-interval';
import { secondsToTime } from '../../utils/seconds-to-time';
import { Button } from '../button/buttom';
import { Timer } from '../timer/timer';
import { PomodoroMain } from './style';
import { PomodoroContainer } from './style';

interface Props {
  defaultPomodoroTimer: number;
  shortResttime: number;
  longRestTime: number;
  cycles: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
  }, [working]);
  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = (): void => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <>
      <PomodoroMain className="section-pomodoro">
        <PomodoroContainer className="container-pomodoro">
          <h2>You are: working</h2>
          <Timer mainTime={mainTime} />
          <Button
            className={'btn-work'}
            text="Work"
            onClick={() => configureWork()}
          />
          <Button
            className={'btn-pause'}
            text="Pause"
            onClick={() => setTimeCounting(false)}
          />
          <Button
            className={'btn'}
            text="Reset"
            onClick={() => console.log(1)}
          />
        </PomodoroContainer>
      </PomodoroMain>
    </>
  );
}
