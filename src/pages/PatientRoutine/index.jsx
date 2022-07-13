import ListPatientRoutine from "../../components/ListPatientRoutine";
import {
  ContainerRoutine,
  ContentRoutine,
  ContentListRoutine,
  UlListRoutine,
} from "./style";

function PatientRoutine() {
  return (
    <div>
      <ContainerRoutine>
        <ContentRoutine>
          <textarea
            className="div-textarea"
            placeholder="Escreva aqui sua rotina..."
            cols="30"
            rows="10"
          />
          <div className="div-select">
            <label>Selecione Horário</label>
            <select className="tag-select-routine" name="" id="">
              <option value="">horario</option>
            </select>
          </div>
          <button className="btn-rotina">Listar Rotina</button>
        </ContentRoutine>
        <ContentListRoutine className="teste">
          <UlListRoutine>
            <ListPatientRoutine />
            <ListPatientRoutine />
            <ListPatientRoutine />
            <ListPatientRoutine />
            <ListPatientRoutine />
            <ListPatientRoutine />
            <ListPatientRoutine />
            <ListPatientRoutine />
            <ListPatientRoutine />
            <ListPatientRoutine />
          </UlListRoutine>
        </ContentListRoutine>
      </ContainerRoutine>
    </div>
  );
}

export default PatientRoutine;
