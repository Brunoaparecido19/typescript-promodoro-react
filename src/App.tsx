import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <>
      <div className="App">helo word</div>
      <PomodoroTimer defaultPomodoroTimer={60} />
    </>
  );
}

export default App;
