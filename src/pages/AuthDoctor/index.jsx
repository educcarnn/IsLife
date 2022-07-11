import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import logo from "../../img/islife.png"
import { useHistory } from "react-router-dom";
import { DivElems, FormElem } from "./style";
function AuthDoctor() {
  const history = useHistory()

  let schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Digite aqui seu CPF"),
  });

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendDates = (info) => {
   
    const dates = {
      name: info.name,
      age: info.age,
      cpf: info.cpf,
      telefone: info.telefone,
      email: info.email,
      password: info.password, 
      type: "doctor",
      crm: info.crm,
      profissão: info.profissão,
      cnpj: '00000'
    };

    api
      .post("/register", dates)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (

  <FormElem className="formItem" onSubmit={handleSubmit(sendDates) }>
      <button onClick={() => history.push("/")} className="buttonDoctor">
        <img src={logo} alt={logo} className="imgSize"></img>
      </button>
      
      <div>
        <DivElems>
          <label>Nome</label>
          <input
            {...register("name")}
            placeholder="Digite aqui seu nome"
          className="label"></input>
        </DivElems>
        <DivElems>
          <label>Data de nascimento</label>
          <input {...register("age")} type='date' className="label"></input>
        </DivElems>
        <DivElems>
          <label>CPF</label>
          <input placeholder="Digite aqui seu CPF" {...register("cpf")} className="label"></input>
        </DivElems>
        <DivElems>
          <label>Telefone</label>
          <input placeholder="Digite seu telefone" {...register('telefone')} className="label"></input>
        </DivElems>
        <DivElems>
          <label>E-mail</label>
          <input placeholder="Digite aqui seu e-mail" {...register('email')} className="label"></input>
        </DivElems>
        <DivElems>
          <label>Senha</label>
          <input placeholder="Digite aqui sua senha" {...register('password')} className="label"></input>
        </DivElems>
        <DivElems>
          <label>Confirmar sua senha</label>
          <input placeholder="Confirme sua senha" {...register('confirmPassword')} className="label"></input>
        </DivElems>
        <DivElems>
          <label>CRM</label>
          <input placeholder="Digite seu CRM" {...register('crm')} className="label"></input>
        </DivElems>
        <DivElems>
          <label>Escolha sua profissão </label>
          <select {...register('profissão')} className="label">
            <option value="psicóloga">Psicóloga(o)</option>
            <option value="psiquiatra">Psiquiatra</option>
            <option value="outros">Outros</option>
          </select>
        </DivElems>
      </div>
      <div>
        <button type="submit">Cadastrar</button>
      </div>
    </FormElem>

    
  );
}

export default AuthDoctor;
