import ListConsultDashDoctor from "../../components/ListConsultDashDoctor";
import ListHourDashDoctor from "../../components/ListHourDashDoctor";
import {
  ContainerConsult,
  ContentConsultHour,
  ContentConsultList,
  ListContentHour,
  ListContentConsult,
} from "./style";

function DashDoctor() {
  return (
    <div>
      <ContainerConsult>
        <ContentConsultHour>
          <h2 className="title-consults">Consultas do dia</h2>
          <ListContentHour>
            <ListHourDashDoctor />
          </ListContentHour>
        </ContentConsultHour>
        
        <ContentConsultList>
          <ListContentConsult>
            <ListConsultDashDoctor />
          </ListContentConsult>
        </ContentConsultList>
      </ContainerConsult>
    </div>
  );
}

export default DashDoctor;
