import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router/index'
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);
