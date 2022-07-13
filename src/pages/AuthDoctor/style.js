import styled from "styled-components";

export const DivElems = styled.div`

        display: flex;
        flex-direction: column;
        max-width: 100%;

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
   justify-content: flex-end;
   
   .button{
    padding: 0.5rem;
    margin-top: -11rem;
    margin-right: 4rem;
   }

`

export const FormElem = styled.form`
    align-items: center;
        display: flex;
        flex-direction: column;
    .DivElem {
        padding: 2rem;
        background-color: #D9D9D9;
        margin-top: -2rem;
    }
    .DivButton {
        margin-top: -1.7rem;
    }
   
   .imgSize{
    width: 12rem;
   }
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
