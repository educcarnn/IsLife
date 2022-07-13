import imgLogin from "../../../img/IsLogin.svg"
import { useHistory } from "react-router";
import { AuthDiv } from "./style"
import { useState } from "react";

function IsAuth() {
    const history = useHistory();
    const [datesDash, setDatesDash] = useState(
        JSON.parse(localStorage.getItem("token"))
      );
    

      setTimeout(() => {
        datesDash.user.type === "patient" ? history.push("/dashpatient") : history.push("/dashdoctor");
      }, 2500);    
      
    return (
        <AuthDiv>
            <img src={imgLogin} alt={imgLogin} className="imgAuth"></img>
            <div className="loginIs">
                <div>Há um login no sistema</div>
                <div>Redirecionando ...</div>
            </div>
        </AuthDiv>
        
    )

}

export default IsAuth