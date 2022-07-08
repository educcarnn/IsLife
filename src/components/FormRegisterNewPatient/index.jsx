import { ContainerForm } from "./styles";

function FormRegisterNewPatient() {
  return (
    <ContainerForm>
      <div className="div-input">
        <input
          className="input-new-patient"
          type="text"
          placeholder="Nome completo"
        />
        <input
          className="input-new-patient"
          type="date"
          placeholder="Data de Nascimento"
        />
        <input className="input-new-patient" type="text" placeholder="CPF" />
        <input className="input-new-patient" type="email" placeholder="Email" />
        <input
          className="input-new-patient"
          type="password"
          placeholder="Senha"
        />
        <input
          className="input-new-patient"
          type="tel"
          placeholder="Telefone"
        />
      </div>
      <button className="btn-register-patient">Cadastrar Cliente</button>
    </ContainerForm>
  );
}

export default FormRegisterNewPatient;
