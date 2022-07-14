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


export const DivFather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  max-width: 100%;
  gap: 85px;
  animation: ${animation} 1s;

  .container-btn--home---doctor {
    display: flex;
    justify-content: center;
    width: 100%;
    justify-content: flex-end;

    .div-btn--home---doctor {
      width: 313px;
      display: flex;
      justify-content: flex-end;
      
      .voltar-home--doctor {
        height: 35px;
        width: 100px;
        margin-top: 25px;
        margin-right: 50px;
        border-radius: 5px;
      }
    }
  }

  .ElemItens {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .ImgElem {
    width: 12rem;
  }

  .DivElem {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 350px;
    height: 170px;
    background-color: #d9d9d9;
    align-items: center;
    justify-content: center;
  }

  .ElemDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    gap: 5px;

    .btn1{

      color: white;
        background-color: #CE2D5D;
        border: 1px solid #CE2D5D;
        width: 265px;
       height: 35px;



      :hover{
        color: #CE2D5D;
        background-color: white;
        border: 1px solid #CE2D5D;
    }


    }

    .btn2{

        color: #CE2D5D;
        background-color: white;
        border: 1px solid #CE2D5D;
        width: 265px;
        height: 35px;


        :hover{
          color: white;
        background-color: #CE2D5D;
        border: 1px solid #CE2D5D;

        }



   }

  }

`;
