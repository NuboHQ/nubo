import { hydrateRoot } from 'react-dom/client';
import App from '../.nubo-src/main.client';
import { config } from '../config';
import { startDev } from '../dev';

hydrateRoot(document.getElementById('root') as HTMLElement, <App />);

if (config.env.environment !== 'production') {
  startDev();
}
