import { ContainerForm } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";

function FormRegisterNewPatient() {
  const signUp = (data) => {
    console.log(data);
    api
      .post("/register", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    dateYear: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 digitos")
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
    <ContainerForm onSubmit={handleSubmit(signUp)}>
      <div className="div-input">
        <input
          className="input-new-patient"
          type="text"
          placeholder="Nome completo"
          {...register("name")}
        />
        <input
          className="input-new-patient"
          type="date"
          placeholder="Data de Nascimento"
          {...register("dateYear")}
        />
        <input
          className="input-new-patient"
          type="text"
          placeholder="CPF"
          {...register("cpf")}
        />
        <input
          className="input-new-patient"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <input
          className="input-new-patient"
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        <input
          className="input-new-patient"
          type="tel"
          placeholder="Telefone"
          {...register("telephone")}
        />
      </div>
      <button type="submit" className="btn-register-patient">
        Cadastrar Cliente
      </button>
    </ContainerForm>
  );
}

export default FormRegisterNewPatient;
