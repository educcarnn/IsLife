import { useEffect, useState } from "react";
import PostDayShare from "../../components/PostDayShare";
import {
  ContainerDayShare,
  ContentShare,
  ContentConsultList,
  ContentDayShare,
  ListContentDayshare,
  TextDayShare,
  ContainerBtn,
  InputStatus
} from "./styles";
import {api} from "../../services/api"

function DayShare() {

 const [valueTextArea, setValueTextArea] = useState("")
 const [valueInput, setValueInput] = useState("")
 const [objMessage, setObjMessage] = useState({})

 const token = JSON.parse(localStorage.getItem("token"))
 
 function getInfo(valueInput, valueTextArea){

    console.log(token.user.id)
    setObjMessage({
      nome: token.user.name,
      status: valueInput,
      msgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL8t1n4_1cQSVsXJh9lhpFs1DRMFOF58V-Q&usqp=CAU",
      msgPatient: valueTextArea,
      userId: token.user.id,
      IdDoctor: token.user.doctorId
    })

    api.post("/messages",{
      nome: token.user.name,
      status: valueInput,
      msgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL8t1n4_1cQSVsXJh9lhpFs1DRMFOF58V-Q&usqp=CAU",
      msgPatient: valueTextArea,
      userId: token.user.id,
      IdDoctor: token.user.doctorId
    },
    {
        headers: {"Authorization": `Bearer ${token.accessToken}`
    }})
    .then((response)=> console.log(response))
    .catch((err)=> console.log(err))

}




 

  return (
    <div>
      <ContainerDayShare>
        <ContentShare>
          <h2 className="title-consults">Compartilhe</h2>
          <p>com o seu médico como foi o seu dia</p>
          <ContentDayShare>

            <TextDayShare
              rows="10"
              placeholder="Como você está se sentindo hoje?"
              onChange={(event)=> setValueTextArea(event.target.value)}/>
              
              <InputStatus placeholder="status"
              onChange={(event)=> setValueInput(event.target.value)}/>

          </ContentDayShare>

          <ContainerBtn>

            <button onClick={()=> getInfo(valueInput,valueTextArea)}>Enviar</button>
            <button>Limpar</button>

          </ContainerBtn>
        </ContentShare>

        <ContentConsultList>
          <ListContentDayshare>
            <PostDayShare/>
          </ListContentDayshare>
        </ContentConsultList>
      </ContainerDayShare>
    </div>
  );
}

export default DayShare;
