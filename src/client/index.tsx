import { hydrateRoot } from 'react-dom/client';
import App from '../.nubo-src/main.client';
import { startDev } from '../dev';
import { clientConfig } from './config';

hydrateRoot(document.getElementById('root') as HTMLElement, <App />);

if (clientConfig.env.environment !== 'production') {
  startDev();
}
