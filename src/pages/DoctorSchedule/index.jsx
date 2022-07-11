import {
  ContainerSchedule,
  ContentSchedule,
  ContentImgSchedule,
  ListContentSchedule,
} from "./styles";
import noCard from "../../assets/img/NoCard.svg";
import imgSchedule from "../../assets/img/imgSchedule.svg";
import ListSchedule from "../../components/ListScheduleDashSoctor";

function DoctorSchedule() {
  return (
    <ContainerSchedule>
      <ContentSchedule>
        <div className="title-content">
          <h1 className="title-schedule">Agendar uma consulta</h1>
          <button className="btn-schedule">+</button>
        </div>
        <ListContentSchedule>
          <ListSchedule />
          <img className="img-no-card" src={noCard} alt="" />
          <img className="img-no-card" src={noCard} alt="" />
          <img className="img-no-card" src={noCard} alt="" />
          <img className="img-no-card" src={noCard} alt="" />
          <img className="img-no-card" src={noCard} alt="" />
        </ListContentSchedule>
      </ContentSchedule>
      <ContentImgSchedule>
        <img className="img-schedule" src={imgSchedule} alt="" />
      </ContentImgSchedule>
    </ContainerSchedule>
  );
}

export default DoctorSchedule;
