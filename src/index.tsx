import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { createStore } from './store';

const store = createStore();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
