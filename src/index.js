import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import configureStore from "./redux/store/configureStore";
import {BrowserRouter, Switch} from "react-router-dom";
import 'antd/dist/antd.css';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <App/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


