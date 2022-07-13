import styled from "styled-components";

export const ContainerListConsult = styled.li`
  background: white;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-left: 5px solid green;
  box-shadow: 0px 0px 4px grey;

  .paragraph {
    font-size: 18px;
  }
  .div-paragraph--check {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 16px;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 150px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 310px;
  }
`;
