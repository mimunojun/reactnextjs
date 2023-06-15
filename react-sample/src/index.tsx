import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactUseCallbackSample from './components/ReactUseCallbackSample';
import ReactUseStateSample from './components/ReactUseStateSample';
import ReactUseReducerSample from './components/ReactUseReducerSample';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
  {/* <React.StrictMode> */}
    <ReactUseReducerSample initialValue={0}/>
  {/* </React.StrictMode> */}
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
