import {
  ContainerSchedule,
  ContentSchedule,
  ContentImgSchedule,
  ListContentSchedule,
} from "./styles";
import noCard from "../../assets/img/NoCard.svg";
import imgSchedule from "../../assets/img/imgSchedule.svg";
import ListSchedule from "../../components/ListScheduleDashSoctor";
import ModalSchedule from "../../components/modalSchedule/index";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import AuthGlobal from "../../components/Roules/AuthGlobal";

function DoctorSchedule() {
  const [showModal, setShowModal] = useState(false);
  const [arrConsultas, setArrConsultas] = useState([]);
  const newToken = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    api
      .get(`/consultas?IdDoctor=${newToken.user.id}`, {
        headers: { Authorization: `Bearer ${newToken.accessToken}` },
      })
      .then((response) => setArrConsultas(response.data));
  }, [showModal, arrConsultas]);

  if(localStorage.getItem('token') === null) {
    return (
     <AuthGlobal/>
     )
    }else {


  return (
    <ContainerSchedule>
      {showModal && (
        <ModalSchedule showModal={showModal} setShowModal={setShowModal} />
      )}
      <ContentSchedule>
        <div className="title-content">
          <h1 className="title-schedule">Agendar uma consulta</h1>
          <button onClick={() => setShowModal(true)} className="btn-schedule">
            +
          </button>
        </div>
        <ListContentSchedule>
          {arrConsultas.map((element) => (
            <ListSchedule element={element} />
          ))}
        </ListContentSchedule>
      </ContentSchedule>
      <ContentImgSchedule>
        <img className="img-schedule" src={imgSchedule} alt="" />
      </ContentImgSchedule>
    </ContainerSchedule>
  )};
}

export default DoctorSchedule;
