import { api } from "../../services/api";

import { useState, useEffect } from "react";

import Tarefa from "../tarefa";

import { ListaTarefas, ContentPatient } from "./style";

// import { useContext } from "react";
// import { MyRoutineProvider } from "../../providers/MyRoutine";

function MyRoutineList() {
  const usuario = JSON.parse(localStorage.getItem("user"));

  // const { isMove } = useContext(MyRoutineProvider);

  // console.log(isMove);

  // console.log(move);

  //   console.log(usuario);

  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    api
      .get(`/toDo/?IdPatient=:${usuario.id}`)
      .then((res) => {
        console.log(res);
        setTarefas([...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(tarefas);

  const tarefasOrdenadas = tarefas.sort(function (a, b) {
    if (a.horarioTarefa < b.horarioTarefa) {
      return -1;
    } else {
      return true;
    }
  });

  console.log(tarefasOrdenadas);

  // useEffect(() => {
  //   api
  //     .get(`/toDo/?IdPatient=:${usuario.id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setTarefas([...res.data]);
  //     })
  //     .catch((err) => console.log(err));
  // }, [move]);

  console.log(tarefas);

  return (
    <>
      <ContentPatient>
        <ListaTarefas>
          {tarefasOrdenadas.map((atividade) => (
            <Tarefa
              key={atividade.id}
              msgTarefa={atividade.msgTarefa}
              horarioTarefa={atividade.horarioTarefa}
              check={atividade.check}
            />
          ))}
        </ListaTarefas>
      </ContentPatient>
    </>
  );
}

export default MyRoutineList;
