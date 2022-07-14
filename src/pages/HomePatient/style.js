import styled from "styled-components";

export const DivHomePatient = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 3rem;
  align-items: center;
  background-color: darkturquoise;
  padding-bottom: 7%;
  padding-top: 1.7%;

  .container-btn--home---patient {
    display: flex;
    width: 100%;
    justify-content: center;

    .div-btn--home---patient {
      width: 313px;
      display: flex;
      justify-content: flex-end;
      .voltar-home--patient {
        height: 30px;
        width: 70px;
        border-radius: 8px;
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
    border-radius: 5px;
  }
`;
