import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainDashboard from './containers/MainDashboard/MainDashboard';
import Login from './containers/Login/Login';
import store from './store';
import { Provider } from 'react-redux';
function PrivateRoute ({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => localStorage.getItem("token")
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute  exact path='/dashboard' component={MainDashboard} />

          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
