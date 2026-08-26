import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './assets/style.css';

const segments = window.location.pathname.split('/').filter(Boolean);
const locale = segments[0] === 'es' ? 'es' : 'en';
const page = segments.includes('plain') ? 'plain' : 'portfolio';

const container = document.getElementById('app')!;
const application = <React.StrictMode><App locale={locale} page={page} /></React.StrictMode>;

if (container.firstElementChild) hydrateRoot(container, application);
else createRoot(container).render(application);
