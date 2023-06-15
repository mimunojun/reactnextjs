import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Button from './components/Button';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import { Parent2 } from './components/Parent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
  {/* <React.StrictMode> */}
    <Parent2 />
  {/* </React.StrictMode> */}
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
