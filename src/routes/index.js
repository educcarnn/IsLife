import { Switch, BrowserRouter, Route} from "react-router-dom";
import HeaderDoctor from "../components/Header";

import AuthDoctor from "../pages/AuthDoctor";
import AuthPatient from "../pages/AuthPatient";
import DashDoctor from "../pages/DashDoctor";
import DashPatient from "../pages/DashPatient";
import DoctorPatient from "../pages/DoctorPatient";
import DoctorSchedule from "../pages/DoctorSchedule";
import Home from "../pages/Home"
import HomeDoctor from "../pages/HomeDoctor";
import HomePatient from "../pages/HomePatient";


const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route path="/home/doctor"> <HomeDoctor/> </Route>
        <Route path="/home/patient"> <HomePatient/></Route>
        <Route path="/register/doctor"> <AuthDoctor /></Route>
        <Route path="/login">
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
