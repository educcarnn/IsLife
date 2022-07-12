import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import {DivGlobalLogin, FormLogin,DivLabel,DivHeader,DivBody,DivInfo} from "./style.js"
import { api } from "../../services/api.js";
import logo from "../../img/islife.png"

function AuthPatient(){
    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().email("email inválido").required("campo obrigatório"),
        password: yup.string().min(6, "mínino de 6 dígitos").required("campo obrigatório"),
    })

    const {register, handleSubmit, formState:{errors},} = useForm(
       { resolver: yupResolver(schema)} 
        );

    const onSubmitFunction = (data)=>{
        api.post("/login",data)
        .then(response =>{
            console.log( response.data) 
            // const {accessToken,user} = response.data
            localStorage.setItem("@isLifetoken:", JSON.stringify(response.data.accessToken))
            localStorage.setItem("@isLifeUser:", JSON.stringify(response.data.user))
            response.data.user.type === "patient" ? history.push("/dashpatient") : history.push("/dashdoctor")
        })
        
        .catch((err)=> console.log(err))    
    }
    
    return (
    <DivGlobalLogin>

        <DivHeader>
                <button onClick={()=> history.push("/")}>Voltar</button>
        </DivHeader>

             <div className="divImgLogo"> <img src={logo} alt="logo" /></div>

        <DivBody>

            <FormLogin onSubmit={handleSubmit(onSubmitFunction)}>
            <DivLabel><label>Email</label></DivLabel>

              <input 
              // register={register}
              {...register("email")} 
              name = "email"
              error={errors.email?.message}/>

           <DivLabel><label>Senha</label></DivLabel>

               <input 
               // register={register} 
               {...register("password")}
               name= "password"
               error={errors.email?.message}/>

            <button type="submit">Login</button>

            </FormLogin>

            <DivInfo>
                <h4>Sou médico ainda não tenho cadastro</h4>
                <button onClick={()=> history.push("/authdoctor")}>Cadastre-se</button>
            </DivInfo>

        </DivBody>

        </DivGlobalLogin>
    )
}

export default AuthPatient



