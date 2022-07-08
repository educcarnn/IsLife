import { ContainerHome, ContentWelcome, ContentImg } from "./style";
import logo from "../../assets/img/logo.png";
import imgHome from "../../assets/img/imgHome.svg";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <ContainerHome>
      <ContentWelcome>
        <div className="div-logo--home">
          <img src={logo} alt="" />
        </div>
        <div className="welcome">
          <h3>Seja Bem Vindo (a)</h3>
          <h2>IsLife</h2>
          <p className="text-line typing-animation">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            eaque iusto numquam omnis? Cum aliquam sequi, vitae sint veniam
            natus repellendus quod ab eius alias. Numquam, non labore. Possimus,
            assumenda.
          </p>
        </div>
        <div className="div-buttons--home">
          <button onClick={() => history.push("/authdoctor")}>
            Sou um profissional
          </button>
          <button onClick={() => history.push("/authpatient")}>
            Sou um cliente
          </button>
        </div>
      </ContentWelcome>
      <ContentImg>
        <img src={imgHome} alt="" />
      </ContentImg>
    </ContainerHome>
  );
}

export default Home;
