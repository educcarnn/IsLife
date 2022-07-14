import { ContainerForm } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { toast } from "react-toastify";

function FormRegisterNewPatient() {
  const [datesDash, setDatesDash] = useState(
    JSON.parse(localStorage.getItem("token"))
  );

  const sendDates = (info) => {
    const dates = {
      name: info.name,
      email: info.email,
      age: info.age,
      cpf: "444.444.444-44",
      telefone: info.telephone,
      image: "https://cdn-icons-png.flaticon.com/512/146/146025.png",
      password: info.password,
      type: "patient",
      profissão: "Autonomo",
      doctorId: datesDash.user.id,
    };

    api
      .post("/register", dates)
      .then((res) => console.log(res))
      .then((res) => {
        console.log(res.response.data);
      });
    toast.success("Paciente adicionado com sucesso");
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Mínimo 3 carácteres")
      .required("Campo obrigatório"),
    age: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo obrigatório"),
    telephone: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerForm onSubmit={handleSubmit(sendDates)}>
      <div className="div-input">
        <input
          className="input-new-patient"
          type="text"
          placeholder="Nome completo"
          {...register("name")}
          required
        />
        <span>{errors.name && errors.name.message}</span>
        <input
          className="input-new-patient"
          placeholder="Idade"
          {...register("age")}
          required
        />

        <input
          className="input-new-patient"
          type="email"
          placeholder="Email"
          {...register("email")}
          required
        />

        <input
          className="input-new-patient"
          type="password"
          placeholder="Senha"
          {...register("password")}
          required
        />
        <span>{errors.password && errors.password.message}</span>
        <input
          className="input-new-patient"
          type="tel"
          {...register("telephone")}
          placeholder="Telefone"
          required
        />
      </div>
      <button type="submit" className="btn-register-patient">
        Cadastrar Cliente
      </button>
    </ContainerForm>
  );
}

export default FormRegisterNewPatient;
