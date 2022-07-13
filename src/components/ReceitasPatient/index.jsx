import { useState } from "react";
import { ContainerReceitas, ContentReceitas } from "./style";
import noCardReceitas from "../../assets/img/NoCardReceitas.svg";
function PageReceitas() {
  const [noCard] = useState(0);

  return (
    <ContainerReceitas>
      <ContentReceitas>
        <div className="info-receitas">
          <h2 className="h2-info-remedio">nome do remedio</h2>
          <p className="vencimento">vencimento: 28 de agosto de 2022</p>
        </div>
        <div className="receitas">
          <img className="img-no--card--receitas" src={noCardReceitas} alt="" />
        </div>
      </ContentReceitas>
    </ContainerReceitas>
  );
}

export default PageReceitas;
