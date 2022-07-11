import {
  ContainerSchedule,
  ContentSchedule,
  ContentImgSchedule,
  ListContentSchedule,
} from "./styles";
import noCard from "../../assets/img/NoCard.svg";
import imgSchedule from "../../assets/img/imgSchedule.svg";
import ListSchedule from "../../components/ListScheduleDashSoctor";
import ModalSchedule from "../../components/modalSchedule/index"
import { useState } from "react";

function DoctorSchedule() {
  
  const [showModal, setShowModal] = useState(false)


  return (
    <ContainerSchedule>
      {showModal && (<ModalSchedule showModal={showModal} setShowModal={setShowModal}/>)}
      <ContentSchedule>
        <div className="title-content">
          <h1 className="title-schedule">Agendar uma consulta</h1>
          <button onClick={()=> setShowModal(true)} className="btn-schedule">+</button>
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
