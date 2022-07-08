import FormRegisterNewPatient from "../../components/FormRegisterNewPatient";
import {
  ContainerPatient,
  ContentPatientForm,
  ContentPatientList,
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
      <ContentPatientList>teste</ContentPatientList>
    </ContainerPatient>
  );
}

export default DoctorPatient;
