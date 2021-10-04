import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoutes } from './routes/AppRoutes';
import './index.css';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);