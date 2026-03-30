import React from 'react';
import ReactDOM from 'react-dom/client';
import { PlainResumePage } from '@/components/PlainResumePage';
import './assets/style.css';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <PlainResumePage />
  </React.StrictMode>
);
