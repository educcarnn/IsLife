import { ContainerListSchedule, ContentListSchedule } from "./styles";

function ListSchedule() {
  return (
    <ContainerListSchedule>
      <ContentListSchedule>
        <p className="pacient-name">nome do paciente</p>
        <span className="date-and-hour">data e hora</span>
      </ContentListSchedule>
    </ContainerListSchedule>
  );
}

export default ListSchedule;
