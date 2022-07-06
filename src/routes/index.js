import { Switch, BrowserRouter, Route } from "react-router-dom";
import AuthDoctor from "../pages/AuthDoctor";
import AuthPatient from "../pages/AuthPatient";
import DashDoctor from "../pages/DashDoctor";
import DashPatient from "../pages/DashPatient";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/authdoctor">
          <AuthDoctor/>
        </Route>
        <Route exact path="/authpatient">
          <AuthPatient/>
        </Route>
        <Route exact path="/dashdoctor">
          <DashDoctor/>
        </Route>
        <Route exact path="/dashpatient">
          <DashPatient/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
