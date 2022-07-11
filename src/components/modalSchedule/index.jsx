import {DivGlobalModalShedule,DivFormModal,DivHeaderForm, ButtonSchedule,Form} from "./style"
import DatePicker from "react-date-picker";
import { useState } from "react";
import DoctorSchedule from "../../pages/DoctorSchedule/index"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { FiClock, FiCalendar } from "react-icons/fi";



function  ModalSchedule({showModal,setShowModal}){

    const [selectedDate, setSelectedDate] = useState(null)


    const schema = yup.object().shape({
        name: yup.string().required("campo obrigatório"),
        hours: yup.string().required("Campo obrigatório"),
        calendario: yup.string().required("Campo Obirgatório")
    })

    const {register, handleSubmit, formState:{errors},} = useForm(
       { resolver: yupResolver(schema)} 
        );

    const onSubmitFunction = (data)=>{
        console.log(data)
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
                {...register("name")} 
                name = "name"
                error={errors.name?.message}/>

                 <div className="divPicker">
                    
                    <div className="divPickerData">
                        <label>Data</label>
                        <input 
                          className= "datepicker"
                          placeholder = "Ex: 10/08/2022"
                          {...register("calendario")} 
                          name = "calendario"/>
                    </div>

                    <div className="divPickerHora">
                        <label>  Hora</label>
                        <input type="text" 
                               icon = {FiClock}
                               placeholder="Ex: 16:00"
                               {...register("hours")}
                               name= "hours"/>
                    </div>
                </div>
                <ButtonSchedule type="submit">Agendar Consulta</ButtonSchedule>
            </Form>


        </DivFormModal>
    </DivGlobalModalShedule>
    
    
    )
}

export default ModalSchedule;