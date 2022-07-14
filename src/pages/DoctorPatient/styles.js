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

export const ContainerPatient = styled.main`
  margin-top: 16px;
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  animation: ${animation} 1s;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
    margin-left: 16px;
    align-content: center;
    justify-content: flex-start;
  }
`;
export const ContentPatientForm = styled.div`
  width: 30%;

  .form-title {
    font-weight: 600;
    font-size: 24px;
  }
  @media (max-width: 900px) {
    width: 310px;
    .form-title {
      text-align: center;
    }
  }
`;
export const ContentPatientList = styled.div`
  width: 50%;

  .name-patient {
    font-weight: 600;
    font-size: 24px;
    margin-left: 16px;
  }
  .div-description-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
  }
  .div-btn--list {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-right: 16px;
    .btn-patient--new---list {
      border: none;
      background: transparent;
      font-weight: 600;
      font-size: 24px;
    }
  }
  @media (max-width: 900px) {
    width: 310px;
    .div-description-list {
      display: flex;
      flex-direction: column;
      font-size: 16px;
    }
    .div-btn--list {
      font-size: 16px;
      display: flex;
      flex-direction: column;
    }
    .btn-patient--new---list {
      font-size: 16px;
    }
    .name-patient {
      font-size: 24px;
      margin-bottom: 10px;
      padding-right: 25px;
    }
  }
`;

export const UlContainer = styled.ul`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 310px;
    margin-bottom: 16px;
    .img-nocard--new---patient {
      width: 290px;
    }
  }
`;
