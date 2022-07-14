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

const anima = keyframes`
from{
 opacity: 0;
}

to{
 opacity: 1;

}
`



export const DivHomePatient = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 100px;
  align-items: center;
  background-color: white;
  animation: ${animation} 1s;


  .container-btn--home---patient {
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: flex-end;

    .div-btn--home---patient {
      width: 313px;
      display: flex;
      justify-content: flex-end;
      .voltar-home--patient {
        height: 35px;
        width: 95px;
        border-radius: 5px;
        margin-top: 15px;
        margin-right: 50px;
      }
    }
  }

  .imgLogo {
    width: 7rem;
    margin-bottom: -1rem;
  }
  .imgHome {
    width: 12rem;
  }

  .DivButtonHome {
    display: flex;
    flex-direction: column;
    background-color: #d9d9d9;
    padding: 1rem;
    border-radius: 2px;
    width: 247px;
    height: 68px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .DivButtonHome button {
    display: flex;
    flex-direction: column;
    width: 227px;
    height: 38px;
    justify-content: center;
    align-items: center;
    font-family: "Inter";
    background-color: #CE2D5D;
    color:  white;
    border: 1px solid #CE2D5D;


    :hover{
      color: #CE2D5D;
        background-color: white;
        border: 1px solid #CE2D5D;
    }
  }

`;
