import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// eslint-disable-next-line
import 'swiper/css/bundle';
import 'swiper/css';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
