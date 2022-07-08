import styled from "styled-components";

export const ContainerListNewPatient = styled.li`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-bottom: 16px;
  gap: 25px;
  border-left: 5px solid green;
  box-shadow: 0px 0px 4px grey;
  border-radius: 5px;
  width: 90%;
  margin-top: 25px;
  height: 70px;
  background-color: #f8f9fa;
  .name-and--date {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  .phone-and--email {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  .img-nocard--new---patient {
    width: 100%;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 290px;
    height: 135px;
    justify-content: center;
    .name-and--date {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
    .phone-and--email {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
