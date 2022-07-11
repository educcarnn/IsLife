import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

// import Input from "../../components/inputs";
import { Input } from "../../components/inputs";
import { Select } from "../../components/inputs";
import ButtonForm from "../../components/button";

import { DivGlobalLogin, FormLoginDoctor } from "./style";
import { Nav } from "./style";

import { useHistory } from "react-router-dom";

import Logo from "../../img/IsLifeLogo.png";

function AuthDoctor() {
  const history = useHistory();

  let schema = yup.object().shape({
    name: yup.string().required("Adicione valores válidos"),
    cpf: yup.string().required("CPF Inválido"),
    // age: yup.string().required("campo está vazio"),
    email: yup.string().required("campo obrigatório").email("e-mail inválido!"),
    confirmedPassword: yup
      .string()
      .required("confirmação obrigatória")
      .oneOf([yup.ref("password")], "senha desigual!"),
    telefone: yup.string().required("informe o seu telefone"),
    profissão: yup.string().required("selecione um dos campos"),
    crm: yup.string().required("documentação obrigatória"),
    cnpj: yup.string().required("campo obrigatório"),
  });

<<<<<<< HEAD
  // const sendates = (info) => {
  //   const dates = {
  //     name: info.name,
  //   };
  // };
=======
  const sendates = (info) => {
    const dates = {
      name: info.name,
      cpf: info.cpf,
    }
  }
>>>>>>> 6d801309839c5f33ecbc6648ad1b9455a04d365b

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    console.log(data);

    data.type = "doctor";
    data.patients = [];

    axios
      .post("https://is-life-fake-api.herokuapp.com/register", data)
      .then((response) => {
        console.log(response);
        console.log(data);
        localStorage.setItem(
          "@isLifetoken:",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem(
          "@isLifeDoctor:",
          JSON.stringify(response.data.user)
        );
        response.data.user.type === "patient"
          ? history.push("/dashpatient")
          : history.push("/dashdoctor");
      })
      .catch((err) => console.log(err));
  };

  return (
    <DivGlobalLogin>
      <Nav>
        <div>
          <img src={Logo} alt="IsLife" />
        </div>
      </Nav>

      <FormLoginDoctor onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Nome"
          placeholder="Nome completo"
          register={register}
          name="name"
        />
        <span> {errors.name && errors.name.message} </span>
        <Input label="CPF" placeholder="CPF" register={register} name="cpf" />
        <span> {errors.cpf && errors.cpf.message} </span>
        {/* <Input label="Idade" placeholder="Sua idade" {...register("age")} />
        <span> {errors.age && errors.age.message} </span> */}
        <Input
          label="E-mail"
          placeholder="E-mail"
          register={register}
          name="email"
        />
        <span> {errors.email && errors.email.message} </span>
        <Input
          register={register}
          name="password"
          label="Senha"
          type="password"
          placeholder="Senha"
        />
        <span> {errors.password && errors.password.message} </span>
        <Input
          label="Telefone"
          placeholder="Telefone"
          register={register}
          name="telefone"
        />
        <span> {errors.telefone && errors.telefone.message} </span>
        <Input
          label="Confirme sua senha"
          type="password"
          placeholder="Confirme sua senha"
          register={register}
          name="confirmedPassword"
        />
        <span>
          {" "}
          {errors.confirmedPassword && errors.confirmedPassword.message}{" "}
        </span>

        <Select label="Profissão" register={register} name="profissão">
          <option value="psicóloga">Psicóloga(o)</option>
          <option value="psiquiatra">Psiquiatra</option>
          <option value="outros">Outros</option>
        </Select>
        <span> {errors.profissão && errors.profissão.message} </span>
        <Input
          label="Certificação"
          placeholder="CRM ou CFP"
          register={register}
          name="crm"
          {...register("crm")}
        />
        <span> {errors.crm && errors.crm.message} </span>
        <Input
          label="CNPJ"
          placeholder="CNPJ"
          register={register}
          name="cnpj"
        />
        <span> {errors.cnpj && errors.cnpj.message} </span>
        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </FormLoginDoctor>
    </DivGlobalLogin>
  );
}

export default AuthDoctor;
