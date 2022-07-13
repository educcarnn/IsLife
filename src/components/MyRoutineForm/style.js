import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  background: var(--cinza);

  font-family: "Inter", serif;

  border: 3px solid red;

  width: 400px;
  height: 600px;

  input {
    background: var(--inputsBackground);
    border-radius: 5px;
    border: 1px solid transparent;
    color: var(--pretoFont);
    display: flex;
    height: 3rem;
    width: 100%;
  }

  select {
    background: var(--inputsBackground);
    border-radius: 10px;
    border: 1px solid transparent;
    /* color: var(--pretoFont); */
    display: flex;
    height: 3rem;
    width: 100%;

    option {
      background: transparent;
      border: 1px solid transparent;
    }
  }
`;
