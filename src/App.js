import './App.css';

// React router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute'

// Import components

// Pages
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>  
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/" >
            <p>Home</p>
          </PrivateRoute>
          <PrivateRoute path="/add">
            <p>add</p>
          </PrivateRoute>
          <PrivateRoute exact path="/logout">
            <p>Hello</p>
          </PrivateRoute>
          <PrivateRoute path="/leaderboard">
            <p>leaderboard</p>
          </PrivateRoute>
          <PrivateRoute exact path="/question/:id">
            <p>question</p>
          </PrivateRoute>
          <Router>
            <NotFound />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
