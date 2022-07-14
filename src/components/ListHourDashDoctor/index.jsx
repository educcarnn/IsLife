import { ContainerList } from "./styles";
import { FaClock } from "react-icons/fa";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

function ListHourDashDoctor() {
  const [dayList, setDayList] = useState([]);

  const local = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    api
      .get(`/consultas?IdDoctor=${4}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${local.accessToken}`,
        },
      })
      .then((res) => setDayList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {dayList?.map((info, key) => {
        return (
          <ContainerList className="li-content-hour" key={key}>
            <div className="avatar">
             
            </div>
            <div className="list-info">
              <h3>{info.nome}</h3>
              <span>
                <FaClock /> {info.horarioConsulta}
              </span>
            </div>
          </ContainerList>
        );
      })}
    </>
  );
}

export default ListHourDashDoctor;
