import { ContainerList } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

function ListConsultDashDoctor() {
  const [consultas, setConsultas] = useState([]);

  const local = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    api
      .get(`/consultas?IdDoctor=${4}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${local.accessToken}`,
        },
      })
      .then((res) => setConsultas(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {consultas?.map((info, key) => {
        return (
          <ContainerList className="li-content-hour" key={key}>
            <div className="div-list-consult">
              <p>{info.nome}</p>
            </div>
            <div className="div-list-consult">
              <p>{info.dataConsulta}</p>
            </div>
            <div className="div-list-consult">
              <p>{info.horarioConsulta}</p>
            </div>
          </ContainerList>
        );
      })}
    </>
  );
}

export default ListConsultDashDoctor;
