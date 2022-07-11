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

export const FormElem = styled.form`
    align-items: center;
        display: flex;
        flex-direction: column;
   
   .imgSize{
    width: 10rem;
   }
   .buttonDoctor {
    border:none;
    background-color: transparent;
   }

   .label{
    background-color: #D9D9D9;
    border: none;
    margin-bottom: 0.5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 0.5rem;
   }
`
