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
  InputStatus,
} from "./styles";
import {api} from "../../services/api"
import AuthGlobal from "../../components/Roules/AuthGlobal";
const token = JSON.parse(localStorage.getItem("token"))

// function DayShare() {
//   const [valueTextArea, setValueTextArea] = useState("");
//   const [valueInput, setValueInput] = useState("");
//   const [messages, setMessages] = useState([]);

//   const date = new Date();

//   const currentYear = date.getFullYear();
//   const today = date.getDate();
//   const currentMonth = date.getMonth() + 1;

//   const dia = today + "/" + currentMonth + "/" + currentYear;

//   console.log(dia);

//  useEffect(()=>{
//   api.get(`/messages?userId=${token.user.id}`,{
//     headers: {"Authorization": `Bearer ${token.accessToken}`
//    }})
//    .then((response)=> setMessages(response.data))
// },[messages])
 
// if(localStorage.getItem('token') === null) {
//   return (
//    <AuthGlobal/>
//    )
//   }else {
//   const token = JSON.parse(localStorage.getItem("token"));

//   function getInfo(valueInput, valueTextArea) {
//     api
//       .post(
//         "/messages",
//         {
//           nome: token.user.name,
//           status: valueInput,
//           day: dia,
//           msgImage:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL8t1n4_1cQSVsXJh9lhpFs1DRMFOF58V-Q&usqp=CAU",
//           msgPatient: valueTextArea,
//           userId: token.user.id,
//           IdDoctor: token.user.doctorId,
//         },
//         {
//           headers: { Authorization: `Bearer ${token.accessToken}` },
//         }
//       )
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));
//   }

//   useEffect(() => {
//     api
//       .get(`/messages?userId=${token.user.id}`, {
//         headers: { Authorization: `Bearer ${token.accessToken}` },
//       })
//       .then((response) => setMessages(response.data));
//   }, [messages]);


 
//     if(localStorage.getItem('token' === null)) {
//       return (
//         <AuthGlobal/>
//       )
//     } else {
//       return (
//         <div>
//         <ContainerDayShare>
//           <ContentShare>
//             <h2 className="title-consults">Compartilhe</h2>
//             <p>com o seu médico como foi o seu dia</p>
  
//             <ContentDayShare>
//               <InputStatus
//                 placeholder="status"
//                 onChange={(event) => setValueInput(event.target.value)}
//               />
  
//               <TextDayShare
//                 rows="10"
//                 placeholder="Como você está se sentindo hoje?"
//                 onChange={(event) => setValueTextArea(event.target.value)}
//               />
//             </ContentDayShare>
  
//             <ContainerBtn>
//               <button onClick={() => getInfo(valueInput, valueTextArea)}>
//                 Enviar
//               </button>
//             </ContainerBtn>
//           </ContentShare>
  
//           <ContentConsultList>
//             <ListContentDayshare>
//               {messages.map((element) => (
//                 <PostDayShare element={element} />
//               ))}
//             </ListContentDayshare>
//           </ContentConsultList>
//         </ContainerDayShare>
//       </div>
//       )
//     }
    
//   ;

// }

// export default DayShare;
