import ListConsultDashDoctor from "../../components/ListConsultDashDoctor";
import ListHourDashDoctor from "../../components/ListHourDashDoctor";
import {
  ContainerConsult,
  ContentConsultHour,
  ContentConsultList,
  ListContentHour,
  ListContentConsult,
} from "./style";
import AuthGlobal from "../../components/Roules/AuthGlobal";

function DashDoctor() {

  if(localStorage.getItem('token') === null) {
    return (
     <AuthGlobal/>
     )
    }else {
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
          <ListContentConsult className="teste">
            <ListConsultDashDoctor />
          </ListContentConsult>
        </ContentConsultList>
      </ContainerConsult>
    </div>
  )};
}

export default DashDoctor;
