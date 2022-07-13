import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import logo from "../../img/islife.png"
import { useHistory } from "react-router-dom";
import { DivElems, FormElem } from "./style";
import { DivVoltar } from "./style";
import IsAuth from "../../components/Roules/IsAuth";


function AuthDoctor() {
  const history = useHistory()

  let schema = yup.object().shape({
    name: yup.string().required("Adicione valores válidos"),
    cpf: yup.string().required("CPF Inválido"),
    email: yup.string().required("campo obrigatório").email("e-mail inválido!"),
    password: yup
    .string()
    .min(6, "mínino de 6 dígitos")
    .required("campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("confirmação obrigatória")
      .oneOf([yup.ref("password")], "senha desigual!"),
    telefone: yup.string().required("informe o seu telefone"),
    profissão: yup.string().required("selecione um dos campos"),
    crm: yup.string().required("documentação obrigatória"),
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

  if(localStorage.getItem('token') !== null) {
    return (
     <IsAuth/>
    )
  }else {

    return (

      <FormElem className="formItem" onSubmit={handleSubmit(sendDates) }>
          <button onClick={() => history.push("/")} className="buttonDoctor">
            <img src={logo} alt={logo} className="imgSize"></img>
          </button>
          <DivVoltar>
          <button onClick={() => history.push("/")} className="button">Voltar</button>
        </DivVoltar>
          
          <div className="DivElem">
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
              <input placeholder="Digite aqui seu e-mail" {...register('email')} className="label" required></input>
            </DivElems>
            <DivElems>
              <label>Senha</label>
              <input placeholder="Digite aqui sua senha" {...register('password')} className="label" type='password' required></input>
            </DivElems>
            <DivElems>
              <label>Confirmar sua senha</label>
              <input placeholder="Confirme sua senha" {...register('confirmPassword')} className="label" type='password'></input>
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
          <div className="DivButton">
            <button type="submit">Cadastrar</button>
          </div>
        </FormElem>        
      );
  }
 
}

export default AuthDoctor;
