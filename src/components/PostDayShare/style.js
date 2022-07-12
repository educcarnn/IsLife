import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  gap: 1rem;

  width: 100%;


  padding: 1rem;

  color: #ffff;
  background-color: #000000;

  section{
    width: 60px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50px;
    background-color: aqua;

  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: .5rem 1rem;
`;
