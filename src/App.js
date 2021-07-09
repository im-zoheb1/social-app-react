import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'containers/Login';
import Signup from 'containers/Signup';

const App = () => {
  return (
    <Router>
      <Switch>
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
