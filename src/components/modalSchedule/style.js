import styled, {keyframes} from "styled-components";

const animation = keyframes`
from{
 opacity: 0;
  transform: translateX(50px);
}

to{
 opacity: 1;
  transform: translateX(0px);

}
`

export const DivGlobalModalShedule = styled.div`
background-color: rgb(96, 98, 100);
width: 100vw;
height: 100vh;
position: absolute;
top: 79px;
display: flex;
align-items: center;
justify-content: center;
opacity:0.8 ;
z-index: 1;
animation: ${animation} 1s;

`
export const DivFormModal = styled.div`
margin-top: 30px;
  background-color: black;
  position: absolute;
  opacity: 1;
  width: 450px;
  height: 410px;
  background-color: black;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  gap: 50px;

  @media (max-width: 455px) {
    width: 300px;
    gap: 20px;
    
  }

`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

.selectPatient {
  width: 400px ;
  height: 40px;

  @media (max-width: 455px) {
    width: 250px;


}
}


input{
  width: 400px ;
  height: 40px;

  @media (max-width: 455px) {
    width: 250px;


}

}

.datepicker{
  color: black;
  background-color: white;


}



.divPicker{
  display: flex;
  flex-direction: row;
  gap: 80px;

  @media (max-width: 455px) {
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
    width: 250px;

}



  .divPickerData{
    display: flex;
    flex-direction: column;
    color: white;
    gap: 5px;
    font-family: "Inter";
  }

  .divPickerData input{
    width: 156px;
    height: 35px;
  }

  


  .divPickerHora{
    display: flex;
    flex-direction: column;
    color: white;
    gap: 5px;
    font-family: "Inter";

  }

  .divPickerHora input{
    width: 156px;
    height: 32px;
  }
}
`


export const DivHeaderForm = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: white;
height: 50px;

h3{
  color:black;
  margin-left: 15px;
}

button{
  opacity: 1;
  background-color: #CE2D5D;
  color: white;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  border: 1px solid #CE2D5D;
}

`

export const ButtonSchedule = styled.button`
    height: 45px;
    border-radius: 5px;
    color: white;
    background-color: #CE2D5D;
    margin-bottom: 15px;
    width: 288px;

    :hover{
      background-color: white;
      border:  1px solid #CE2D5D;
      color: #CE2D5D
    }

    @media (max-width: 455px) {
    margin-bottom: 5px;
    width: 250px;
    height: 40px;


}

`
