import { TarefaConcent, DivExtra } from "./style";

import { useState } from "react";

function Tarefa(props) {
  const [check, setCheck] = useState(props.check);

  function checkAtv() {
    return check === false ? setCheck(true) : setCheck(false);
  }

  if (check === false) {
    return (
      <>
        <TarefaConcent style={{ borderLeft: "5px solid 	#B22222" }}>
          <input value={check} type="checkbox" onClick={() => checkAtv()} />
          <DivExtra>
            <h6>{props.msgTarefa}</h6>
            <span>{props.horarioTarefa}</span>
          </DivExtra>
        </TarefaConcent>
      </>
    );
  } else {
    return (
      <>
        <TarefaConcent style={{ borderLeft: "5px solid #03B898" }}>
          <input value={check} type="checkbox" onClick={() => checkAtv()} />
          <DivExtra>
            <h6>{props.msgTarefa}</h6>
            <span>{props.horarioTarefa}</span>
          </DivExtra>
        </TarefaConcent>
      </>
    );
  }
}

export default Tarefa;
