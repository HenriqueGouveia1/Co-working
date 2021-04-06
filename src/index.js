import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/App.scss';
import Login from './pages/Login'
import Recovery from './pages/Recovery'
import Register from './pages/Register'
import Aceppted from './pages/Aceppted'
import Favoritos from './pages/Favoritos'
import Changedata from './pages/Changedata'
import Help from './pages/Help'
import TalkToUs from './pages/TalkToUs'
import TalkToUsFeedback from './pages/TalkToUsFeedback'
import Terms from './pages/Terms'
import AppData from './pages/AppData'
import Configuration from './pages/Configuration';
import ResourcesInLibras from './pages/ResourcesInLibras';
import Modelo from './pages/Modelo';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';

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
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/Favoritos">
          <Favoritos />
        </Route>
        <Route path="/changedata">
          <Changedata />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/talktous">
          <TalkToUs/>
        </Route>
        <Route path="/talktousfeedback">
          <TalkToUsFeedback/>
        </Route>
        <Route path="/terms">
          <Terms/>
        </Route>
        <Route path="/appdata">
          <AppData/>
        </Route>
        <Route path="/config">
          <Configuration/>
        </Route>
        <Route path="/resourcesinlibras">
          <ResourcesInLibras/>
        </Route>
        <Route path="/modelo">
          <Modelo/>
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
