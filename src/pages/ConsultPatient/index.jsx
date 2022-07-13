import ListPatientConsult from "../../components/ConsultListPatient";
import {
  ContainerConsult,
  ContentConsult,
  ContentListConsult,
  UlListConsult,
} from "./style";

function ConsultPatient() {
  return (
    <div>
      <ContainerConsult>
        <ContentConsult>
          <div className="div-select">
            <label>Data da Consulta</label>
            <select className="tag-select-routine" name="" id="">
              <option value="">Data</option>
            </select>
          </div>
          <div className="div-select">
            <label>Selecione Horário</label>
            <select className="tag-select-routine" name="" id="">
              <option value="">Horario</option>
            </select>
          </div>
          <div className="div-select">
            <label>Modo</label>
            <select className="tag-select-routine" name="" id="">
              <option value="">Modo</option>
            </select>
          </div>
          <div className="div-select">
            <label>Médico responsável</label>
            <select className="tag-select-routine" name="" id="">
              <option value="">Médico</option>
            </select>
          </div>
          <button className="btn-rotina">Listar Rotina</button>
        </ContentConsult>
        <ContentListConsult className="teste">
          <UlListConsult>
            <ListPatientConsult />
            <ListPatientConsult />
            <ListPatientConsult />
          </UlListConsult>
        </ContentListConsult>
      </ContainerConsult>
    </div>
  );
}

export default ConsultPatient;
