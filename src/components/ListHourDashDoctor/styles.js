import styled from "styled-components";

export const ContainerList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #f0f3f4;
  gap: 16px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px grey;

  .avatar {
    width: 55px;
    height: 55px;
    border: 1px solid black;
    border-radius: 100px;
  }
  .list-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 150px;
    width: 400px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 310px;
    height: 150px;
  }
`;
