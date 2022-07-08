import { ContainerHeader } from "./styles";
import logo from "../../assets/img/logo.png";
import { useHistory } from "react-router-dom";

function HeaderDoctor() {
  const history = useHistory();

  return (
    <ContainerHeader>
      <img src={logo} alt="" />
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
    </ContainerHeader>
  );
}

export default HeaderDoctor;
