import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Auth from './components/auth/Auth';
import { BrowserRouter as Router,  Switch , Route, Link } from 'react-router-dom';
import LoginR from './components/auth/LoginR';
import RegisterR from './components/auth/RegisterR';
import RegistrationForm from './components/auth/RegistrationForm';
import Dashboard from './components/auth/Dashboard';
import Error from './components/auth/Error';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function App() {
  return (
    <Router>
      <div className="App">
        

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/loginr' component={LoginR } />
          <Route exact path='/registerr' component={RegisterR } />
          <Route exact path='/registerp' component={RegistrationForm } />
          <Route exact path='/dash' component={Dashboard } />
          <Route exact path='*' component={Error } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;