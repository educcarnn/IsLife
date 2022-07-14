import { useHistory } from "react-router-dom";
import undraw from "../../img/undraw.svg";
import logo from "../../img/islife.png";
import { DivHomePatient } from "./style";
import ButtonForm from "../../components/button";

function HomePatient() {
  const history = useHistory();
  return (

    <DivHomePatient>

      <div className="container-btn--home---patient">

        <div className="div-btn--home---patient">
          <ButtonForm
            onClick={() => history.push("/")}
            className="voltar-home--patient">Voltar
          </ButtonForm>
        </div>

      </div>

      <div>Feito para ficar mais próximo do seu médico</div>

      <img src={undraw} alt={undraw} className="imgHome"></img>
      
      <div className="DivButtonHome">
        <span>Realize aqui seu login</span>
        <button onClick={() => history.push("/login")}>Ir para login</button>
      </div>

    </DivHomePatient>
  );
}
export default HomePatient;
