import { TarefaConcent, DivExtra } from "./style";

function Tarefa(props) {
  return (
    <>
      <TarefaConcent>
        <input type="checkbox" />
        <DivExtra>
          <h6>{props.msgTarefa}</h6>
          <span>{props.horarioTarefa}</span>
        </DivExtra>
      </TarefaConcent>
    </>
  );
}

export default Tarefa;
