
import { startDev } from './src/dev';
import { hydrateRoot } from 'react-dom/client';
import { App } from './App.client';
import { config } from './src/client/config';

hydrateRoot(document.getElementById('root') as HTMLElement, <App />);

if (config.env.environment !== 'production') {
  startDev();
}
