import styled, {keyframes} from "styled-components";

export const DivGlobalLogin = styled.div`
width: 100vw;
height: 100vh;
display: flex;
gap: 25px;
flex-direction: column;
align-items: center;
/* background-color: antiquewhite; */

img{
    width: 100px;
    height: 80px;
}

`

export const  DivHeader = styled.div`
   width: 100vw;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   button{
    margin-right: 20px;
    font-family:  "Inter";
    cursor: pointer;
    height: 30px;
    width: 100px;
    border:none;
    color:  #CE2D5D;
    border: 1px solid #CE2D5D;

    :hover{
        color: white;
        background-color: #CE2D5D;
        border: 1px solid #CE2D5D;

    }
   }
`

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


export const DivBody = styled.div`
background-color: #D9D9D9;
width: 290px;
height: 380px;
border-radius: 8px;
animation: ${animation} 1s;

`



export const FormLogin = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 18px;
background-color: #D9D9D9;
width: 272px;
height: 290px;

input{
    width: 265px;
    margin-left: 12px;
    height: 38px;
    border: none;
    border-radius: 5px;
}

button{
    background-color: #CE2D5D;
    color: white;
    width: 265px;
    height: 48px;
    border-radius: 5px;
    font-family:  "Inter";
    margin-left: 12px;
    cursor: pointer;
    border: 1px solid #CE2D5D;

    :hover{
        color: #CE2D5D;
        background-color: white;
        border: 1px solid #CE2D5D;

    }

}

`

export const DivLabel = styled.div`
width: 272px;
display: flex;
flex-direction: row;
justify-content: flex-start;

label{
    padding-left: 12px;
    font-family:  "Inter";
}

`

export const DivInfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-family:  "Inter";
 gap: 15px;

 h4{
    font-size: 13px;
 }

 button{
    color: #CE2D5D;
    border: 1px solid #CE2D5D;
    font-family:  "Inter";
    width: 100px;
    height: 30px;

    :hover{
        color: white;
        background-color: #CE2D5D;
        border: 1px solid #CE2D5D;

    }


 }
`
