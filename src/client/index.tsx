import { startDev } from '../dev';
import { hydrateRoot } from 'react-dom/client';
import { App } from '../App';
import { config } from './config';

hydrateRoot(document.getElementById('root') as HTMLElement, <App />);

// import { createRoot } from 'react-dom/client';
// import { App } from '../App';

// const container = document.getElementById('app');
// const root = createRoot(container!);
// root.render(<App />);

if (config.env.environment !== 'production') {
  startDev();
}
