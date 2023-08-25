import React from 'react';
import './asssets/css/index.css';
import App from './App/App.tsx';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function clearStorage() {
  let session = sessionStorage.getItem('username');
  if (session == null) {
    localStorage.clear();
    localStorage.setItem('isLogin','false');
  }
  sessionStorage.setItem('username','');
}
window.addEventListener('load', clearStorage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();