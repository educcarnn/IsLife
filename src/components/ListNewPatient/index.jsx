import { api } from "../../services/api";
import { ContainerListNewPatient } from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

function ListNewPatient() {
  const [datesDash, setDatesDash] = useState(
    JSON.parse(localStorage.getItem("token"))
  );
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    api.get(`/users?doctorId=${datesDash.user.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${datesDash.accessToken}`,
        },
      })
      .then((res) => {
        setPatient(res.data);
      });
  }, [patient]);

  const itemCart = (item) => {
    return (
      <ContainerListNewPatient key={item.id} className="Li-Name">
        <div className="name-and--date">
          <h3>Nome: {item.name}</h3>
          <h3>Idade: {item.age}</h3>
        </div>
        <div className="phone-and--email">
          <h3>Telefone: {item.telefone}</h3>
          <h3>Email: {item.email}</h3>
        </div>
      </ContainerListNewPatient>
    );
  };

  return <div>{patient?.map(itemCart)}</div>;
}

export default ListNewPatient;
