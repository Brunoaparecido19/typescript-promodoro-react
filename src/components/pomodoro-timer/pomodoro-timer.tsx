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
  const [resting, setResting] = React.useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
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
    setResting(false);
    setMainTime(props.defaultPomodoroTimer);
  };

  const configureRest = (long: boolean): void => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    if (long) {
      setMainTime(props.defaultPomodoroTimer);
    } else {
      setMainTime(props.shortResttime);
    }
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
            className={!working && !resting ? 'hidden' : 'btn-pause'}
            text={timeCounting ? 'Pause' : 'Play'}
            onClick={() => setTimeCounting(!timeCounting)}
          />
          <Button
            className={'btn-resting'}
            text="Rest"
            onClick={() => configureRest(false)}
          />
        </PomodoroContainer>
      </PomodoroMain>
    </>
  );
}
