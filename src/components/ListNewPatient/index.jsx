import { api } from "../../services/api";
import { ContainerListNewPatient } from "./styles";
import { useState } from "react";

function ListNewPatient() {
  const [datesDash, setDatesDash] = useState(
    JSON.parse(localStorage.getItem("token"))
  );

  api.get(`/users?doctorId=${datesDash.user.id}`, {
    headers: {
      'Content-Type': "application/json",
      'Authorization': `Bearer ${datesDash.accessToken}`
    }
} )
.then((res) =>{
  console.log(res)
})  
.catch((res) =>{
  console.log(res)
})  



const itemCart = (item) => {
  return (
    <li key={item.id} className="Li-Name">
      <div>teste</div>
    </li>
  );
};
  return (
    <ContainerListNewPatient>
      <div className="name-and--date">
        <h3>{}</h3>
        <h3>data de nascimento</h3>
      </div>
      <div className="phone-and--email">
        <h3>telefone</h3>
        <h3>email</h3>
      </div>
    </ContainerListNewPatient>
  );
}

export default ListNewPatient;
