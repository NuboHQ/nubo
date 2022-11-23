import { hydrateRoot } from 'react-dom/client';
import { App } from './App';

hydrateRoot(document.getElementById('root') as HTMLElement, <App />);

// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container!);
// root.render(<App />);
