import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/App.scss';
import Login from './pages/Login'
import Recovery from './pages/Recovery'
import Register from './pages/Register'
import Aceppted from './pages/Aceppted'
import Config from './pages/Config'
import Changedata from './pages/Changedata'
import Help from './pages/Help'
import navFooter from './pages/navFooter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/recovery">
          <Recovery />
          </Route>
          <Route path="/aceppted">
          <Aceppted />
        </Route>
        <Route exact path="/config">
          <Config />
        </Route>
        <Route path="/changedata">
          <Changedata />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
