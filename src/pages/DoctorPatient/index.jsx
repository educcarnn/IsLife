import FormRegisterNewPatient from "../../components/FormRegisterNewPatient";
import ListNewPatient from "../../components/ListNewPatient";
import {
  ContainerPatient,
  ContentPatientForm,
  ContentPatientList,
  UlContainer,
} from "./styles";

function DoctorPatient() {
  return (
    <ContainerPatient>
      <ContentPatientForm>
        <div className="form-title">
          <h1>Registrar novo paciente</h1>
        </div>
        <div className="div-form">
          <FormRegisterNewPatient />
        </div>
      </ContentPatientForm>
      <ContentPatientList>
        <div className="div-description-list">
          <p className="name-patient">Pacientes</p>
        </div>
        <UlContainer>
          <ListNewPatient />
        </UlContainer>
      </ContentPatientList>
    </ContainerPatient>
  );
}

export default DoctorPatient;
