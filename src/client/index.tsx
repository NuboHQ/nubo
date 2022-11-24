import { startDev } from '../dev';
import { hydrateRoot } from 'react-dom/client';
import { App } from './App.client';
import { config } from '../config';

hydrateRoot(document.getElementById('root') as HTMLElement, <App />);

if (config.env.environment !== 'production') {
  startDev();
}
