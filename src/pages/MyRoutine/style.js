import { Container } from ".";

import MyRoutineForm from "../../components/MyRoutineForm";
import MyRoutineList from "../../components/MyRoutineList";

function MyRoutine() {
  //   const paciente = JSON.parse(localStorage.getItem("token"));
  //   const usuario = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Container>
        <div>
          <MyRoutineForm />
        </div>
        <div>
          <MyRoutineList />
        </div>
      </Container>
    </>
  );
}

export default MyRoutine;
