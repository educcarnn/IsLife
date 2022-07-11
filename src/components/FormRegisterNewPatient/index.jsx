import { ContainerForm } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";

// import { Input } from "../../components/inputs";

function FormRegisterNewPatient() {
  const doutor = JSON.parse(localStorage.getItem("@isLifeDoctor:"));

  const token = JSON.parse(localStorage.getItem("@isLifetoken:"));

  console.log(token);

  // console.log(doutor);
  // console.log(doutor.patients);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    age: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 digitos")
      .required("Campo obrigatório"),
    telefone: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signUp = (data) => {
    console.log(data);
    data.doctorId = `${doutor.id}`;
    data.image = "";
    data.profissão = "dev front end";
    data.type = "patient";

    api
      .post("/register", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("@isNewPatient:", JSON.stringify(res.data.user));
      })

      .catch((err) => console.log(err));

    getPatient();
  };

  async function getPatient() {
    const newPatient = JSON.parse(localStorage.getItem("@isNewPatient:"));

    console.log(newPatient);

    const newPatientAdd = {
      name: newPatient.name,
      email: newPatient.email,
      id: newPatient.id,
    };

    console.log(newPatientAdd);
    newPatientThisDoctor(newPatientAdd);
  }

  async function newPatientThisDoctor(obj) {
    console.log(obj);
    api
      .patch(`/users/${doutor.id}`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    removeKeyFromPatient();
  }

  async function removeKeyFromPatient() {
    localStorage.removeItem("@isNewPatient:");
  }

  return (
    <ContainerForm onSubmit={handleSubmit(signUp)}>
      <div className="div-input">
        <input
          className="input-new-patient"
          // label=""
          type="text"
          placeholder="Nome completo"
          {...register("name")}
          // register={register}
          // name="name"
        />
        <input
          className="input-new-patient"
          // label=""
          type="date"
          placeholder="Data de Nascimento"
          {...register("age")}
          // register={register}
          // name="age"
        />
        <input
          className="input-new-patient"
          type="text"
          placeholder="CPF"
          {...register("cpf")}
          // register={register}
          // name="cpf"
        />
        <input
          className="input-new-patient"
          // label=""
          type="email"
          placeholder="Email"
          {...register("email")}
          // register={register}
          // name="email"
        />
        <input
          className="input-new-patient"
          // label=""
          type="password"
          placeholder="Senha"
          {...register("password")}
          // register={register}
          // name="password"
        />
        <input
          className="input-new-patient"
          // label=""
          type="tel"
          {...register("telefone")}
          placeholder="Telefone"
          // register={register}
          // name="telefone"
        />
      </div>
      <button type="submit" className="btn-register-patient">
        Cadastrar Cliente
      </button>
    </ContainerForm>
  );
}

export default FormRegisterNewPatient;

{
  /* <Input
// className="input-new-patient"
label=""
type="text"
placeholder="Nome completo"
{...register("name")}
register={register}
name="name"
/>
<Input
// className="input-new-patient"
label=""
type="date"
placeholder="Data de Nascimento"
register={register}
name="age"
/>
<Input
// className="input-new-patient"
type="text"
placeholder="CPF"
register={register}
name="cpf"
/>
<Input
// className="input-new-patient"
label=""
type="email"
placeholder="Email"
register={register}
name="email"
/>
<Input
// className="input-new-patient"
label=""
type="password"
placeholder="Senha"
register={register}
name="password"
/>
<Input
// className="input-new-patient"
label=""
type="tel"
placeholder="Telefone"
register={register}
/> */
}
