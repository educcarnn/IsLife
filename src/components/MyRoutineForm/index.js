import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Form, DivExtra } from "./style";
import { Input, Select } from "../inputs";

import ButtonForm from "../button";

import { api } from "../../services/api";

// import { useContext } from "react";
// import { MyRoutineProvider } from "../../providers/MyRoutine";

function MyRoutineForm() {
  const paciente = JSON.parse(localStorage.getItem("token"));
  const usuario = JSON.parse(localStorage.getItem("user"));

  // const { spyOnMove } = useContext(MyRoutineProvider);

  // console.log(paciente);
  // console.log(paciente.accessToken);
  // console.log(usuario.name);
  // console.log(usuario.id);

  const token = paciente.accessToken;

  const schema = yup.object().shape({
    msgTarefa: yup.string().required("Campo obrigatório"),
    horarioTarefa: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // console.log(errors);

  const submeterTarefa = (data) => {
    // console.log(data);
    data.nome = usuario.name;
    data.userId = usuario.id;
    data.check = false;

    api
      .post("/toDo", data, {
        header: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Form onSubmit={handleSubmit(submeterTarefa)}>
        <DivExtra>
          <Input
            label="Tarefa"
            placeholder="digite sua tarefa"
            register={register}
            name="msgTarefa"
          />
          <span> {errors.msgTarefa && errors.msgTarefa.message} </span>

          <Select
            label="Horario"
            placeholder="horario da tarefa"
            register={register}
            name="horarioTarefa"
          >
            <option value="00:00">00:00</option>
            <option value="00:30">00:30</option>
            <option value="01:00">01:00</option>
            <option value="01:30">01:30</option>
            <option value="02:00">02:00</option>
            <option value="02:30">02:30</option>
            <option value="03:00">03:00</option>
            <option value="03:30">03:30</option>
            <option value="04:00">04:00</option>
            <option value="04:30">04:30</option>
            <option value="05:00">05:00</option>
            <option value="05:30">05:30</option>
            <option value="06:00">06:00</option>
            <option value="06:30">06:30</option>
            <option value="07:00">07:00</option>
            <option value="07:30">07:30</option>
            <option value="08:00">08:00</option>
            <option value="08:30">08:30</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
            <option value="22:00">22:00</option>
            <option value="22:30">22:30</option>
            <option value="23:00">23:00</option>
            <option value="23:30">23:30</option>
          </Select>
          <span> {errors.horarioTarefa && errors.horarioTarefa.message} </span>
        </DivExtra>
        <ButtonForm type="submit">Adicionar Tarefa</ButtonForm>
      </Form>
    </>
  );
}

export default MyRoutineForm;
