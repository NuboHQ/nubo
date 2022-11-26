import { hydrateRoot } from 'react-dom/client';
import App from '../.nubo-generated/main.client';
import { startDev } from '../dev';
import { clientConfig } from './config';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <App props={clientConfig.props} />,
);

if (clientConfig.env.environment !== 'production') {
  startDev();
}
