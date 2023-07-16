import { createRoot, Root } from 'react-dom/client';

import App from './App';
import './index.css';

const container = document.getElementById('root');

if (container !== null) {
  const root: Root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Could not find root element');
}
