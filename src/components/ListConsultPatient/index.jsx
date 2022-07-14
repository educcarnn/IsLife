import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { UlListConsult } from "../../pages/ConsultPatient/style";
import { ContainerListConsult } from "../ConsultListPatient/style";

function ListConsultPatient() {
  const dataPatient = JSON.parse(localStorage.getItem("token"));

  const [consultas, setConsultas] = useState([])

  useEffect(() => {
    api.get(`/consultas?IdPatient=${dataPatient.user.id}`, {
        headers: { 
            Authorization: `Bearer ${dataPatient.accessToken}` },
      })
      .then((res) => {
        setConsultas(res.data);
      });

  }, [consultas]);

  return (
    <UlListConsult>
      Consultas
      {consultas.map((element, key) => {
        return (
          <ContainerListConsult key={key}>
            <h3>{element.nome}</h3>
            <h3>{element.dataConsulta}</h3>
            <h3>{element.horarioConsulta}</h3>
            <h3>{element.modo}</h3>
            <h3>
              {consultas?.map((item) =>
                item.id === element.userId ? item.name : null)}
            </h3>
          </ContainerListConsult>
        );
      })}
    </UlListConsult>
  );
}

export default ListConsultPatient;
