import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet',
          amount: 1000,
          category: 'Lorem ipsum',
          date: new Date()
        }
      ];
    });
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
