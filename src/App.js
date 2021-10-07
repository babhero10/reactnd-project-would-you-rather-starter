import './App.css';

// React router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute'

import {logout} from './redux/userReducer'
import { useDispatch } from 'react-redux';

// Import components

// Pages
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Home from './pages/Home';
import Question from './pages/Question';
import CreateQuestion from'./pages/CreateQuestion'
import Leaderboard from './pages/Leaderboard';

function App() {

  const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <Switch>  
          <Route exact path="/login">
              <Login />
          </Route>
          <PrivateRoute exact path="/" >
              <Home />
          </PrivateRoute>
          <PrivateRoute path="/add">
              <CreateQuestion />
          </PrivateRoute>
          <PrivateRoute exact path="/logout">
            {dispatch(logout)}
          </PrivateRoute>
          <PrivateRoute path="/leaderboard">
              <Leaderboard />
          </PrivateRoute>
          <PrivateRoute exact path="/questions/:question_id">
              <Question />
          </PrivateRoute>
          <PrivateRoute>
              <NotFound />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
