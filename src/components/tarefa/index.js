import { TarefaConcent, DivExtra } from "./style";

import { useState } from "react";

import { useContext } from "react";
import { MyRoutineContext } from "../../providers/MyRoutine";

import { api } from "../../services/api";

function Tarefa(props) {
  const { spyOnMove } = useContext(MyRoutineContext);

  const token = JSON.parse(localStorage.getItem("token"));

  const [check, setCheck] = useState(props.check);

  function checkAtv() {
    return check === false ? setCheck(true) : setCheck(false);
  }

  function removeAtv() {
    console.log("função foi startatda");
    api.delete(`/toDo?id=${props.id}`, {
      header: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });

    spyOnMove();
  }

  if (check === false) {
    return (
      <>
        <TarefaConcent
          id={props.id}
          style={{ borderLeft: "5px solid 	#B22222" }}
        >
          <input value={check} type="checkbox" onClick={() => checkAtv()} />
          <DivExtra>
            <h6>{props.msgTarefa}</h6>
            <span>{props.horarioTarefa}</span>
          </DivExtra>
          <button onClick={() => removeAtv()}>Remover</button>
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
          <button onClick={() => removeAtv()}>Remover</button>
        </TarefaConcent>
      </>
    );
  }
}

export default Tarefa;
