import { useEffect, useState } from "react"
import {api} from "../../services/api"
import {LiConsult, UlConsult} from "./style.js"

const dataPatient = JSON.parse(localStorage.getItem("token"))

function ListConsultPatient(){
    const [arrConsultRq, setArrConsultRq] = useState([])
    const [arrUser, setArrUser] = useState([])

    useEffect(()=>{
        api.get(`/consultas?IdPatient=${dataPatient.user.id}`, 
        {
            headers: {"Authorization": `Bearer ${dataPatient.accessToken}`
        }})

        .then((response)=> setArrConsultRq(response.data))

        api.get("/users", 
        {
            headers: {"Authorization": `Bearer ${dataPatient.accessToken}`
        }})

        .then((response)=> setArrUser(response.data))
    },[arrConsultRq,arrUser])
    
    return(
        <UlConsult>
            {arrConsultRq.map((element)=>{
              return(
                <LiConsult key={element.userId}>
                    <h3>{element.dataConsulta}</h3>
                    <h3>{element.horarioConsulta}</h3>
                    <h3>{element.modo}</h3>
                    <h3>{arrUser.map((item)=> item.id === element.userId ? (item.name) : null)}</h3>
                </LiConsult>
                )
            })}
        </UlConsult>
    )
}

export default ListConsultPatient;