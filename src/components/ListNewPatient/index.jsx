import { api } from "../../services/api";
import { ContainerListNewPatient } from "./styles";

function ListNewPatient() {
  if (!localStorage.setItem("@isLifetoken:")) {
    const patientList = (data) => {
      const { name, email } = data;
      console.log(data);
      api.get("/users?doctorId=4", data).then((res) => res.data);
    };
  }

  return (
    <ContainerListNewPatient>
      <div className="name-and--date">
        <h3>{}</h3>
        <h3>data de nascimento</h3>
      </div>
      <div className="phone-and--email">
        <h3>telefone</h3>
        <h3>email</h3>
      </div>
    </ContainerListNewPatient>
  );
}

export default ListNewPatient;
