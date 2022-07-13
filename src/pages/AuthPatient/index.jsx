import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
  DivGlobalLogin,
  FormLogin,
  DivLabel,
  DivHeader,
  DivBody,
  DivInfo,
} from "./style.js";
import { api } from "../../services/api.js";
import logo from "../../img/islife.png";
import IsAuth from "../../components/Roules/IsAuth/index.jsx";


function AuthPatient() {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("email inválido").required("campo obrigatório"),
    password: yup
      .string()
      .min(6, "mínino de 6 dígitos")
      .required("campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        if(response.status === 200) {
          localStorage.setItem("token",JSON.stringify(response.data))
          toast.success("Sucesso no login");

          setTimeout(() => {
            response.data.user.type === "patient" ? history.push("/dashpatient") : history.push("/dashdoctor");
          }, 2000);       
        }
        
      })
      .catch((error) => {
        if (error.response.status) {
          toast.error("Erro no login, revise seus dados");
        }
      });
  };

  
  if(localStorage.getItem('token') !== null) {
    return (
      <IsAuth/>
    )
  } else {
    return (
      <DivGlobalLogin>
        <DivHeader>
          <button onClick={() => history.push("/")}>Voltar</button>
        </DivHeader>
  
        <div className="divImgLogo">
          {" "}
          <img src={logo} alt="logo" />
        </div>
  
        <DivBody>
          <FormLogin onSubmit={handleSubmit(onSubmitFunction)}>
            <DivLabel>
              <label>Email</label>
            </DivLabel>
  
            <input
              {...register("email")}
              name="email"
              error={errors?.email?.message}
              required
            />
  
            <DivLabel>
              <label>Senha</label>
    
            </DivLabel>
            <input
              {...register("password")}
              name="password"
              type="password"
              error={errors?.email?.password}
              required
            />
  
            <button type="submit">Login</button>
          </FormLogin>
  
          <DivInfo>
            <h4>Você é medico, e não tem cadastro?</h4>
            <button onClick={() => history.push("/register/doctor")}>
              Cadastre-se
            </button>
          </DivInfo>
        </DivBody>
      </DivGlobalLogin>
    );
  }
  
}

export default AuthPatient;
