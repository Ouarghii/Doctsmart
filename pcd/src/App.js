import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Auth from './components/auth/Auth';
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
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRouter';
import ApplyDoctor from './components/doctor/ApplyDoctor';
import Listdoctors from './components/doctor/Listdoctors';
import Appointment from './components/doctor/Appointment';
import Stats from './components/doctor/StatsDoctor';
import Reviewexp from './components/Review';
import ListPatients from './components/doctor/ListPatients';
import Layout1 from './components/receptionnist/Layout1';
import ListPatients1 from './components/receptionnist/ListPatients';

import AppointmentForm1 from './components/receptionnist/AppointmentForm';
import Logincard from './components/logincard';
import Symptom from './components/Symptom';

function App() {
  const { loading } = useSelector(state => state.alerts);

  return (
    <Router>
      <div className="App">
      
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/logincard" component={Logincard} />
            <Route exact path="/diseasepredection" component={Symptom} />

            <Route exact path='/recepauth' component={LoginR} />
            <Route exact path='/registerr' component={RegisterR} />
            <Route exact path='/dash/registerp' component={RegistrationForm} />
            <Route exact path='/dash' component={Layout1} />
            <Route exact path='/dash/patients' component={ListPatients1}/>
            <Route exact path='/dash/appointments' component={AppointmentForm1}/>
            <Route exact path='/dash/doctors' component={Listdoctors}/>
            <Route exact path='/services' component={ServicePage} />
            <Route exact path='/blogs' component={Blogs} />
            <Route exact path='/contactus' component={Contactus} />
            <Route exact path='/about' component={About} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/doctorauth' component={Tbib} />
            <Route exact path='/doctorapp' component={Dochome} />
            <Route exact path='/doctorapp/applydoctor' component={ApplyDoctor}/>

            <Route exact path='/doctorapp/appointments' component={Appointment}/>
            <Route exact path='/doctorapp/statistics' component={Stats}/>
            <Route exact path='/doctorapp/review' component={Reviewexp}/>
            <Route exact path='/doctorapp/patients' component={ListPatients}/>
            

            

          <Route exact path='*' component={Error} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;