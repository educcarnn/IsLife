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
            <p>{info.nome}</p>
            <p>{info.dataConsulta}</p>
            <p>{info.horarioConsulta}</p>
          </ContainerList>
        );
      })}
    </>
  );
}

export default ListConsultDashDoctor;
