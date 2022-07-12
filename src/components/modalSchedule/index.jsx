import {DivGlobalModalShedule,DivFormModal,DivHeaderForm, ButtonSchedule,Form} from "./style"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { api } from "../../services/api.js";
import {newUser} from "../../services/token"

function  ModalSchedule({showModal,setShowModal}){

    const newToken= JSON.parse(localStorage.getItem("@isLifetoken:"))
 
    const schema = yup.object().shape({
        nome: yup.string().required("campo obrigatório"),
        horarioConsulta: yup.string().required("Campo obrigatório"),
        dataConsulta: yup.string().required("Campo Obirgatório"),
        modo:yup.string().required("Campo Obirgatório"),
    })

    const {register, handleSubmit, formState:{errors},} = useForm(
       { resolver: yupResolver(schema)} 
        );

    const onSubmitFunction = (data)=>{
    
    const objData = {
        nome: data.nome,
        dataConsulta: data.dataConsulta,
        horarioConsulta:data.horarioConsulta,
        modo: data.modo,
        userId: newUser.id,
        IdPatient: 3
    }
   
    api.post("/consultas", objData, {
        headers: {"Authorization": `Bearer ${newToken}`}}).then(response =>{
        setShowModal(false)

    })
}
    
    return(
    
    <DivGlobalModalShedule>
        <DivFormModal>

            <DivHeaderForm>
                <h3>Agendamento de Consulta</h3>
                <button onClick={()=> setShowModal(false)}>X</button>
            </DivHeaderForm>

            <Form onSubmit={handleSubmit(onSubmitFunction)}>

                <input type="text" 
                placeholder="Digite o nome do paciente"
                {...register("nome")} 
                name = "nome"
                error={errors.nome?.message}/>

                <input type="text" placeholder="tipo da consulta: Ex: presencial" 
                       {...register("modo")}
                       name = "modo"/>

                 <div className="divPicker">
                    
                    <div className="divPickerData">
                        <label>Data</label>
                        <input 
                          type= "date"
                          className= "datepicker"
                          placeholder = "Ex: 10/08/2022"
                          {...register("dataConsulta")} 
                          name = "dataConsulta"/>
                    </div>

                    <div className="divPickerHora">
                        <label>Hora</label>
                        <input type="text" 
                               placeholder="Ex: 16:00"
                               {...register("horarioConsulta")}
                               name= "horarioConsulta"/>
                    </div>
                </div>
                <ButtonSchedule type="submit">Agendar Consulta</ButtonSchedule>
            </Form>


        </DivFormModal>
    </DivGlobalModalShedule>
    
    
    )
}

export default ModalSchedule;