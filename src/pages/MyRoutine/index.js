import { Container } from "./style";
import MyRoutineForm from "../../components/MyRoutineForm";
import MyRoutineList from "../../components/MyRoutineList";
import AuthGlobal from "../../components/Roules/AuthGlobal";

function MyRoutine() {
  //   const paciente = JSON.parse(localStorage.getItem("token"));
  //   const usuario = JSON.parse(localStorage.getItem("user"));
  if(localStorage.getItem('token') === null) {
    return (
     <AuthGlobal/>
     )
    }else {

  return (
    <>
      <Container>
        <div>
          <MyRoutineForm />
        </div>

        <MyRoutineList />
      </Container>
    </>
  )};
}

export default MyRoutine;
