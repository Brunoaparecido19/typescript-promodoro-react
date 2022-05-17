import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer/pomodoro-timer';
import { GlobalStyle } from './global';

function App(): JSX.Element {
  return (
    <>
      <div className="App">
        <GlobalStyle></GlobalStyle>
        <PomodoroTimer
          defaultPomodoroTimer={200}
          shortResttime={300}
          longRestTime={900}
          cycles={4}
        />
      </div>
    </>
  );
}

export default App;
