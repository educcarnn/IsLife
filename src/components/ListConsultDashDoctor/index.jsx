import { ContainerList } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

function ListConsultDashDoctor() {
  const [consultas, setConsultas] = useState([]);

  const [datesDash, setDatesDash] = useState(
    JSON.parse(localStorage.getItem("token"))
  );

  useEffect(() => {
    api
      .get(`/consultas?IdDoctor=${datesDash.user.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${datesDash.accessToken}`,
        },
      })
      .then((res) => setConsultas(res.data))
      .catch((err) => console.log(err));
  }, [consultas]);

  if(consultas.length < 0) {
    return (
      <div>
        <div>Sem consultas no momento</div>
      </div>
    )
  } else {
   
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
}

export default ListConsultDashDoctor;
