function Tarefa(props) {
  return (
    <>
      <li>
        <input type="checkbox" />
        <h6>{props.msgTarefa}</h6>
        <span>{props.horarioTarefa}</span>
      </li>
    </>
  );
}

export default Tarefa;
