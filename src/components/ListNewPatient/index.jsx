import { ContainerListNewPatient } from "./styles";

function ListNewPatient() {
  return (
    <ContainerListNewPatient>
      <div className="name-and--date">
        <h3>Nome do Paciente</h3>
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
