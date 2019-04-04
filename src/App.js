import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainDashboard from './containers/MainDashboard/MainDashboard';
import store from './store';
import { Provider } from 'react-redux';
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
