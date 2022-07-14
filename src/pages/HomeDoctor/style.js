import styled from "styled-components";

export const DivFather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  max-width: 100%;
  background-color: salmon;
  margin-top: 2rem;
  padding-top: 5rem;
  padding-bottom: 4rem;
  gap: 8rem;

  .container-btn--home---doctor {
    display: flex;
    width: 100%;
    justify-content: center;

    .div-btn--home---doctor {
      width: 313px;
      display: flex;
      justify-content: flex-end;
      .voltar-home--doctor {
        height: 30px;
        width: 70px;
        border-radius: 8px;
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
    padding: 0.5rem;
    background-color: #d9d9d9;
    margin-bottom: 1.5rem;
  }

  .ElemDiv {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;
