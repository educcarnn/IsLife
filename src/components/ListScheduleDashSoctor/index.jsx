import { ContainerListSchedule, ContentListSchedule } from "./styles";

function ListSchedule({element}) {
  return (
    
    <ContainerListSchedule key={element.id}>
      <ContentListSchedule>
        <p className="pacient-name">{element.nome}</p>
        <span className="date-and-hour">{element.dataConsulta} | {element.horarioConsulta}</span>
      </ContentListSchedule>
    </ContainerListSchedule>
  );
}

export default ListSchedule;
