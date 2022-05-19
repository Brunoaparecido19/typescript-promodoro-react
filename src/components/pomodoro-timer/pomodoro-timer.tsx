/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect, useState, useCallback } from 'react';
import { useInterval } from '../../hooks/use-interval';
import { secondsToTime } from '../../utils/seconds-to-time';
import { Button } from '../button/buttom';
import { Timer } from '../timer/timer';
import {
  PomodoroContainer,
  Details,
  PomodoroMain,
  DescriptionDetails,
  Title,
} from './style';

const bellStart = require('../../sounds/bell-start.mp3');
const bellFinish = require('../../sounds/bell-start.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props {
  defaultPomodoroTimer: number;
  shortRestime: number;
  longRestTime: number;
  cycles: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTimer);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(props.cycles - 1).fill(true),
  );
  const [completeCycles, setCompleteCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoro] = useState(0);

  const configureWork = useCallback((): void => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.defaultPomodoroTimer);
    audioStartWorking.play();
  }, [
    props.defaultPomodoroTimer,
    setTimeCounting,
    setWorking,
    setResting,
    setMainTime,
    audioStartWorking,
  ]);

  const configureRest = useCallback(
    (long: boolean): void => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);
      if (long) {
        setMainTime(props.defaultPomodoroTimer);
      } else {
        setMainTime(props.shortRestime);
      }
      audioStopWorking.play();
    },
    [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      props.shortRestime,
      props.longRestTime,
    ],
  );
  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);

      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
      setCompleteCycles(completeCycles + 1);
    }

    if (working) setNumberOfPomodoro(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    completeCycles,
    configureRest,
    configureWork,
    numberOfPomodoros,
    props.cycles,
    setCyclesQtdManager,
    setCompleteCycles,
    setNumberOfPomodoro,
    setFullWorkingTime,
  ]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
  );

  return (
    <>
      <PomodoroMain>
        <PomodoroContainer className="container-pomodoro">
          <Title>Você está: {working ? 'Trabalhando' : 'Descansando'}</Title>
          <Timer mainTime={mainTime} shortRestTime={0} />
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
          <Details className="div-details">
            <DescriptionDetails>
              Ciclos concluídos: {completeCycles}{' '}
            </DescriptionDetails>
            <DescriptionDetails>
              Horas Trabalhadas: {secondsToTime(fullWorkingTime)}
            </DescriptionDetails>
            <DescriptionDetails>
              Pomodoros concluídos: {numberOfPomodoros}{' '}
            </DescriptionDetails>
          </Details>
        </PomodoroContainer>
      </PomodoroMain>
    </>
  );
}
