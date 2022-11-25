import { hydrateRoot } from 'react-dom/client';
import { config } from '../config';
import App from '../generated/main.client';

hydrateRoot(document.getElementById('root') as HTMLElement, <App />);

if (config.env.environment !== 'production') {
  // startDev();
}
