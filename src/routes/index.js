import { Switch, BrowserRouter, Route } from "react-router-dom";
import AuthDoctor from "../pages/AuthDoctor";
import AuthPatient from "../pages/AuthPatient";
import DashDoctor from "../pages/DashDoctor";
import DashPatient from "../pages/DashPatient";
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
          <Home/>
        </Route>
        <Route exact path="/authdoctor">
          <AuthDoctor auth={auth} setAuth={setAuth} />
        </Route>
        <Route exact path="/authpatient">
          <AuthPatient auth={auth} setAuth={setAuth} />
        </Route>
        <Route exact path="/dashdoctor">
          <DashDoctor auth={auth} setAuth={setAuth} />
        </Route>
        <Route exact path="/dashpatient">
          <DashPatient auth={auth} setAuth={setAuth} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
