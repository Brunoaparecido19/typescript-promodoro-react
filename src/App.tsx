import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer/pomodoro-timer';
import { GlobalStyle } from './global';

function App(): JSX.Element {
  return (
    <>
      <div className="App">
        <GlobalStyle></GlobalStyle>
        <PomodoroTimer defaultPomodoroTimer={10} />
      </div>
    </>
  );
}

export default App;
