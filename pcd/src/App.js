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
import ServicePage from './components/Services';
import Serv from './components/Serv';
import Blogs from './components/blog';
import Contactus from './components/contactus';
import About from './components/About';
import Dashboardd from './components/Dashboard';
import Tbib from './components/auth/Tbib';
import Dochome from './components/doctor/Dochome';
import Doclogin from './components/doctor/Doclogin';
import Docregister from './components/doctor/Docregister';

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
          <Route exact path='/services' component={ServicePage } />
          <Route exact path='/blogs' component={ Blogs} />
          <Route exact path='/contactus' component={Contactus } />
          <Route exact path='/about' component={About} />
          <Route exact path='/dashboard' component={Dashboardd} />
          <Route exact path='/doctorauth' component={Tbib} />
          <Route exact path='/doctorapp' component={Dochome} />

          <Route exact path='*' component={Error } />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;