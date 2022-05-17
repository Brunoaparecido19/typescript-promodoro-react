import React from 'react';
import { useInterval } from '../../hooks/use-interval';
import { secondsToTime } from '../../utils/seconds-to-time';
import { Button } from '../button/buttom';
import { Timer } from '../timer/timer';
import { PomodoroSection } from './style';
import { PomodoroContainer } from './style';

interface Props {
  defaultPomodoroTimer: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <>
      <PomodoroSection>
        <PomodoroContainer>
          <h2>You are: working</h2>
          <Timer mainTime={mainTime} />
          <Button text="Work" onClick={() => console.log(1)} />
        </PomodoroContainer>
      </PomodoroSection>
    </>
  );
}
