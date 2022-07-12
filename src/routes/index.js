import { Switch, BrowserRouter, Route } from "react-router-dom";
import HeaderDoctor from "../components/Header";
import HeaderPatient from "../components/HeaderPatient";

import AuthDoctor from "../pages/AuthDoctor";
import AuthPatient from "../pages/AuthPatient";
import DashDoctor from "../pages/DashDoctor";
import DashPatient from "../pages/DashPatient";
import DayShare from "../pages/PatientDayShare";

import PageTest from "../pages/testPage";

import DoctorPatient from "../pages/DoctorPatient";
import DoctorSchedule from "../pages/DoctorSchedule";
import Home from "../pages/Home";
import HomeDoctor from "../pages/HomeDoctor";
import HomePatient from "../pages/HomePatient";
import PatientRoutine from "../pages/PatientRoutine";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route path="/home/doctor">
          {" "}
          <HomeDoctor />{" "}
        </Route>
        <Route path="/home/patient">
          {" "}
          <HomePatient />
        </Route>
        <Route path="/register/doctor">
          {" "}
          <AuthDoctor />{" "}
        </Route>
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
          <HeaderPatient />
          <DashPatient />
        </Route>

        {/* Rotas do Paciente */}
        <Route path={"/dayshare"}>
          <HeaderPatient />
          <DayShare />
        </Route>

        <Route path={"/rotinas"}>
          <HeaderPatient />
          <PatientRoutine />
        </Route>

        <Route exact path="/receitas">
          <PageTest />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
