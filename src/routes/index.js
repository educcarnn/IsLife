import { Switch, BrowserRouter, Route } from "react-router-dom";
import HeaderDoctor from "../components/Header";

import AuthDoctor from "../pages/AuthDoctor";
import AuthPatient from "../pages/AuthPatient";
import DashDoctor from "../pages/DashDoctor";
import DashPatient from "../pages/DashPatient";
import DoctorPatient from "../pages/DoctorPatient";
import DoctorSchedule from "../pages/DoctorSchedule";
import Home from "../pages/Home";
import {useState, useEffect} from 'react';

const Routes = () => {
  
  const [auth, setAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('@IsLife:token');

        if (token) {
            return setAuth(true)
        };
    },[]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/authdoctor">
          <AuthDoctor />
        </Route>
        <Route path="/authpatient">
          <AuthPatient />
        </Route>
        <Route path="/dashdoctor">
          <HeaderDoctor />
          <DashDoctor />
        </Route>
        <Route path="/doctorschedule">
          <HeaderDoctor />
          <DoctorSchedule />
        </Route>
        <Route path="/doctorpatient">
          <HeaderDoctor />
          <DoctorPatient />
        </Route>
        <Route path="/dashpatient">
          <DashPatient />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
