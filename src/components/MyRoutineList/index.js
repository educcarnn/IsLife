import { api } from "../../services/api";

import { useState, useEffect } from "react";

import Tarefa from "../tarefa";

import { ListaTarefas, ContentPatient } from "./style";

function MyRoutineList() {
  const usuario = JSON.parse(localStorage.getItem("user"));

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

  return (
    <>
      <ContentPatient>
        <ListaTarefas>
          {tarefas.map((atividade) => (
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
