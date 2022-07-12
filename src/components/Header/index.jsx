import { ContainerHeader, StyledMenuMobileDoctor  } from "./styles";
import logo from "../../assets/img/logo.png";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";



function HeaderDoctor() {


  const history = useHistory();
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);
  const handleClick = () => {
    history.push("/");
    localStorage.removeItem("token");
  };

  const displayMenuMobile = () => {
    setIsActiveMenuMobile(!isActiveMenuMobile);
  };


  return (
    <ContainerHeader>
      <button className="buttonImg" onClick={handleClick}>
      <img src={logo} alt="" />
      </button>
      
      <div className="div-buttons">
        <button
          className="btn-header"
          onClick={() => history.push("./dashdoctor")}
        >
          Consultas
        </button>
        <button
          className="btn-header"
          onClick={() => history.push("./doctorschedule")}
        >
          Agendar
        </button>
        <button
          className="btn-header"
          onClick={() => history.push("./doctorpatient")}
        >
          Pacientes
        </button>
      </div>

      <div className="Menu__Mobile--icon">
        {isActiveMenuMobile === true ? (
          <FiMenu onClick={displayMenuMobile} style={{ fontSize: "32px" }} />
        ) : (
          <MdClose onClick={displayMenuMobile} style={{ fontSize: "30px" }} />
        )}
      </div>

      <StyledMenuMobileDoctor
        className="Menu__Mobile"
        Display={isActiveMenuMobile === false ? "block" : "none"}
      >
        <ul className={isActiveMenuMobile ? "Menu--Hidden" : "Menu"}>
          <div className="UserInformation">
            <div className="User__Info">
              <section> avatar </section>
              <h3>Leomar P.</h3>
            </div>

            <div>
              <button className="Menu__Mobile--Btn"> Sair </button>
            </div>
          </div>

  
          <li>Consultas</li>
          <li>Agendar</li>
          <li>Pacientes</li>
        </ul>
      </StyledMenuMobileDoctor>
    </ContainerHeader>
  );
}

export default HeaderDoctor;
