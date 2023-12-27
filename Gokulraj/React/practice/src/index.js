import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import App from './App';
// import PomodoroTimer from './components/Stopwatch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <PomodoroTimer />

  </React.StrictMode>
);

reportWebVitals();
