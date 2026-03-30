import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/style.css';
ReactDOM.createRoot(document.getElementById('app')).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
