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


export const ContainerSchedule = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 16px;
  animation: ${animation} 1s;

  .title-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 16px;
    .title-schedule {
      font-size: 25px;
    }
    .btn-schedule {
      font-size: 25px;
      font-weight: 700;
      color: white;
      border: 1px solid #ce2d5d;
      background-color: #ce2d5d;
      border-radius: 5px;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        background-color: #d43f6b;
      }
    }
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const ContentSchedule = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  .img-no-card {
    width: 100%;
    max-height: 89px;
    min-height: 88px;
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 90%;
    margin: 16px;
  }
  .img-no-card {
    width: 100%;
    height: 88px;
  }
`;

export const ListContentSchedule = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentImgSchedule = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  .img-schedule {
    width: 100%;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
