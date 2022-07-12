import styled from "styled-components";

export const ContainerInput = styled.div`
  text-align: left;
`;

export const Content = styled.div`
  background: var(--inputsBackground);
  border-radius: 5px;
  border: 1px solid transparent;
  color: var(--pretoFont);
  display: flex;
  height: 3rem;
  width: 100%;

  input {
    background: transparent;
    border: 1px solid transparent;
    width: 100%;
  }

  select {
    background: var(--inputsBackground);
    border-radius: 10px;
    border: 1px solid transparent;
    /* color: var(--pretoFont); */
    display: flex;
    width: 100%;

    option {
      background: transparent;
      border: 1px solid transparent;
    }
  }
`;
