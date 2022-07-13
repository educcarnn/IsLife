import styled from "styled-components";

export const TarefaConcent = styled.li`
  background: white;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border-left: 5px solid red; */
  box-shadow: 0px 0px 4px grey;

  h6,
  span {
    font-size: 18px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100px;
    padding: 0.3rem 0;
  }
`;

export const DivExtra = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
