import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from 'hoc/Layout/Dashboard';

import Login from 'containers/Login';
import Signup from 'containers/Signup';
import Home from 'containers/Home';
import FindFriends from 'containers/FindFriends';
import Messages from 'containers/Messages';
import Notifications from 'containers/Notifications';
import Profile from 'containers/Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Dashboard>
            <Profile></Profile>
          </Dashboard>
        </Route>
        <Route path="/notifications">
          <Dashboard>
            <Notifications></Notifications>
          </Dashboard>
        </Route>
        <Route path="/messages">
          <Dashboard>
            <Messages></Messages>
          </Dashboard>
        </Route>
        <Route path="/findfriends">
          <Dashboard>
            <FindFriends></FindFriends>
          </Dashboard>
        </Route>
        <Route path="/home">
          <Dashboard>
            <Home></Home>
          </Dashboard>
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
