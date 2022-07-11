import FormRegisterNewPatient from "../../components/FormRegisterNewPatient";
import ListNewPatient from "../../components/ListNewPatient";
import {
  ContainerPatient,
  ContentPatientForm,
  ContentPatientList,
  UlContainer,
} from "./styles";
import noCardList from "../../assets/img/NoCard.svg";

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
          <p className="name-patient">Paciente</p>
          <div className="div-btn--list">
            <button className="btn-patient--new---list">Todos</button>
            <button className="btn-patient--new---list">
              Add recentemente
            </button>
          </div>
        </div>
        <UlContainer>
          <ListNewPatient />
          <ListNewPatient />
          <ListNewPatient />
          <ListNewPatient />
          <ListNewPatient />
          {/* <img className="img-nocard--new---patient" src={noCardList} alt="" />
          <img className="img-nocard--new---patient" src={noCardList} alt="" />
          <img className="img-nocard--new---patient" src={noCardList} alt="" />
          <img className="img-nocard--new---patient" src={noCardList} alt="" /> */}
        </UlContainer>
      </ContentPatientList>
    </ContainerPatient>
  );
}

export default DoctorPatient;
