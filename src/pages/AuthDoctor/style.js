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
const imganimation = keyframes`
from{
 opacity: 0;
  transform: translateX(100px);
}

to{
 opacity: 1;
  transform: translateX(0px);

}


`

export const DivGlobalRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 98vw;
  height: 100vh;

  .divGlobalForm{
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 400px;
    height: 650px;
    background-color:#D9D9D9;
    border-radius: 5px;
    animation: ${animation} 1s;

  }

    h2{
    padding: 0px;
    margin: 0px;
    font-family: "Inter";
    font-weight: bold;
    text-shadow:1px 1px  #CE2D5D;
    font-size: 20px;
    }
`

export const DivElems = styled.div`

        display: flex;
        flex-direction: column;
        max-width: 100%;
        gap: 1px;


        .divError{
          color: #CE2D5D;
          font-size: 8px;
          
        }
        
        input{
            height: 25px;          
        }

        select{
            height: 30px;
        }

        button{
            height: 40px;
            
            :hover{
                background-color: white;
                border: 2px solid #CE2D5D;
                color: #CE2D5D;
            }
        }


    @media (max-width: 800px){
        display: flex;
        max-width: 100%;
        flex-direction: column;
    }
`

export const DivVoltar = styled.div`

   width: 100vw;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   .button{
    width: 100px;
    height: 30px;
    border-radius: 0px;
    margin-right: 10px;
    background-color: white;
    border: 2px solid #CE2D5D;
    color: #CE2D5D;

    :hover{
    background-color: #CE2D5D;
    border: 2px solid #CE2D5D;
    color: white;
    }
   }

   img{
    width: 200px;
    height: 110px;
    margin-top: 30px;
    animation: ${imganimation} 2s;
   }

`

export const FormElem = styled.form`
        align-items: stretch;
        display: flex;
        flex-direction: column;
        background-color: #D9D9D9;
        width: 350px;
        font-size: "Inter";
   
   .buttonDoctor {
    border:none;
    background-color: transparent;
   }


   .label{
    background-color: #ffffff;
    border: none;
    margin-bottom: 0.5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 0.5rem;
   }
`
