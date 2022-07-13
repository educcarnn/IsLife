import { api } from "../../services/api";

import { useState, useEffect } from "react";

import Tarefa from "../tarefa";

import { ListaTarefas, ContentPatient } from "./style";

import { useContext } from "react";
import { MyRoutineContext } from "../../providers/MyRoutine";

function MyRoutineList() {
  const token = JSON.parse(localStorage.getItem("token"));

  console.log(token.user.id + "id salvo na localstorage");

  const { isMove } = useContext(MyRoutineContext);

  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    api
      .get(`/toDo/?userId=:${token.user.id}`)

      .then((res) => {
        setTarefas([...res.data]);
      })

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api

      .get(`/toDo/?userId=${token.user.id}`)
      .then((res) => {
        console.log(res);
        console.log(token.user.id + "valor do id da lista");

        setTarefas([...res.data]);
      })
      .catch((err) => console.log(err));
  }, [isMove]);

  const tarefasOrdenadas = tarefas.sort(function (a, b) {
    if (a.horarioTarefa < b.horarioTarefa) {
      return -1;
    } else {
      return true;
    }
  });

  useEffect(() => {
    api
      .get(`/toDo/?userId=${token.user.id}`)

      .then((res) => {
        console.log(res);
        setTarefas([...res.data]);
      })
      .catch((err) => console.log(err));
  }, [isMove]);

  return (
    <>
      <ContentPatient>
        <ListaTarefas>
          {tarefasOrdenadas.map((atividade) => (
            <Tarefa
              key={atividade.id}
              id={atividade.id}
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
