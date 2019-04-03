import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainDashboard from './components/containers/MainDashboard/MainDashboard';

class App extends Component {

  render() {
    return (
      <BrowserRouter>

        <Switch>
          <Route exact path='/' component={MainDashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
