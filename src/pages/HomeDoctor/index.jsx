import { useHistory } from "react-router-dom";
import { DivFather } from "./style";
import undrawDoctor from "../../img/doctorsundraw.svg";
import ButtonForm from "../../components/button";

function HomeDoctor() {
  const history = useHistory();

  return (
    <DivFather>
      <div className="container-btn--home---doctor">
        <div className="div-btn--home---doctor">
          <ButtonForm
            onClick={() => history.push("/")}
            className="voltar-home--doctor"
          >
            Voltar
          </ButtonForm>
        </div>
      </div>
      <div className="ElemItens">
        Seja bem vindo, ao lugar que é possível ter maior proximidade com seus
        pacientes
        <img src={undrawDoctor} alt={undrawDoctor} className="ImgElem"></img>
      </div>

      <div className="DivElem">
        <div className="ElemDiv">
          <span>Não é cadastrado? Clique nesse botão</span>
          <button onClick={() => history.push("/register/doctor")}>
            Ir para cadastro
          </button>
        </div>
        <div className="ElemDiv">
          <span>Já tem cadastro? Realize aqui seu login</span>
          <button onClick={() => history.push("/login")}>Ir para login</button>
        </div>
      </div>
    </DivFather>
  );
}

export default HomeDoctor;
