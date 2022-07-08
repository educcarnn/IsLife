import styled from "styled-components";

export const ContainerList = styled.li`
  background: white;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 25px;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    height: 150px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 150px;
  }
`;
